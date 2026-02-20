MouseWatcher
鼠标监视
分类：Control
描述：监视鼠标移动和交互。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MouseWatcher 是 JackalClient 的 Control 分类模块。启用后会围绕 鼠标监视 这一能力工作，核心行为是：监视鼠标移动和交互。

配置项
- Acceleration Threshold：类型=数值，默认=800.0f
- Hide HUD When Menu On：类型=布尔，默认=true
- Strict Check Threshold：类型=数值，默认=10
- HUD：类型=枚举，默认="Fancy"
- HUD Font Size：类型=数值，默认=20
- HUD Line Gap：类型=数值，默认=5
- Movement Check：类型=枚举，默认="Ignore"
- HUD X Rate：类型=数值，默认=0.01f
- HUD Y Rate：类型=数值，默认=0.44f
- Movement Check Mode：类型=枚举，默认="Simple"
- HUD Color：类型=枚举，默认="White"
- Sample Cooldown：类型=数值，默认=10U

历史更新
- 51. 为 Mouse Watcher 添加配置：
- 3. 为 Modules Color, WindowMaster HUD Color, MouseWatcher HUD Color 添加新颜色样式：Colorful。根据字符串决定一种随机颜色。
- 10. 添加模块 MouseWatcher，用于监视鼠标运动。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [AntiAFK (反挂机)](./AntiAFK.md)
- [AutoClicker (连点器)](./AutoClicker.md)
- [MouseSwap (鼠标交换)](./MouseSwap.md)
- [MouseDisabler (禁用鼠标)](./MouseDisabler.md)
- [MouseTeleport (鼠标传送)](./MouseTeleport.md)
- [MouseTrails (鼠标轨迹)](./MouseTrails.md)
- [MouseESP (鼠标透视)](./MouseESP.md)
- [Crosshair (准星线)](./Crosshair.md)

相关资料
无
