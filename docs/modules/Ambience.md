Ambience
环境气氛
分类：Render
描述：模拟环境，如天气和光照。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Ambience 是 JackalClient 的 Render 分类模块。启用后会围绕 环境气氛 这一能力工作，核心行为是：模拟环境，如天气和光照。

配置项
- Mouse Camera Mode：类型=布尔，默认=false
- Lightning Display Duration (ms)：类型=数值，默认=5000L
- Precipitation Angle (rad)：类型=数值，默认=8.168f
- Thunder Sound Volume：类型=数值，默认=100
- Weather：类型=枚举，默认="Rainy"
- Precipitation Increase Speed：类型=数值，默认=10.0f
- Precipitation Fall Speed：类型=数值，默认=1.0f
- Precipitation Decrease Speed：类型=数值，默认=5.0f
- Mouse Camera X Rate：类型=数值，默认=1.0f
- Precipitation Mouse Circle：类型=枚举，默认="Off"
- Precipitation Mouse Circle Radius：类型=数值，默认=200.0f
- Precipitation Sound Volume：类型=数值，默认=30
- Mouse Camera Y Rate：类型=数值，默认=1.0f
- Rain Shape：类型=文本，默认="/"
- Rain Color：类型=枚举，默认="Blue"
- Lightning Display：类型=布尔，默认=true
- Precipitation Amount Scale：类型=数值，默认=1.0f
- Precipitation Display Position：类型=枚举，默认="Screen"
- Weather Cycle：类型=布尔，默认=true

历史更新
- 50. 添加模块：Ambience。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无
