/**
 * Proves that the Agent Skill definitions, canonical mirror, and skills.sh manifest
 * are valid, consistent, hermetic, and free of untrusted remote dependencies or telemetry.
 *
 * Checks:
 *  - Root SKILL.md exists, has valid YAML frontmatter (name: intelligent-workspace, non-empty description).
 *  - Canonical skills/ directory exists and each skill has a matching SKILL.md definition.
 *  - Byte-for-byte parity is maintained between root SKILL.md and skills/intelligent-workspace/SKILL.md.
 *  - skills.sh.json exists, adheres to the skills.sh schema, and all declared skills resolve to existing definitions.
 *  - Absence of unpinned dynamic package executions (e.g., `npx skills`) or external telemetry curl pings.
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const problems = [];

// ── 1. Root SKILL.md ──────────────────────────────────────────────────────────
if (!existsSync('SKILL.md')) {
    problems.push('Root SKILL.md does not exist.');
} else {
    const rootContent = readFileSync('SKILL.md', 'utf8');
    const fmMatch = rootContent.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!fmMatch) {
        problems.push('Root SKILL.md does not contain YAML frontmatter delimited by `---`.');
    } else {
        const yaml = fmMatch[1];
        const nameMatch = yaml.match(/^name:\s*([^\r\n]+)/m);
        const descMatch = yaml.match(/^description:\s*([^\r\n]+)/m);

        if (!nameMatch || !nameMatch[1].trim()) {
            problems.push('Root SKILL.md frontmatter is missing required `name` field.');
        } else {
            const skillName = nameMatch[1].trim();
            if (skillName !== 'intelligent-workspace') {
                problems.push(`Root SKILL.md name is "${skillName}", expected "intelligent-workspace".`);
            }
        }

        if (!descMatch || !descMatch[1].trim()) {
            problems.push('Root SKILL.md frontmatter is missing required non-empty `description` field.');
        }
    }

    // Verify absence of dangerous dynamic remote shell execution in documentation
    if (/(?:curl|wget)\s+[^|\n\r]+?\|\s*(?:bash|sh)/i.test(rootContent)) {
        problems.push('Root SKILL.md contains an untrusted pipe-to-shell command pattern (curl/wget | sh).');
    }
}

// ── 2. Canonical skills/ Directory & Parity ────────────────────────────────────
if (!existsSync('skills')) {
    problems.push('Directory `skills/` does not exist.');
} else {
    const entries = readdirSync('skills', { withFileTypes: true });
    const skillDirs = entries.filter((e) => e.isDirectory()).map((e) => e.name);

    if (skillDirs.length === 0) {
        problems.push('Directory `skills/` contains no skill subdirectories.');
    }

    for (const skillName of skillDirs) {
        const skillMdPath = join('skills', skillName, 'SKILL.md');
        if (!existsSync(skillMdPath)) {
            problems.push(`Missing SKILL.md in skills/${skillName}/.`);
            continue;
        }
        const content = readFileSync(skillMdPath, 'utf8');
        const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
        if (!fmMatch) {
            problems.push(`skills/${skillName}/SKILL.md is missing YAML frontmatter.`);
            continue;
        }
        const name = fmMatch[1].match(/^name:\s*([^\r\n]+)/m)?.[1]?.trim();
        if (name !== skillName) {
            problems.push(
                `skills/${skillName}/SKILL.md frontmatter name '${name}' does not match directory '${skillName}'.`,
            );
        }
    }

    // Byte-for-byte parity check between root and canonical mirror
    const canonicalPath = 'skills/intelligent-workspace/SKILL.md';
    if (existsSync('SKILL.md') && existsSync(canonicalPath)) {
        const rootBuf = readFileSync('SKILL.md');
        const canonicalBuf = readFileSync(canonicalPath);
        if (Buffer.compare(rootBuf, canonicalBuf) !== 0) {
            problems.push(
                `Root SKILL.md and ${canonicalPath} are not byte-for-byte identical. Synchronize changes to both files.`,
            );
        }
    } else if (!existsSync(canonicalPath)) {
        problems.push(`Canonical skill file ${canonicalPath} does not exist.`);
    }
}

// ── 3. skills.sh.json Manifest ────────────────────────────────────────────────
if (!existsSync('skills.sh.json')) {
    problems.push('skills.sh.json manifest does not exist.');
} else {
    try {
        const raw = readFileSync('skills.sh.json', 'utf8');
        const manifest = JSON.parse(raw);

        if (manifest.$schema !== 'https://skills.sh/schemas/skills.sh.schema.json') {
            problems.push(
                'skills.sh.json `$schema` must be "https://skills.sh/schemas/skills.sh.schema.json".',
            );
        }

        if (manifest.notGrouped && !['top', 'bottom'].includes(manifest.notGrouped)) {
            problems.push('skills.sh.json `notGrouped` must be either "top" or "bottom".');
        }

        if (!Array.isArray(manifest.groupings) || manifest.groupings.length === 0) {
            problems.push('skills.sh.json must have a non-empty `groupings` array.');
        } else {
            for (const group of manifest.groupings) {
                if (!group.title || typeof group.title !== 'string') {
                    problems.push('Grouping in skills.sh.json is missing a valid `title`.');
                }
                if (!Array.isArray(group.skills) || group.skills.length === 0) {
                    problems.push(
                        `Grouping "${group.title ?? 'unnamed'}" is missing a non-empty \`skills\` array.`,
                    );
                } else {
                    for (const skillSlug of group.skills) {
                        const skillPath = join('skills', skillSlug, 'SKILL.md');
                        if (!existsSync(skillPath)) {
                            problems.push(
                                `Referenced skill "${skillSlug}" in skills.sh.json does not exist at "${skillPath}".`,
                            );
                        }
                    }
                }
            }
        }
    } catch (err) {
        problems.push(`skills.sh.json is not valid JSON: ${err.message}`);
    }
}

// ── 4. Workflow Security & Hygiene ───────────────────────────────────────────
if (existsSync('.github/workflows/skills.yml')) {
    const workflowContent = readFileSync('.github/workflows/skills.yml', 'utf8');

    // Reject unpinned dynamic npm executions (triggers Snyk W012)
    if (/npx\s+(--yes\s+)?skills/i.test(workflowContent)) {
        problems.push(
            '.github/workflows/skills.yml contains unpinned dynamic `npx skills` execution (triggers Snyk W012).',
        );
    }

    // Reject external telemetry pings
    if (
        /curl\s+.*add-skill\.vercel\.sh/i.test(workflowContent) ||
        /curl\s+.*telemetry/i.test(workflowContent)
    ) {
        problems.push('.github/workflows/skills.yml contains external telemetry `curl` pings.');
    }
}

// ── Results ───────────────────────────────────────────────────────────────────
if (problems.length > 0) {
    console.error(
        `Skills validation failed with ${problems.length} problem(s):\n\n  ${problems.join('\n  ')}\n`,
    );
    process.exit(1);
}

console.log(
    'Skills validation: SKILL.md frontmatter, canonical directory parity, and skills.sh.json manifest are valid and hermetic.',
);
