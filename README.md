# Personal Coding Assistant

The **Personal Coding Assistant** is an AI-powered extension for Visual Studio Code that helps developers write, refactor, and learn code more effectively. It leverages AI to provide suggestions, explanations, error detection, refactoring tips, and educational insights.

---

## Features

### 1. **Suggest Code**
- Generate code suggestions based on partial code snippets.
- Example:
  ```python
  def calculate_area(radius):
      return 3.14 * radius *
  ```

### 2. **Explain Code**
- Get detailed explanations of what a piece of code does.
- Example:
  ```python
  def add(a, b):
      return a + b
  ```
  **Explanation**:
  > This function adds two numbers, `a` and `b`, and returns their sum.

### 3. **Detect Errors**
- Detect syntax and linting errors in Python code using `pylint` and `ast`.
- Example:
  ```python
  def calculate_area(radius):
      return 3.14 * radius *
  ```
  **Error**:
  > Syntax Error: invalid syntax at line 2, column 25.

### 4. **Refactor Code**
- Suggest improvements for better readability and maintainability.
- Example:
  ```python
  def add(a, b): return a+b
  ```
  **Refactored Code**:
  ```python
  def add(a, b):
      return a + b
  ```

### 5. **Learn Code**
- Get coding tips and best practices for selected code snippets.
- Example:
  ```python
  for i in range(len(my_list)):
      print(my_list[i])
  ```
  **Tip**:
  > Consider using list comprehensions for better performance.

---

## Requirements

- Python 3.8 or higher.
- Install the following Python packages:
  ```bash
  pip install pylint black python-dotenv groq
  ```
- Add your `GROQ_API_KEY` to a `.env` file in the project root:
  ```
  GROQ_API_KEY=your-api-key(ou can find free GROQ API on [GROQ](https://groq.com/))
  ```

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShreyanshShakya/personal-coding-assistant.git
   cd personal-coding-assistant
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the extension:
   ```bash
   npm run compile
   ```

4. Package the extension:
   ```bash
   vsce package
   ```

5. Install the `.vsix` file in Visual Studio Code:
   ```bash
   code --install-extension personal-coding-assistant-1.0.0.vsix
   ```

---

## Usage

1. Open a Python file in Visual Studio Code.
2. Select a portion of code or open a file.
3. Use the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on Mac) and run one of the following commands:
   - **AI Assistant: Suggest Code**
   - **AI Assistant: Explain Code**
   - **AI Assistant: Detect Errors**
   - **AI Assistant: Refactor Code**
   - **AI Assistant: Learn Code**
4. View the results in the Output Panel.

---

## Extension Settings

This extension does not add any custom settings yet.

---

## Known Issues

- The extension requires an active internet connection for AI-powered features.
- Ensure the `GROQ_API_KEY` is valid and set in the `.env` file.

---

## Release Notes

### 1.0.0
- Initial release with the following features:
  - Code Suggestion
  - Code Explanation
  - Error Detection
  - Code Refactoring
  - Learning Mode

---

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License.

---

## Contact

For questions or feedback, please contact [Shreyansh Shakya](https://github.com/ShreyanshShakya).
