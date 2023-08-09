import * as vscode from "vscode";
import { Command } from "../constant";

export class GetTextSelection {
    getSelectionTextCommand() {
        console.log('Congratulations, your extension "helloworld" is now active!');
        return vscode.commands.registerCommand(
            Command.selectAndFormat,
            () => {
                const editor = vscode.window.activeTextEditor;
    
                if (editor) {
                    const document = editor.document;
                    const selection = editor.selection;
    
                    const word = document.getText(selection);
                    const reversed = word.split('').reverse().join('');
    
                    editor.edit(editBuilder => {
                        editBuilder.replace(selection, reversed);
                    });
                }
            }
        );
    }
}