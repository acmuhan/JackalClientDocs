OpacityChanger
透明度调节
分类：Window
描述：改变目标窗口不透明度。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
OpacityChanger 是 JackalClient 的 Window 分类模块。启用后会围绕 透明度调节 这一能力工作，核心行为是：改变目标窗口不透明度。

配置项
- Step (%%)：类型=数值，默认=10U
- Wheel Side：类型=枚举，默认="Left"
- Hide HUD When Menu On：类型=布尔，默认=false
- HUD：类型=枚举，默认="Giant"
- Target Window：类型=枚举，默认="Foreground"
- Temp HUD Animation Duration (ms)：类型=数值，默认=300L
- Shortcut：类型=枚举，默认="Wheel on Side"
- Wheel Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LMENU}}}
- Wheel Detect Only If Cursor Visible：类型=布尔，默认=true
- Temp HUD Duration (ms)：类型=数值，默认=3000L

历史更新
- 15. 为 Volume 和 Opacity Changer 添加配置：
- 60. 修复了 OpacityChanger 直接对客户端窗口进行透明度修改后被客户端 GUI 配置里的 Opacity (0~1) 调回去的问题。现在会直接同步。
- 67. 为 OpacityChanger 添加配置：

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [WindowESP (窗口透视)](./WindowESP.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)

相关资料
无
