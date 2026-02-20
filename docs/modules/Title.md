Title
标题显示
分类：Render
描述：在屏幕中央显示一个标题。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Title 是 JackalClient 的 Render 分类模块。启用后会围绕 标题显示 这一能力工作，核心行为是：在屏幕中央显示一个标题。

配置项
- Mask Alpha (0~1)：类型=数值，默认=0.5f
- Mask Fade Speed (0~1)：类型=数值，默认=0.05f
- Brightness Speed (Hz)：类型=数值，默认=0.72f
- Title Subtitle Line Gap：类型=数值，默认=30
- Shake Enabled：类型=布尔，默认=true
- Shake Amplitude：类型=数值，默认=60.0f
- Blur Strength Max：类型=数值，默认=20.0f
- Hide When Menu On：类型=布尔，默认=false
- Animation Type (Enter)：类型=枚举，默认="Slide (Bottom
- Module Status Auto Switch：类型=布尔，默认=true
- Title Stay Time (0~1)：类型=数值，默认=0.5f
- Title Color：类型=枚举，默认="White"
- Main Title Enabled：类型=布尔，默认=true
- Animation Slide Fade：类型=布尔，默认=true
- Random Rotation：类型=布尔，默认=true
- Force Previous Fade Out：类型=布尔，默认=true
- Auto Focus：类型=布尔，默认=false
- Console Output：类型=布尔，默认=true
- Check Topmost：类型=布尔，默认=true
- Force Exit Speed Boost：类型=数值，默认=2.0f
- Subtitle Easing Speed (0~1)：类型=数值，默认=0.02f
- Brightness Max：类型=数值，默认=1.0f
- Title Text Mode：类型=枚举，默认="Fixed"
- Fixed Title Text：类型=文本，默认="JackalClient"
- Title Easing Speed (0~1)：类型=数值，默认=0.02f
- Subtitle Color：类型=枚举，默认="White"
- Brightness Min：类型=数值，默认=0.66f
- Fixed Title Size：类型=数值，默认=200
- Brightness Pulse：类型=布尔，默认=true
- Animation Type (Exit)：类型=枚举，默认="Slide (Top
- Debug Gizmos：类型=布尔，默认=false
- Fixed Subtitle Size：类型=数值，默认=90
- Title Text List：类型=文本，默认="你好，陌生人;GRW团队招生了;无论你是跑酷大神;还是生存大师;还是PVP大佬;又或是起床大佬;还是PVP大佬;又或是建筑大佬;还是PVP大佬;又或是红石大佬 ...
- Text Stroke：类型=枚举，默认="Shadow"
- Blur Effect：类型=布尔，默认=true
- Text Glow Size Rate：类型=数值，默认=1.3f
- Auto Title Size Scale：类型=数值，默认=1.0f
- Title Size：类型=枚举，默认="Auto"
- List Current Index：类型=数值，默认=0
- Title Base Opacity (0~1)：类型=数值，默认=1.0f
- Random Rotation Max Value：类型=数值，默认=100.0f
- Subtitle Enabled：类型=布尔，默认=true
- Mask Enabled：类型=布尔，默认=false
- Text Glow Amount：类型=数值，默认=5U
- Shake Speed：类型=数值，默认=2.0f
- Title Duration：类型=数值，默认=5000L
- Blur Samples Max：类型=数值，默认=10
- Fixed Subtitle Text：类型=文本，默认="yee~"

历史更新
- 38. 添加模块：Title，实现标题显示功能。注意：命令 /title 发出的标题的颜色请在 Shell 模块中设置。

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
