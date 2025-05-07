import argparse
from suggest_code import suggest_code
from explain_code import explain_code
from detect_errors import detect_errors, suggest_fixes
from refactor_code import suggest_refactoring, format_code
from learning_mode import provide_tips


def main():
    import argparse

    parser = argparse.ArgumentParser(description="AI-Powered Coding Assistant")
    parser.add_argument(
        "feature",
        choices=["suggest", "explain", "detect", "refactor", "learn"],
        help="Select the feature to use: suggest, explain, detect, refactor, learn",
    )
    parser.add_argument("--file", type=str, help="Path to the file for features like detect or refactor")
    parser.add_argument("--code", type=str, help="Code snippet for features like suggest or explain")

    args = parser.parse_args()

    if args.feature == "explain":
        if args.code:
            try:
                explanation = explain_code(args.code)
                print(explanation)
            except Exception as e:
                print(f"Error: Failed to generate explanation. {str(e)}")
        else:
            print("Error: No code provided for explanation.")

    if args.feature == "suggest":
        if args.code:
            try:
                suggestion = suggest_code(args.code)
                print(suggestion)
            except Exception as e:
                print(f"Error: Failed to generate code suggestion. {str(e)}")
        else:
            print("Error: No code provided for suggestion.")

    if args.feature == "detect":
        if args.file:
            try:
                result = detect_errors(args.file)
                print(result)
            except Exception as e:
                print(f"Error: Failed to analyze file. {str(e)}")
        elif args.code:
            try:
                result = detect_errors_from_code(args.code)
                print(result)
            except Exception as e:
                print(f"Error: Failed to analyze code. {str(e)}")
        else:
            print("Error: No file or code provided for error detection.")

    if args.feature == "refactor":
        if args.file:
            try:
                print(f"Refactoring file: {args.file}")  # Debug log
                result = format_code(args.file)
                print(result)
            except Exception as e:
                print(f"Error: Failed to refactor file. {str(e)}")
        elif args.code:
            try:
                print(f"Refactoring code snippet: {args.code}")  # Debug log
                result = suggest_refactoring(args.code)
                print(result)
            except Exception as e:
                print(f"Error: Failed to refactor code. {str(e)}")
        else:
            print("Error: No file or code provided for refactoring.")
    

    if args.feature == "learn":
        if args.file:
            try:
                with open(args.file, "r") as f:
                    code = f.read()
                result = provide_tips(code)
                print(result)
            except Exception as e:
                print(f"Error: Failed to analyze file. {str(e)}")
        elif args.code:
            try:
                result = provide_tips(args.code)
                print(result)
            except Exception as e:
                print(f"Error: Failed to analyze code. {str(e)}")
        else:
            print("Error: No file or code provided for learning.")

if __name__ == "__main__":
    main()