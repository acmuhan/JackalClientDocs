CustomHUD
自定义显示
分类：Render
描述：自定义 HUD 元素。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
CustomHUD（自定义显示）用于自定义 HUD 元素。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Hide HUD When Menu On。

配置项
- Global Scale（全局缩放）
 类型：数值；默认：1.0f
 说明：这是数值型配置。默认值 1.0f 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Default Font Size（默认字号）
 类型：数值；默认：30
 说明：用于控制文本可读性。默认字号 30 适合多数分辨率；高分屏可适当加大，低分辨率建议减少以免拥挤。
- Hide HUD When Menu On（打开菜单时隐藏HUD）
 类型：布尔；默认：true
 说明：这是行为开关项。建议先按默认值使用，确认行为符合预期后再逐项启停，避免多个开关同时改动造成排查困难。
- Shell Mover Speed（命令行移动者速度）
 类型：数值；默认：10
 说明：这是数值型配置。默认值 10 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Elements（元素）
 类型：文本；默认："[]"
 说明：该配置用于调整模块行为细节。建议先按默认值运行，确认需求后再逐步调整。
历史更新
- 6. 添加新模块：CustomHUD，自定义HUD元素。可以使用 /customhud 命令进行各方面操作。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)

相关资料
无

