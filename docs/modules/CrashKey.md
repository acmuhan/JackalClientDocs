CrashKey
快捷蓝屏
分类：Registry
描述：开启蓝屏快捷键（按两次 右Ctrl + ScrollLock）。

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
CrashKey 是 JackalClient 的 Registry 分类模块。启用后会围绕 快捷蓝屏 这一能力工作，核心行为是：开启蓝屏快捷键（按两次 右Ctrl + ScrollLock）。

配置项
- Keyboard Device：类型=枚举，默认="All"

历史更新
- 8. 将 Crash Key 从 Combat 改到 Registry 下。
- 15. 添加模块：CrashKey，为特定键盘设备添加一个系统支持的蓝屏快捷键（按两次 RCtrl + ScrollLock）

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [SecureLogin (安全登录)](./SecureLogin.md)
- [ListHijacks (劫持调查)](./ListHijacks.md)
- [KillHijacks (清除劫持)](./KillHijacks.md)
- [NoCmd (禁命令提示符)](./NoCmd.md)
- [NoPowerShell (禁PowerShell)](./NoPowerShell.md)
- [NoTaskmgr (禁任务管理器)](./NoTaskmgr.md)
- [NoRegedit (禁注册表编辑器)](./NoRegedit.md)
- [NoDefender (解除防御)](./NoDefender.md)

相关资料
无
