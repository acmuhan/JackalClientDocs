WindowMaster
窗口大师
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
WindowMaster 是 JackalClient 的 Window 分类模块。启用后会围绕 窗口大师 这一能力工作，核心行为是：暂无描述

配置项
- Sink Keybind：类型=按键/复合，默认={{"Keybind", {0}}}
- Easing Speed (0~1)：类型=数值，默认=0.1
- Hide HUD When Menu On：类型=布尔，默认=true
- HUD Color：类型=枚举，默认="Rainbow"
- Update Keybind：类型=按键/复合，默认={{"Keybind", {0}}}
- EndTask Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F9}}}
- Hide/Show Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F5}}}
- Phantom Window Opacity (0~1)：类型=数值，默认=0.1f
- HUD：类型=枚举，默认="Follow"
- HUD Background：类型=枚举，默认="Fancy"
- HUD Next Page：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_RIGHT}}}
- HUD Font Size：类型=数值，默认=20
- Process Freeze/U Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F7}}}
- Privacy Overlay/U Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F2}}}
- Destroy Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F11}}}
- Target：类型=枚举，默认="Foreground"
- Lock Update Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F10}}}
- HUD Line Gap：类型=数值，默认=5
- Kill Process Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F3}} }
- HUD Paging：类型=枚举，默认="Off"
- Privacy Mode：类型=枚举，默认="Invisible (>= Win10
- Privacy/U Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F1}}}
- Easing：类型=布尔，默认=true
- Freeze/U Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F6}}}
- Toggle Phantom Window Keybind：类型=按键/复合，默认={{"Keybind", {0}} }
- EndSession Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F12}}}
- HUD Prev Page：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_LEFT}}}
- HUD Item Count Per Page：类型=数值，默认=11U
- Topmost/U Keybind：类型=按键/复合，默认={{"Keybind", {VK_LMENU, VK_F8}}}

历史更新
- 9. WindowMaster 模块的HUD不再会超出左侧和顶部屏幕边缘。
- 9. 为 WindowMaster 也添加了注入式调节窗口隐私性的功能。只需要按下 Alt+F1 即可切换。同时也提供了模式：
- 21. Window Master: 添加配置项 Target，用于指定对哪个窗口的锁定：

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
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无
