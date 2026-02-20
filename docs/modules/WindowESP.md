WindowESP
窗口透视
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
WindowESP（窗口透视）用于给候选窗口绘制边框，方便快速定位与观察窗口分布。建议先开启排除项减少噪声，再调整线宽、颜色与透明度。
配置项
- Box Color（方框颜色）
 类型：枚举；默认："Rainbow"
 说明：窗口框主颜色。复杂背景下建议选择高对比纯色。
 可选：Flow（流动）；其余颜色见 [NAMED_COLOR_BASE_LIST](./NAMED_COLOR_BASE_LIST.md)
- Box Line Width（框线宽）
 类型：数值；默认：3.0f
 说明：框线粗细。高分辨率可略增，低分辨率建议偏小。
- Box Alpha（框不透明度）
 类型：数值；默认：0.5f
 说明：框线透明度，兼顾存在感与遮挡。
- Exclude Invisible（排除不可见）
 类型：布尔；默认：true
 说明：忽略不可见窗口，减少无意义框体。一般建议保持开启。
- Exclude Foreground（排除前端）
 类型：布尔；默认：true
 说明：排除当前前台窗口，避免和主视角内容重叠。
- Exclude Pointed（排除鼠标指向）
 类型：布尔；默认：true
 说明：排除鼠标指向窗口，减少指针附近遮挡。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：true
 说明：菜单打开时暂时不绘制框体，便于调参。
历史更新
- 14. WindowESP 的顶层窗口更新现已和 Tracers 共用，更新冷却在 Config 设置

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [WindowTags (窗口标签)](./WindowTags.md)
- [WindowHighlight (窗口高亮)](./WindowHighlight.md)
- [Tracers (追踪线)](./Tracers.md)
- [TargetESP (目标透视)](./TargetESP.md)
- [TargetHUD (目标显示)](./TargetHUD.md)
- [WindowMaster (窗口大师)](./WindowMaster.md)
- [PrivateWindow (隐私窗口)](./PrivateWindow.md)
- [ConsoleESP (控制台透视)](./ConsoleESP.md)

相关资料
无

