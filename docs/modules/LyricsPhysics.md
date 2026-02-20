LyricsPhysics
物理歌词
分类：Render
描述：在音频可视化器上应用物理效果到歌词。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
LyricsPhysics 是 JackalClient 的 Render 分类模块。启用后会围绕 物理歌词 这一能力工作，核心行为是：在音频可视化器上应用物理效果到歌词。

配置项
- Drop Old Fadeout Time (s)：类型=数值，默认=0.35f
- Drop Start Y Offset：类型=数值，默认=260.0f
- Push-Over Fadeout Time (s)：类型=数值，默认=2.0f
- Lyric Friction (0~1)：类型=数值，默认=0.15f
- Wave Width (bars)：类型=数值，默认=6.0f
- Lyric Scale Pulse (0~1)：类型=数值，默认=0.15f
- Allow Rotation：类型=布尔，默认=true
- Push-Over Horizontal Speed：类型=数值，默认=800.0f
- Lyric Gravity：类型=数值，默认=580.0f
- Wave Speed (bars/sec)：类型=数值，默认=18.0f
- Push-Over Direction：类型=枚举，默认="Left"
- Push-Over Start X Offset：类型=数值，默认=-120.0f
- Rotation Friction (0~1)：类型=数值，默认=0.15f
- Wave Push Impulse：类型=数值，默认=820.0f
- Lyric Bounce Coef (0~1)：类型=数值，默认=0.88f
- Rotation Bounce Coef (0~1)：类型=数值，默认=0.35f
- Replace Animation：类型=枚举，默认="Push-Over"
- Bar Collide Height Multiplier：类型=数值，默认=0.8f
- Drop Soft Landing Coef (0~1)：类型=数值，默认=0.55f
- Push-Over Hit Impulse：类型=数值，默认=170.0f
- Bar Collision：类型=布尔，默认=true

历史更新
- 6. 添加模块： Lyrics Physics

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
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无
