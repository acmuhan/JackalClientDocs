Taskmgr
任务管理器
分类：Process
描述：打开任务管理器。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Taskmgr（任务管理器）用于打开任务管理器。
适合进程观测、控制与排障场景。
初次使用可优先调整：No Wow64 Redirection。

配置项
- No Wow64 Redirection（禁用 Wow64 重定向）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
历史更新
- 5. 检查 taskmgr, regedit, cmd 是否被禁用如果失败将不会输出错误信息了，以免刷屏。
- 2. 修复了 NoCmd, NoPowerShell, NoTaskmgr, NoRegedit 无效的问题。
- 11. Taskmgr: 将会临时关闭重定向，以便打开64位任务管理器。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Anti360Ad (反数字广告)](./Anti360Ad.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)

相关资料
无

