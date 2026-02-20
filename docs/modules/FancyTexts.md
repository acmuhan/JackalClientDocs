FancyTexts
花式文字
分类：Render
描述：显示一些带有动画和特效的花哨文字。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
FancyTexts 是 JackalClient 的 Render 分类模块。启用后会围绕 花式文字 这一能力工作，核心行为是：显示一些带有动画和特效的花哨文字。

配置项
- Color：类型=枚举，默认="Colorful"
- Scale：类型=数值，默认=100
- Hide When Menu On：类型=布尔，默认=false
- Opacity Max (0~1)：类型=数值，默认=0.9f
- Parallax Intensity：类型=数值，默认=0.8f
- Single：类型=文本，默认="Double", "Bili Suggestion", "API", "API 2"
- Random Rotation：类型=布尔，默认=true
- Flow：类型=通用，默认=NAMED_COLOR_BASE_LIST
- Module Status Auto Switch：类型=布尔，默认=true
- Fixed Text：类型=文本，默认="阿诺头顶怎么尖尖的"
- Fog Enabled：类型=布尔，默认=false
- Fog Opacity (0~1)：类型=数值，默认=0.6f
- Async：类型=布尔，默认=true
- Fog Color：类型=枚举，默认="Black"
- Show Duration (ms)：类型=数值，默认=3000L
- Opacity Period (ms)：类型=数值，默认=6000L
- Fade Out Duration (ms)：类型=数值，默认=800L
- Random Rotation End Coefficient：类型=数值，默认=1.0f
- Cut Words：类型=枚举，默认="Single"
- Opacity Min (0~1)：类型=数值，默认=0.7f
- Random Rotation Start Coefficient：类型=数值，默认=1.0f
- Fade In Duration (ms)：类型=数值，默认=500L

历史更新
- 35. 改良 Fancy Text 的渲染，添加了三种新布局: 阻止元素超出屏幕范围
- 36. 为 Fancy Text 添加配置：
- 32. 添加新模块：FancyTexts，显示花哨的文字。

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
