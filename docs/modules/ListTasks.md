ListTasks
枚举计划任务
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
ListTasks（枚举计划任务）用于暂无描述。
适合进程观测、控制与排障场景。
初次使用可优先调整：Async、Auto Console、Style。

配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Auto Console（自动启用控制台）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Style（风格）
 类型：枚举；默认："Normal"
 说明：这是选项型配置。默认值 Normal 一般更稳妥；建议按使用场景逐个试用，而不是一次性切换多项。
 可选：Normal（普通）；Vanilla (List)（原版 (列表)）；Vanilla (XML)（原版 (XML)）；Vanilla (CSV)（原版 (CSV)）
历史更新
- 8. 添加模块 ListTasks, 枚举所有计划任务信息。

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

