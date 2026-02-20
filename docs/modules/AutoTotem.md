AutoTotem
自动图腾
分类：Render
描述：自动播放爆图腾动画。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoTotem 是 JackalClient 的 Render 分类模块。启用后会围绕 自动图腾 这一能力工作，核心行为是：自动播放爆图腾动画。

配置项
- AutoMute Triggered：类型=布尔，默认=true
- AntiDebug Defend Success：类型=布尔，默认=true
- Gatekeeper Deny After Query：类型=布尔，默认=true
- Gatekeeper Deny：类型=布尔，默认=true
- AntiTaskkill Defend Success：类型=布尔，默认=true
- AntiInject Defend Success：类型=布尔，默认=true
- AntiClose Defend Success：类型=布尔，默认=true

历史更新
- 41. 为 AutoTotem 添加配置：
- 5. 发现 SetWindowDisplayAffinity 和 图腾动画不兼容。受影响的模块有：AntiCapture, BlackCapture。经过修改，这两个模块在启用的时候如果 AutoTotem 启用，则会启用失败。
- 27. 添加几个实验性模块：Totem, AutoTotem, QQInspect, IPHorror,

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoDanmaku (自动弹幕)](./AutoDanmaku.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无
