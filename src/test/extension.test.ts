import * as assert from 'assert';
import * as vscode from 'vscode';
import * as os from 'os';
import * as path from 'path';
import * as fs from 'fs';
import { activate } from '../extension';

/// <reference types="mocha" />
/// <reference types="node" />

describe('Open In TotalCmd', () => {
  let context: vscode.ExtensionContext;

  before(() => {
    context = { subscriptions: [] } as unknown as vscode.ExtensionContext;
    activate(context);
  });

  it('should register openFile command', async () => {
    const commands = await vscode.commands.getCommands();
    assert.ok(commands.includes('openInTotalCmd.openFile'));
  });

  it('should register openProject command', async () => {
    const commands = await vscode.commands.getCommands();
    assert.ok(commands.includes('openInTotalCmd.openProject'));
  });

  it('should get default configuration', async () => {
    const config = vscode.workspace.getConfiguration('openInTotalCmd');
    assert.strictEqual(config.get('totalCmdPath'), '');
    assert.strictEqual(config.get('launchParameters'), '/O /T');
  });
});
