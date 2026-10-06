#!/usr/bin/env python3
"""
Translates all localized public/llms-<lang>.txt files in Intelligent Workspace Web
into their respective target languages using `agy --model gemini-3.8-flash-low`.
"""

import os
import sys
import time
import subprocess
from concurrent.futures import ThreadPoolExecutor, as_completed

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUBLIC_DIR = os.path.join(PROJECT_DIR, "public")
SOURCE_FILE = os.path.join(PUBLIC_DIR, "llms-full.txt")

ENGLISH_MARKER = "This technical specification is available in the top 25 languages worldwide"

# Target languages (excluding 'en', and 'es'/'fr' which are already done)
TARGET_LANGUAGES = [
    ("de", "German (Deutsch)"),
    ("it", "Italian (Italiano)"),
    ("pt", "Brazilian Portuguese (Português do Brasil)"),
    ("ru", "Russian (Русский)"),
    ("zh", "Simplified Chinese (简体中文)"),
    ("ja", "Japanese (日本語)"),
    ("ko", "Korean (한국어)"),
    ("ar", "Modern Standard Arabic (العربية)"),
    ("hi", "Hindi (हिन्दी)"),
    ("bn", "Bengali (বাংলা)"),
    ("ur", "Urdu (اردو)"),
    ("id", "Indonesian (Bahasa Indonesia)"),
    ("tr", "Turkish (Türkçe)"),
    ("vi", "Vietnamese (Tiếng Việt)"),
    ("tl", "Tagalog / Filipino"),
    ("fa", "Persian / Farsi (فارسی)"),
    ("mr", "Marathi (मराठी)"),
    ("te", "Telugu (తెలుగు)"),
    ("ta", "Tamil (தமிழ்)"),
    ("pa", "Punjabi (ਪੰਜਾਬੀ)"),
    ("sw", "Swahili (Kiswahili)"),
    ("ha", "Hausa (Harshen Hausa)"),
]

def is_already_translated(file_path):
    if not os.path.exists(file_path):
        return False
    try:
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        lines = content.count("\n")
        if lines >= 800 and ENGLISH_MARKER not in content:
            return True
    except Exception as e:
        print(f"Error checking {file_path}: {e}")
    return False

def translate_language(code, lang_name, source_text, max_retries=3):
    dest_file = os.path.join(PUBLIC_DIR, f"llms-{code}.txt")
    if is_already_translated(dest_file):
        print(f"[{code.upper()}] Already translated. Skipping.")
        return code, True, "Already translated"

    prompt = f"""You are an expert technical translator.
Translate the following Markdown technical specification for 'Intelligent Workspace' into {lang_name}.
Rules:
1. Maintain the exact same Markdown structure (headers, tables, bullets, quotes, bold, italics).
2. DO NOT translate code blocks, inline code keywords, TypeScript interface names, command names, Omnibar prefix triggers, URLs, or file paths.
3. Translate all explanations, descriptions, table contents, and section titles accurately into fluent, natural {lang_name}.
4. Output ONLY the translated Markdown. Do not include markdown code fence around the whole response or any introductory/closing remarks.

Input Markdown:
{source_text}
"""

    for attempt in range(1, max_retries + 1):
        t0 = time.time()
        print(f"[{code.upper()}] Starting translation to {lang_name} (Attempt {attempt}/{max_retries})...")
        try:
            p = subprocess.Popen(
                ["agy", "--model", "gemini-3.8-flash-low", "-p", prompt],
                stdout=subprocess.PIPE,
                stderr=subprocess.PIPE,
                text=True
            )
            stdout, stderr = p.communicate()
            elapsed = time.time() - t0

            if p.returncode != 0:
                print(f"[{code.upper()}] Error (code {p.returncode}) after {elapsed:.1f}s: {stderr[:200]}")
                time.sleep(15 * attempt)
                continue

            cleaned = stdout.strip()
            # Strip accidental wrapping markdown code fence
            if cleaned.startswith("```markdown"):
                cleaned = cleaned[len("```markdown"):].strip()
            elif cleaned.startswith("```"):
                cleaned = cleaned[3:].strip()
            if cleaned.endswith("```"):
                cleaned = cleaned[:-3].strip()

            line_count = cleaned.count("\n")
            if line_count < 700:
                print(f"[{code.upper()}] Incomplete output ({line_count} lines, {len(cleaned)} chars). Retrying...")
                time.sleep(15 * attempt)
                continue

            if ENGLISH_MARKER in cleaned:
                print(f"[{code.upper()}] English marker still present in translation. Retrying...")
                time.sleep(15 * attempt)
                continue

            temp_dest = dest_file + ".tmp"
            with open(temp_dest, "w", encoding="utf-8") as f:
                f.write(cleaned + "\n")
            os.replace(temp_dest, dest_file)

            print(f"[{code.upper()}] SUCCESS! Written {dest_file} ({line_count} lines, {len(cleaned)} chars, {elapsed:.1f}s)")
            return code, True, f"Success ({line_count} lines in {elapsed:.1f}s)"

        except Exception as e:
            print(f"[{code.upper()}] Exception on attempt {attempt}: {e}")
            time.sleep(15 * attempt)

    return code, False, "Failed after max retries"

def main():
    if not os.path.exists(SOURCE_FILE):
        print(f"Source file {SOURCE_FILE} does not exist!")
        sys.exit(1)

    with open(SOURCE_FILE, "r", encoding="utf-8") as f:
        source_text = f.read()

    print(f"Source file loaded: {SOURCE_FILE} ({source_text.count(chr(10))} lines, {len(source_text)} chars)")
    print(f"Processing {len(TARGET_LANGUAGES)} languages with concurrency 2...")

    # Run with 2 parallel workers
    with ThreadPoolExecutor(max_workers=2) as executor:
        futures = {
            executor.submit(translate_language, code, lang_name, source_text): (code, lang_name)
            for code, lang_name in TARGET_LANGUAGES
        }

        results = {}
        for future in as_completed(futures):
            code, lang_name = futures[future]
            try:
                c, success, msg = future.result()
                results[c] = (success, msg)
                print(f"---> Status update: [{code.upper()}] {msg}")
            except Exception as e:
                results[code] = (False, str(e))
                print(f"---> Error for [{code.upper()}]: {e}")

    failed = [c for c, (ok, _) in results.items() if not ok]
    print("\n================ TRANSLATION SUMMARY ================")
    for code, lang_name in TARGET_LANGUAGES:
        status, msg = results.get(code, (False, "Not run"))
        flag = "✓" if status else "✗"
        print(f"[{flag}] {code.upper()} ({lang_name}): {msg}")

    if failed:
        print(f"\nFailed languages ({len(failed)}): {', '.join(failed)}")
        sys.exit(1)
    else:
        print("\nAll languages translated successfully!")

if __name__ == "__main__":
    main()
