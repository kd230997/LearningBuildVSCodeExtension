import * as vscode from "vscode";
import { GetTextSelection } from "./command/GetTextSelection" ;

let intervalUpdateTime: NodeJS.Timer;

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "helloworld" is now active!');
	const getTextSelection = new GetTextSelection();
	context.subscriptions.push(getTextSelection.getSelectionTextCommand());
	showTimeStatusBar();
}

export function deactivate() {
	clearInterval(intervalUpdateTime);
}

function showTimeStatusBar() {
	// create a new status bar item that we can now manage
	let myStatusBarItem = vscode.window.createStatusBarItem(
		vscode.StatusBarAlignment.Right,
		100
	);

	myStatusBarItem.tooltip = "Show current time!";
	myStatusBarItem.color = "#FFFFFF";
	intervalUpdateTime = setInterval(() => {
		const now = new Date();
		myStatusBarItem.text = `$(clock) ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
	}, 1000);
	myStatusBarItem.show();
}