WarpUI
空间变形
[PRO]
分类：Render
描述：将伪 3D 视觉形变与 GUI 交互坐标精确同步的界面形变

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
WarpUI 是 JackalClient 的 Render 分类模块。启用后会围绕 空间变形 这一能力工作，核心行为是：将伪 3D 视觉形变与 GUI 交互坐标精确同步的界面形变

配置项
- Camera Z：类型=数值，默认=0.0f
- When：类型=枚举，默认="Always"
- Easing：类型=布尔，默认=true
- Camera Fov：类型=数值，默认=60.0f
- Sphere Radius：类型=数值，默认=600.0f
- Camera Yaw：类型=数值，默认=0.0f
- Chroma：类型=数值，默认=0.008f
- Camera Offset Y：类型=数值，默认=0.0f
- Camera Pitch：类型=数值，默认=0.0f
- Flip Y：类型=布尔，默认=true
- Camera Offset X：类型=数值，默认=0.0f
- Easing Speed (0~1)：类型=数值，默认=0.12f
- Curve Camera Z Bias：类型=数值，默认=1.0f
- Vignette：类型=数值，默认=0.25f

历史更新
- 23. 【PRO】添加模块：WarpUI，实现三维界面，并修正鼠标坐标的映射关系。启用前最好绑定一个快捷键。注意启用后托盘右键菜单将会出现一个选项叫“禁用空间变形 Disable WarpUI”。
- 26. 为托盘菜单添加 Disable WarpUI, Disable Streamer
- 40. 为 WarpUI 添加了变化时的淡入淡出。

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
