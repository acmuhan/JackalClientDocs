ProcessESP
进程透视
分类：Process
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ProcessESP（进程透视）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：New Process Notify Blacklist Enabled、New Process Notify Blacklist (Regex Sep With Semicolon)、New Process Notify Whitelist Enabled。

配置项
- New Process Parent Display（新进程显示父进程）
 类型：布尔；默认：true
 说明：用于指定模块实际作用对象。建议先对单个目标测试通过，再扩大到多目标，降低误操作风险。
- New Process Notify Blacklist Enabled（新增进程通知黑名单是否启用）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- New Process Notify Blacklist (Regex Sep With Semicolon)（新增进程通知黑名单 (用分号分隔的正则表达式)）
 类型：文本；默认："loader\\.exe;conhost\\.exe;tesseract\\.exe"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- New Process Notify Whitelist Enabled（新增进程通知白名单是否启用）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- New Process Notify Whitelist (Regex Sep With Semicolon)（新增进程通知白名单 (用分号分隔的正则表达式)）
 类型：文本；默认："cmd\\.exe;explorer\\.exe;Hips[a-zA-Z]+\\.exe;360[a-zA-Z0-9]+\\.exe"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Exited Process Notify Blacklist Enabled（进程通知黑名单是否启用）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Exited Process Notify Blacklist (Regex Sep With Semicolon)（退出进程通知黑名单 (用分号分隔的正则表达式)）
 类型：文本；默认："loader\\.exe;conhost\\.exe;tesseract\\.exe"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Exited Process Notify Whitelist Enabled（进程通知白名单是否启用）
 类型：布尔；默认：false
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Exited Process Notify Whitelist (Regex Sep With Semicolon)（退出进程通知白名单 (用分号分隔的正则表达式)）
 类型：文本；默认："cmd\\.exe;explorer\\.exe;Hips[a-zA-Z]+\\.exe;360[a-zA-Z0-9]+\\.exe"
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Check Cooldown (ms)（检查冷却 (毫秒)）
 类型：数值；默认：100L
 说明：用于控制检测/刷新/动画节奏。默认值 100L 以稳定为主；调小会更灵敏但可能增加资源占用，调大则更省资源但响应更慢。
历史更新
- 12. 为 ProcessESP 添加配置：
- 18. 实装模块： Process ESP，探测进程及变化，并进行通知。

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

