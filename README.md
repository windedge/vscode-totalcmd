# Open In TotalCmd

[中文](README_zh.md)

## 🔍 Project Overview

A VSCode extension that enhances file management efficiency by opening files and projects directly in Total Commander

## 🌟 Features

- 📁 Open current file in Total Commander with directory navigation
- 📂 Open project root in Total Commander
- 🔧 Configurable Total Commander executable path
- 📝 Customizable launch parameters

## 🚀 Usage Instructions

### Basic Usage

#### Open File

- Context Menu: Right-click on a file in Explorer or Editor → `Open in TotalCmd`
- Command Palette: `Open File in TotalCmd`

#### Open Project

- Context Menu: Right-click on a file in Explorer or Editor → `Open Project in TotalCmd`
- Command Palette: `Open Project in TotalCmd`

### Configuration

Open VSCode settings, click `General` → `Editor` → `open editor settings` → `Extensions` → `Open In TotalCmd`

```json
{
  "openInTotalCmd.totalCmdPath": "C:\\Program Files\\Total Commander\\TOTALCMD64.EXE",
  "openInTotalCmd.launchParameters": "/O /T"
}
```

### Requirements

- VSCode 1.93.1+
- Total Commander

## 🧑‍💻 Developer Guide

Issues and Pull Requests are welcome to improve this extension.

## 🙋 FAQ

### 1. Cannot open Total Commander?

Please check the following steps:

1. Is Total Commander installed?
2. Is the configured path correct?
3. Are you running on Windows?

### 2. How to configure Total Commander path?

You can configure the Total Commander path in VSCode settings:

1. Open VSCode settings, click `General` → `Editor` → `open editor settings`
2. Select the `Extensions` tab
3. Navigate to `Open In TotalCmd` → `totalCmdPath`
4. Enter the Total Commander executable path

## 📄 License

This project is licensed under the [MIT License](LICENSE)

## 📮 Feedback

If you encounter issues or have suggestions, please provide feedback through:

- [Submit GitHub Issue](https://github.com/windedge/vscode-totalcmd/issues) 

## 🌟 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=windedge/vscode-totalcmd&type=Date)](https://star-history.com/#windedge/vscode-totalcmd&Date)