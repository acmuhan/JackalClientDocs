HUDBlur
HUD模糊
分类：Render
描述：应用模糊效果到HUD。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
HUDBlur 是 JackalClient 的 Render 分类模块。启用后会围绕 HUD模糊 这一能力工作，核心行为是：应用模糊效果到HUD。

配置项
- Liquid Highlight：类型=通用，默认=8.f
- Liquid Speed：类型=数值，默认=0.8f
- Dropdown GUI Background (PRO)：类型=布尔，默认=true
- Liquid Corner Roundness Rate：类型=数值，默认=0.6f
- Liquid Scatter Quality：类型=数值，默认=2.0f
- Liquid Scatter Directions：类型=数值，默认=5
- Opacity (0~1)：类型=数值，默认=1.0f
- Liquid Blur：类型=布尔，默认=false
- Liquid Scatter Size (px)：类型=数值，默认=1.0f
- Liquid Thickness Rate：类型=数值，默认=0.2f
- Liquid IOR：类型=数值，默认=1.5f
- Liquid Distortion (px)：类型=数值，默认=10.0f
- Blur Strength：类型=数值，默认=20.0f
- Liquid Flow Scale：类型=数值，默认=14.0f
- Liquid Edge Width Rate：类型=数值，默认=0.45f
- Style：类型=枚举，默认="Blur"
- Screen Capture Cooldown (ms)：类型=数值，默认=100L
- Liquid Brightness：类型=数值，默认=0.8f
- Liquid Flow Strength：类型=数值，默认=0.2f
- Blur Taps：类型=数值，默认=32

历史更新
- 35. 为 HUD Blur 添加配置项：
- 58. 添加 HUD Blur 模块，为 HUD 背景添加模糊或者【PRO】液体玻璃效果。需要实时屏幕捕获，会降低性能，但是可以调低频率。

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
