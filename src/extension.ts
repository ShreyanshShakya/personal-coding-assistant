import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as path from 'path';

// Create an Output Channel
const outputChannel = vscode.window.createOutputChannel('Personal Coding Assistant');

function runPythonScript(feature: string, args: string[], callback: (output: string) => void) {
    const cliPath = path.resolve(__dirname, '../cli.py');
    const formattedArgs = args.map(arg => `"${arg.replace(/(["\\])/g, '\\$1')}"`);
    const pythonCommand = `python ${cliPath} ${feature} ${formattedArgs.join(' ')}`;

    console.log(`Executing: ${pythonCommand}`); // Debug log
    exec(pythonCommand, { env: { ...process.env, PYTHONIOENCODING: 'utf-8' } }, (error, stdout, stderr) => {
        if (error) {
            callback(`Error: ${stderr}`);
            return;
        }
        callback(stdout);
    });
}


export function activate(context: vscode.ExtensionContext) {
    // Suggest Code
    const suggestCode = vscode.commands.registerCommand('extension.suggestCode', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.document.getText(editor.selection);
            if (!selection.trim()) {
                vscode.window.showErrorMessage('No code selected. Please select some code to suggest.');
                return;
            }
    
            // Escape the selection to handle special characters
            const escapedSelection = selection.replace(/(["\\])/g, '\\$1').replace(/\n/g, '\\n');
            runPythonScript('suggest', ['--code', escapedSelection], (output) => {
                if (output.toLowerCase().includes('error')) {
                    outputChannel.appendLine(`Error: ${output}`);
                } else {
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Partial Code:`);
                    outputChannel.appendLine(`${selection}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Suggested Code:`);
                    outputChannel.appendLine(`${output}`);
                    outputChannel.appendLine(`====================`);
                }
                outputChannel.show();
            });
        } else {
            vscode.window.showErrorMessage('No active editor found.');
        }
    });

    // Explain Code
    const explainCode = vscode.commands.registerCommand('extension.explainCode', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const selection = editor.document.getText(editor.selection);
            if (!selection.trim() || !selection.includes('(')) {
                vscode.window.showErrorMessage('Invalid code selected. Please select valid Python code.');
                return;
            }
    
            const escapedSelection = selection.replace(/(["\\])/g, '\\$1');
            runPythonScript('explain', ['--code', escapedSelection], (output) => {
                if (output.toLowerCase().includes('error')) {
                    outputChannel.appendLine(`Error: ${output}`);
                } else {
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Explaining Code:`);
                    outputChannel.appendLine(`${selection}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Explanation:`);
                    outputChannel.appendLine(`${output}`);
                    outputChannel.appendLine(`====================`);
                }
                outputChannel.show();
            });
        } else {
            vscode.window.showErrorMessage('No active editor found.');
        }
    });

    // Detect Errors
    const detectErrors = vscode.commands.registerCommand('extension.detectErrors', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const filePath = editor.document.fileName;
            const fileContent = editor.document.getText();
    
            if (!fileContent.trim()) {
                vscode.window.showErrorMessage('The file or selected code is empty. Please provide valid Python code.');
                return;
            }
    
            if (filePath.startsWith('Untitled')) {
                // Handle unsaved files or selected code
                runPythonScript('detect', ['--code', fileContent], (output) => {
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Detecting Errors in Selected Code:`);
                    outputChannel.appendLine(`${fileContent}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(output);
                    outputChannel.appendLine(`====================`);
                    outputChannel.show();
                });
            } else {
                // Handle saved files
                runPythonScript('detect', ['--file', filePath], (output) => {
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`File: ${filePath}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(output);
                    outputChannel.appendLine(`====================`);
                    outputChannel.show();
                });
            }
        } else {
            vscode.window.showErrorMessage('No active editor found.');
        }
    });

    // Refactor Code
    const refactorCode = vscode.commands.registerCommand('extension.refactorCode', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const filePath = editor.document.fileName;
            const fileContent = editor.document.getText();
    
            if (!fileContent.trim()) {
                vscode.window.showErrorMessage('The file or selected code is empty. Please provide valid Python code.');
                return;
            }
    
            if (filePath.startsWith('Untitled')) {
                // Handle unsaved files or selected code
                runPythonScript('refactor', ['--code', fileContent], (output) => {
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Refactoring Selected Code:`);
                    outputChannel.appendLine(`${fileContent}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Refactored Code:`);
                    outputChannel.appendLine(`${output}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.show();
                });
            } else {
                // Handle saved files
                runPythonScript('refactor', ['--file', filePath], (output) => {
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`File: ${filePath}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Refactored Code:`);
                    outputChannel.appendLine(`${output}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.show();
                });
            }
        } else {
            vscode.window.showErrorMessage('No active editor found.');
        }
    });

    // Learn Code
    const learnCode = vscode.commands.registerCommand('extension.learnCode', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const filePath = editor.document.fileName;
            const fileContent = editor.document.getText();
    
            if (!fileContent.trim()) {
                vscode.window.showErrorMessage('The file or selected code is empty. Please provide valid Python code.');
                return;
            }
    
            if (filePath.startsWith('Untitled')) {
                // Handle unsaved files or selected code
                runPythonScript('learn', ['--code', fileContent], (output) => {
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Learning from Selected Code:`);
                    outputChannel.appendLine(`${fileContent}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Educational Insights:`);
                    outputChannel.appendLine(`${output}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.show();
                });
            } else {
                // Handle saved files
                runPythonScript('learn', ['--file', filePath], (output) => {
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`File: ${filePath}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.appendLine(`Educational Insights:`);
                    outputChannel.appendLine(`${output}`);
                    outputChannel.appendLine(`====================`);
                    outputChannel.show();
                });
            }
        } else {
            vscode.window.showErrorMessage('No active editor found.');
        }
    });

    context.subscriptions.push(suggestCode, explainCode, detectErrors, refactorCode, learnCode);
}

export function deactivate() {}