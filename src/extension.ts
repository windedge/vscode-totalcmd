import * as vscode from 'vscode';
import { exec } from 'child_process';
import * as os from 'os';

function executeCommand(command: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const childProcess = exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error('Error executing command:', error);
        console.error('Stderr:', stderr);
        reject(error);
        return;
      }
      if (stdout) {
        console.log('Command output:', stdout);
      }
      if (stderr) {
        console.log('Command stderr:', stderr);
      }
      resolve();
    });

    childProcess.on('error', (error: NodeJS.ErrnoException) => {
      if (error.code === 'EPIPE') {
        console.log('Pipe communication disconnected');
        resolve();
      } else {
        reject(error);
      }
    });
  });
}

export function activate(context: vscode.ExtensionContext) {
  console.log('Open In TotalCmd is now active!');

  // 注册打开文件命令
  const openFileDisposable = vscode.commands.registerCommand('openInTotalCmd.openFile', async (uri?: vscode.Uri) => {
    let filePath: string;
    let dirPath: string;

    if (uri) {
      filePath = uri.fsPath;
      dirPath = filePath.substring(0, filePath.lastIndexOf('\\'));
    } else {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage('No active editor!');
        return;
      }
      filePath = editor.document.uri.fsPath;
      dirPath = filePath.substring(0, filePath.lastIndexOf('\\'));
    }

    const config = vscode.workspace.getConfiguration('openInTotalCmd');
    let totalCmdPath = config.get<string>('totalCmdPath') || 'C:\\Program Files\\Total Commander\\TOTALCMD64.EXE';
    const launchParams = config.get<string>('launchParameters') || '/O /T';

    if (os.platform() !== 'win32') {
      vscode.window.showErrorMessage('Total Commander is only supported on Windows');
      return;
    }

    const command = `"${totalCmdPath}" ${launchParams} /L="${dirPath}" /R="${filePath}"`;
    console.log('Executing command:', command);

    try {
      await executeCommand(command);
    } catch (error) {
      const err = error as Error;
      vscode.window.showErrorMessage(`Failed to open Total Commander: ${err.message}`);
    }
  });

  // 注册打开项目命令
  const openProjectDisposable = vscode.commands.registerCommand('openInTotalCmd.openProject', async () => {
    const workspaceFolders = vscode.workspace.workspaceFolders;
    if (!workspaceFolders?.length) {
      vscode.window.showErrorMessage('No workspace folder is opened!');
      return;
    }

    const projectPath = workspaceFolders[0].uri.fsPath;
    const config = vscode.workspace.getConfiguration('openInTotalCmd');
    let totalCmdPath = config.get<string>('totalCmdPath') || 'C:\\Program Files\\Total Commander\\TOTALCMD64.EXE';
    const launchParams = config.get<string>('launchParameters') || '/O /T';

    if (os.platform() !== 'win32') {
      vscode.window.showErrorMessage('Total Commander is only supported on Windows');
      return;
    }

    const command = `"${totalCmdPath}" ${launchParams} "${projectPath}"`;
    console.log('Executing command:', command);

    try {
      await executeCommand(command);
    } catch (error) {
      const err = error as Error;
      vscode.window.showErrorMessage(`Failed to open project in Total Commander: ${err.message}`);
    }
  });

  context.subscriptions.push(openFileDisposable, openProjectDisposable);
}

export function deactivate() {}
