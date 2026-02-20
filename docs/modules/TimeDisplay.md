TimeDisplay
时间显示
分类：Render
描述：暂无描述

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TimeDisplay 是 JackalClient 的 Render 分类模块。启用后会围绕 时间显示 这一能力工作，核心行为是：暂无描述

配置项
- Background Shadow Opacity (0~1)：类型=数值，默认=0.5f
- Online Time Update Cooldown (ms)：类型=数值，默认=60000L
- New Day Notification：类型=枚举，默认="Title"
- Text Background：类型=布尔，默认=false
- Transparent：类型=布尔，默认=true
- Flip Duration (ms)：类型=数值，默认=400.0f
- Style：类型=枚举，默认="Flip"
- Tick Sound Silence Threshold：类型=数值，默认=300.0f
- Background Shadow Thickness：类型=数值，默认=20.0f
- Opacity (0~1)：类型=数值，默认=0.7f
- Time Announcement Mode：类型=枚举，默认="Half Hour"
- Background Color：类型=枚举，默认="Black"
- Time Announcement Custom Rules (Sep With Semicolon)：类型=文本，默认="**:00;**:20;**:40"
- Online Time：类型=布尔，默认=false
- Whiter：类型=布尔，默认=true
- Color：类型=枚举，默认="Rainbow"
- Tick Sound Pitch：类型=枚举，默认="Binary"
- Wave Color：类型=布尔，默认=true
- X Rate：类型=数值，默认=0.2f
- Time Announcement Highlight：类型=布尔，默认=true
- Background：类型=布尔，默认=false
- New Day Title Font Size：类型=数值，默认=300
- Background Round Corners：类型=布尔，默认=true
- Time Announcement Title Color：类型=枚举，默认="Aqua-Blue"
- Background Shadow：类型=布尔，默认=true
- Y Rate：类型=数值，默认=0.8f
- Background Shadow Color：类型=枚举，默认="Black"
- Background Opacity (0~1)：类型=数值，默认=0.8f
- Time Announcement：类型=枚举，默认="Notify"
- Background Roundness：类型=数值，默认=0.3f
- Font Size：类型=数值，默认=50
- New Day Title Color：类型=枚举，默认="Flow"
- Time Announcement Title Font Size：类型=数值，默认=100
- Tick Sound Pan：类型=枚举，默认="Surround"
- Tick Sound (PRO)：类型=枚举，默认="Dynamic"
- Tick Sound Volume：类型=数值，默认=20
- Hide When Menu On：类型=布尔，默认=false

历史更新
- 37. 将 TimeDisplay 模块的配置 Half Hour Notify 改为 Half Hour Notification，且可以选择以下选项：
- 44. 将 TimeDisplay 模块的 Rainbow 选项改为 Color，可以选颜色预设。
- 50. 为 TimeDisplay 添加配置：

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
