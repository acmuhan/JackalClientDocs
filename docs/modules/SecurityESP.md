SecurityESP
安全透视
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
SecurityESP 是 JackalClient 的 Process 分类模块。启用后会围绕 安全透视 这一能力工作，核心行为是：暂无描述

配置项
- X Rate：类型=数值，默认=0.8
- Title Color：类型=枚举，默认="Red"
- Description Text Color：类型=枚举，默认="Aqua"
- Background：类型=布尔，默认=true
- HUD Line Gap：类型=数值，默认=5
- Background Shadow Color：类型=枚举，默认="Black"
- Malware Text Color：类型=枚举，默认="Red"
- Give Way to Mouse：类型=布尔，默认=true
- Background Shadow Opacity (0~1)：类型=数值，默认=0.45f
- Background Shadow Thickness：类型=数值，默认=26.0f
- Background Opacity (0~1)：类型=数值，默认=0.5f
- Background Round Corners：类型=布尔，默认=true
- Hide When Menu On：类型=布尔，默认=true
- Background Color：类型=枚举，默认="Black"
- Background Roundness：类型=数值，默认=0.2f
- Antivirus Text Color：类型=枚举，默认="Gold"
- Mid Y Rate：类型=数值，默认=0.5
- Background Shadow：类型=布尔，默认=true
- Show Description When Mouse Hovering：类型=布尔，默认=true
- HUD Font Size：类型=数值，默认=30

历史更新
- 40. 为 ClipboardESP / SecurityESP 添加众多配置项，整改视觉，可以高度定制。支持 HudEditor 拖曳。添加为鼠标让位。
- 23. 为 Download HUD, Chat Bar, Clipboard ESP, Security ESP, Letter Graph 添加 HUD Editor 拖曳。
- 12. 为 Clipboard ESP, Security ESP 添加自定义位置。

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
