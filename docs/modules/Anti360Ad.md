Anti360Ad
反数字广告
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
Anti360Ad 是 JackalClient 的 Process 分类模块。启用后会围绕 反数字广告 这一能力工作，核心行为是：暂无描述

配置项
- 360SpeedldHealth.exe：类型=布尔，默认=true
- sesvcr.exe：类型=布尔，默认=true
- Remove 360 Suspended Ball：类型=布尔，默认=true
- MultiTip.exe：类型=布尔，默认=true
- Kill 360 Ad Processes：类型=布尔，默认=true

历史更新
- 9. 修复 Anti360Ad 在系统权限下 %AppData% 路径错误的问题。
- 14. 为 Anti360Ad 模块添加配置：
- 22. 添加模块 Anti 360Ad: 击杀360相关广告进程，然后对其文件依次进行以下操作：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [ProcessManager (进程管理器)](./ProcessManager.md)
- [Elevator (电梯)](./Elevator.md)
- [ForceTerminator (暴力送终)](./ForceTerminator.md)
- [Kill360AdProc (杀数字广告进程)](./Kill360AdProc.md)
- [KillAV (击杀杀软)](./KillAV.md)
- [KillMalware (击杀病毒)](./KillMalware.md)
- [ListModules (枚举模块)](./ListModules.md)
- [ListServices (枚举服务)](./ListServices.md)

相关资料
无
