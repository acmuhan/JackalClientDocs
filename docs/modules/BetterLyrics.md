BetterLyrics
更好的歌词
分类：Render
描述：识别歌词并以更好的方式显示。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
BetterLyrics 是 JackalClient 的 Render 分类模块。启用后会围绕 更好的歌词 这一能力工作，核心行为是：识别歌词并以更好的方式显示。

配置项
- Basic Mode：类型=枚举，默认="Hook Render"
- Kugou Use Taskbar Lyrics：类型=布尔，默认=true
- Off：类型=文本，默认="Chinese", "English", "Japanese"
- Bar Graph Lyrics Color Jitter：类型=数值，默认=0.05f
- Unload DLL When Quit：类型=布尔，默认=false
- Notify Music Change：类型=枚举，默认="Actionbar"
- Bar Graph Lyrics Opacity (0~1)：类型=数值，默认=0.9f
- Lyrics Fetch Attempt Cooldown (s)：类型=数值，默认=10
- Skip If Similarity Greater Than：类型=数值，默认=0.7f
- Language Candidates (Sep With Semicolon)：类型=文本，默认="chi_sim;jpn;eng"
- Lyrics Auto Correct：类型=布尔，默认=true
- Capture Cooldown (ms)：类型=数值，默认=700L
- X Offset：类型=数值，默认=0
- Skip If Includes：类型=文本，默认="<>[]{}%@#\\`"
- Language：类型=枚举，默认="Infer From Music Name"
- Skip If Includes Enabled：类型=布尔，默认=true
- Bar Graph Lyrics Font Size：类型=数值，默认=80
- Lyrics Correction Min Similarity (0~1)：类型=数值，默认=0.8f
- MessageBox Duration Coefficient：类型=数值，默认=1.0f
- Line Index：类型=数值，默认=0
- Chatter Type：类型=枚举，默认="Top"
- MessageBox Mode：类型=枚举，默认="Background"
- Custom Language：类型=文本，默认="chi_sim"
- Music Player Preset：类型=枚举，默认="Netease Music"
- Bar Graph Lyrics Char Extra Gap：类型=数值，默认=5
- Bar Graph Lyrics Color：类型=枚举，默认="Blue"
- Y Offset：类型=数值，默认=70
- MessageBox Set As Tool Window：类型=布尔，默认=false
- Remove Letters：类型=布尔，默认=false
- Async：类型=布尔，默认=true
- Window Title：类型=文本，默认="桌面歌词"
- Capture Mode：类型=枚举，默认="PrintWindow"
- Translation：类型=枚举，默认="Off"
- Chatter Color：类型=枚举，默认="Rainbow"
- Remove Extra Characters：类型=文本，默认="=."
- Display Mode：类型=枚举，默认="Fancy"
- Window Class Name：类型=文本，默认="DesktopLyrics"
- Exclude Non-lyrics Content：类型=布尔，默认=true
- Pause When Menu On：类型=布尔，默认=true
- Actionbar Color：类型=枚举，默认="Colorful"

历史更新
- 36. 为 BetterLyrics 的 Display Mode 显示模式添加一个 Island 灵动岛上显示。带动画。没有歌词时会采用歌名。
- 37. 为 BetterLyrics 的 Exclude Non-lyrics Content 排除非歌词内容添加对特定前缀的检查（例如“作曲：”）
- 29. 添加模块： BetterLyrics，更好的桌面歌词。目前只支持网易云音乐。

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
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无
