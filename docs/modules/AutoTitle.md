AutoTitle
自动标题
分类：Render
描述：根据规则自动启用标题模块。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoTitle 是 JackalClient 的 Render 分类模块。启用后会围绕 自动标题 这一能力工作，核心行为是：根据规则自动启用标题模块。

配置项
- Periodic Interval (ms)：类型=数值，默认=10000L
- Random Min Interval (ms)：类型=数值，默认=20000L
- Mode：类型=枚举，默认="Periodic"
- Smart Mode Speed：类型=数值，默认=1.0f
- Random Max Interval (ms)：类型=数值，默认=120000L

历史更新
- 25. 现在 Auto Title 每次调用 Title 将不会出现通知。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无
