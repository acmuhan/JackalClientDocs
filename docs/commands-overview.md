# 命令系统总览

`test/COMMANDS.txt` 包含完整命令清单。本页给出结构化索引，方便快速定位。

## 1. 基础控制

- `/help`, `/about`, `/ver`
- `/list`, `/module ...`
- `/enable`, `/disable`, `/toggle`
- `/quit`, `/exit`

## 2. Shell 与脚本

- `/shell`（启动参数）
- `/interpret`, `/perform`
- `/multijackal`, `/mji`
- `/async`

## 3. 文件与系统

- `/ls`, `/cd`, `/rm`
- `/findfile`, `/everything ...`
- `/device ...`, `/volume ...`
- `/time ...`

## 4. 窗口与进程

- `/findwindow`, `/selectwindow`
- `/listmodules`, `/load`, `/unload`
- `/cmd`, `/killcmd`, `/killps`

## 5. 在线服务

- `/bili ...`
- `/ncm ...`
- `/textdatabase ...`, `/pdb ...`
- `/translate ...`, `/search ...`

## 6. 文本与数据处理

- `/calc ...`
- `/str transform ...`
- `/hexview ...`
- `/qrcode ...`

## 7. 启动参数（CLI）

主程序支持参数化启动，例如：

- `--admin`, `--system`, `--ti`
- `--enable:<id1;id2;...>`
- `--command ...`, `--command-keep ...`
- `--shell`

## 建议

1. 高频命令做别名脚本
2. 危险命令先在虚拟机演练
3. 复杂流程尽量写成可复用脚本
