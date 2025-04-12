# Open In TotalCmd

[English](README.md)

## 功能特性

- 在Total Commander中打开当前文件并定位目录
- 在Total Commander中打开项目根目录
- 可配置Total Commander路径
- 可自定义启动参数

## 使用方法

1. 在资源管理器或编辑器中右键点击文件
2. 选择"在TotalCmd中打开"
3. 或使用命令面板：
   - "Open File in TotalCmd"
   - "Open Project in TotalCmd"

## 配置

```json
{
  "openInTotalCmd.totalCmdPath": "C:\\Program Files\\Total Commander\\TOTALCMD64.EXE",
  "openInTotalCmd.launchParameters": "/O /T"
}
```

## 常见问题

### 1. 无法打开Total Commander？

请检查：
1. Total Commander是否已安装
2. 配置路径是否正确
3. 是否在Windows系统上运行

## 许可证

[MIT License](LICENSE)