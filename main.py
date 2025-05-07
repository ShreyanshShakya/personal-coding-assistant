from suggest_code import suggest_code
from explain_code import explain_code
from detect_errors import detect_errors, suggest_fixes
from refactor_code import format_code, suggest_refactoring
from learning_mode import provide_tips


def main():
    # Example: Code Suggestion
    partial_code = """
    def calculate_area(radius):
        return 3.14 * radius *
    """
    print("Generating code suggestion...")
    suggestion = suggest_code(partial_code)
    print("Suggested Code:")
    print(suggestion)

    # Example: Code Explanation
    code_to_explain = """
    def add(a, b):
        return a + b
    """
    print("\nGenerating code explanation...")
    explanation = explain_code(code_to_explain)
    print("Explanation:")
    print(explanation)

     # Example: Error Detection and Fixes
    file_to_check = "example.py"  # Replace with the path to your Python file
    print("Detecting errors in the file...")
    errors = detect_errors(file_to_check)
    print("Errors Detected:")
    print(errors)

    if errors.strip():
        print("\nSuggesting fixes for the errors...")
        fixes = suggest_fixes(errors)
        print("Suggested Fixes:")
        print(fixes)
    
    # Example: Code Refactoring
    file_to_refactor = "example.py"  # Replace with the path to your Python file
    print("Formatting the code...")
    formatting_result = format_code(file_to_refactor)
    print("Formatting Result:")
    print(formatting_result)

    print("\nSuggesting refactoring improvements...")
    with open(file_to_refactor, "r") as file:
        code = file.read()
    refactoring_suggestions = suggest_refactoring(code)
    print("Refactoring Suggestions:")
    print(refactoring_suggestions)

     # Example: Learning Mode
    code_to_analyze = """
    for i in range(len(my_list)):
        print(my_list[i])
    """
    print("Providing coding tips and best practices...")
    tips = provide_tips(code_to_analyze)
    print("Coding Tips:")
    print(tips)


if __name__ == "__main__":
    main()