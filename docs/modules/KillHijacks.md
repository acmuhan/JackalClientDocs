KillHijacks
清除劫持
分类：Registry
描述：清空注册表内所有的映像劫持。

需求
- 安全级别：常规模块
- 权限需求：管理员
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
KillHijacks 是 JackalClient 的 Registry 分类模块。启用后会围绕 清除劫持 这一能力工作，核心行为是：清空注册表内所有的映像劫持。

配置项
- Async：类型=布尔，默认=true

历史更新
- 26. 添加新模块： Kill Hijacks。 清除所有的映像劫持。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [SecureLogin (安全登录)](./SecureLogin.md)
- [ListHijacks (劫持调查)](./ListHijacks.md)
- [CrashKey (快捷蓝屏)](./CrashKey.md)
- [NoCmd (禁命令提示符)](./NoCmd.md)
- [NoPowerShell (禁PowerShell)](./NoPowerShell.md)
- [NoTaskmgr (禁任务管理器)](./NoTaskmgr.md)
- [NoRegedit (禁注册表编辑器)](./NoRegedit.md)
- [NoDefender (解除防御)](./NoDefender.md)

相关资料
无
