TargetHUD
目标显示
分类：Window
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TargetHUD 是 JackalClient 的 Window 分类模块。启用后会围绕 目标显示 这一能力工作，核心行为是：暂无描述

配置项
- Easing Speed (0~1)：类型=数值，默认=0.2f
- HUD Background Opacity (0~1)：类型=数值，默认=0.8f
- UWP Show Original Process：类型=布尔，默认=true
- Style：类型=枚举，默认="Default"
- HUD Shadow Thickness：类型=数值，默认=60.0f
- Background Image：类型=布尔，默认=false
- Fixed Y Rate：类型=数值，默认=0.65f
- HUD Position：类型=枚举，默认="Follow"
- Mouse Click Feedback：类型=布尔，默认=true
- HUD Shadow Color：类型=枚举，默认="Black"
- Background Image Opacity (0~1)：类型=数值，默认=0.5f
- HUD Round Corners：类型=布尔，默认=true
- HUD Outline Color：类型=枚举，默认="Dark Green"
- Command Line Getter Hotkey：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LWIN, VK_SUBTRACT}}}
- HUD Shadow Opacity (0~1)：类型=数值，默认=0.7f
- Background Image Moving Speed：类型=数值，默认=0.5f
- Target：类型=枚举，默认="Foreground"
- HUD Shadow：类型=布尔，默认=true
- Mouse Click Feedback Particles：类型=布尔，默认=true
- Background Image Path：类型=文本，默认=""
- Avatar Circle：类型=布尔，默认=true
- Give Way to Mouse：类型=布尔，默认=true
- Fade Time (ms)：类型=数值，默认=500L
- Command Line Getter：类型=枚举，默认="Console Output"
- HUD Background Darkness (0~1)：类型=数值，默认=0.85f
- Easing：类型=布尔，默认=true
- HUD Background Color：类型=枚举，默认="Flow"
- Flow Color：类型=布尔，默认=true
- HUD Roundness：类型=数值，默认=0.6f
- Fixed X Rate：类型=数值，默认=0.85f

历史更新
- 40. 为 Target Hud 添加了裁剪，以免文本超出范围。
- 2. 修复通知、WindowTags、TargetHUD 中的百分号显示问题。
- 31. 添加新模块： TargetHUD，显示目标窗口HUD。拥有丝滑的动画

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
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无
