MouseESP
鼠标透视
分类：Control
描述：高亮鼠标指针的位置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MouseESP 是 JackalClient 的 Control 分类模块。启用后会围绕 鼠标透视 这一能力工作，核心行为是：高亮鼠标指针的位置。

配置项
- Particles：类型=枚举，默认="Both"
- Coordinates X Offset：类型=数值，默认=5
- CPS Display：类型=枚举，默认="Off"
- Particles Amount (Click)：类型=数值，默认=20.0f
- Circle Color：类型=枚举，默认="Yellow"
- Coordinates Color：类型=枚举，默认="Rainbow"
- Coordinates Font Size：类型=数值，默认=30
- Coordinates Y Offset：类型=数值，默认=5
- Coordinates：类型=布尔，默认=false
- Circle Opacity (0~1)：类型=数值，默认=0.3f
- Circle：类型=布尔，默认=false
- Particles Color Jitter：类型=数值，默认=0.8f
- CPS Color：类型=枚举，默认="Aqua-Pink"
- Circle Radius：类型=数值，默认=25.0f
- Box：类型=布尔，默认=false
- Box Width Rate：类型=数值，默认=1.0f
- Particles Amount (Continuous)：类型=数值，默认=1.0f
- Box Easing Speed (0~1)：类型=数值，默认=0.2f
- Box Height Rate：类型=数值，默认=1.2f
- CPS Opacity (0~1)：类型=数值，默认=0.5f
- Circle Color (Left Click)：类型=枚举，默认="Blue"
- Circle Color (Right Click)：类型=枚举，默认="Pink"
- Visibility Check：类型=布尔，默认=true
- Circle Color (Middle Click)：类型=枚举，默认="Red"
- Particles Color (Click)：类型=枚举，默认="Colorful"
- CPS Font Size：类型=数值，默认=30
- Box Line Width：类型=数值，默认=2
- Box Easing：类型=布尔，默认=true
- Box Opacity (0~1)：类型=数值，默认=0.8f
- Box Color：类型=枚举，默认="Rainbow"
- Particles Color (Continuous)：类型=枚举，默认="Rainbow"
- Coordinates Opacity (0~1)：类型=数值，默认=0.5f
- Box Rounded Corners：类型=布尔，默认=true

历史更新
- 28. 为 Mouse ESP 添加配置：
- 2. 为 Mouse ESP 添加配置：

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
- [Crosshair (准星线)](./Crosshair.md)

相关资料
无
