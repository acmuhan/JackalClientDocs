AudioVisualizer
音频可视化
分类：Render
描述：显示音频波形或其他形式的可视化。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AudioVisualizer 是 JackalClient 的 Render 分类模块。启用后会围绕 音频可视化 这一能力工作，核心行为是：显示音频波形或其他形式的可视化。

配置项
- Line Opacity (0~1)：类型=数值，默认=0.6f
- Menu Off Alpha：类型=数值，默认=1.0f
- Line Amplitude：类型=数值，默认=300.0f
- Circle Color：类型=枚举，默认="Gold"
- Global HUD Pulse Effects：类型=布尔，默认=false
- Bar Direction：类型=枚举，默认="Up"
- Line Direction：类型=枚举，默认="Up"
- Bar Y Rate：类型=数值，默认=1.0f
- Circle Opacity (0~1)：类型=数值，默认=0.8f
- Bar Color (Top)：类型=枚举，默认="Same"
- Line Thickness：类型=数值，默认=3L
- Enable Better Lyrics Module：类型=布尔，默认=false
- Circle Scale：类型=数值，默认=1.8f
- Circle Thickness：类型=数值，默认=5L
- Bar Opacity (0~1)：类型=数值，默认=0.3f
- Bar Max Height：类型=数值，默认=250L
- Bar Pixel Gap：类型=数值，默认=40
- Visualizer Mode：类型=枚举，默认="Bar Graph"
- Bar Horizontal Gap：类型=数值，默认=2
- Line Y Rate：类型=数值，默认=0.8f
- Line Color：类型=枚举，默认="Blue"
- Bar Easing Speed (0~1)：类型=数值，默认=0.15f
- Global HUD Pulse Effects Intensity (0~1)：类型=数值，默认=0.5f
- Bar Graph Style：类型=枚举，默认="Normal"
- Menu On Alpha：类型=数值，默认=1.0f
- Circle Radius：类型=数值，默认=250L
- Bar Color：类型=枚举，默认="White"
- Bar Width：类型=数值，默认=100L
- Capture Cooldown (ms)：类型=数值，默认=50L

历史更新
- 4. 为 Audio Visualizer 添加配置：
- 12. 添加模块： AudioVisualizer，音频可视化。
- 30. 添加模块：Island，简单的灵动岛效果。在 Audio Visualizer 启用时会随音频旋律震动。

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
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无
