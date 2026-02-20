ClipboardESP
剪贴板透视
分类：Control
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
ClipboardESP 是 JackalClient 的 Control 分类模块。启用后会围绕 剪贴板透视 这一能力工作，核心行为是：暂无描述

配置项
- Background Shadow Opacity (0~1)：类型=数值，默认=0.45f
- Bitmap Preview Border Width：类型=数值，默认=2.0f
- Show Format：类型=布尔，默认=true
- Line Gap：类型=数值，默认=3
- Hide When Menu On：类型=布尔，默认=true
- Mid Y Rate：类型=数值，默认=0.3
- Background Shadow Thickness：类型=数值，默认=24.0f
- Background Color：类型=枚举，默认="Black"
- Bitmap Preview Max Height：类型=数值，默认=260
- Bitmap Preview Border Color：类型=枚举，默认="White"
- Text Background：类型=布尔，默认=false
- Show Bitmap Preview：类型=布尔，默认=true
- Max Lines Shown：类型=数值，默认=25
- X Rate：类型=数值，默认=0.16
- Show Text Stats：类型=布尔，默认=true
- Give Way to Mouse：类型=布尔，默认=true
- Text Color：类型=枚举，默认="Gold"
- Background Round Corners：类型=布尔，默认=true
- Background Shadow：类型=布尔，默认=true
- Background Shadow Color：类型=枚举，默认="Black"
- Background Opacity (0~1)：类型=数值，默认=0.5f
- Background Roundness：类型=数值，默认=0.2f
- Font Size：类型=数值，默认=20
- Background：类型=布尔，默认=true
- Bitmap Preview Max Width：类型=数值，默认=420
- Show Line Number：类型=布尔，默认=true
- Bitmap Preview Border：类型=布尔，默认=true

历史更新
- 6. 修复 ClipboardESP 文件路径显示的问题，现在还会标注额外信息。对于文件，会标注文件大小。
- 25. 修复 Clipboard ESP 的崩溃问题。
- 29. 修复 Clipboard ESP 的还有几行未显示文本的错位问题。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseWatcher (鼠标监视)](./MouseWatcher.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)

相关资料
无
