MotionBlur
动态模糊
分类：Render
描述：在屏幕上应用动态模糊。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MotionBlur 是 JackalClient 的 Render 分类模块。启用后会围绕 动态模糊 这一能力工作，核心行为是：在屏幕上应用动态模糊。

配置项
- Blur Enabled：类型=布尔，默认=false
- Blur Samples：类型=数值，默认=5
- Exponential Lambda：类型=数值，默认=0.5f
- Blur Brightness Boost (0~1)：类型=数值，默认=0.3f
- Apply Model：类型=枚举，默认="Exponential"
- Gaussian Sigma：类型=数值，默认=0.9f
- Redraw Client Texture：类型=布尔，默认=true
- Blur Alpha Boost (0~1)：类型=数值，默认=0.0f
- Blur Direction：类型=枚举，默认="Both"
- Blur Once：类型=布尔，默认=true
- Blur Strength：类型=数值，默认=2.0f
- Update Cooldown：类型=数值，默认=40
- Apply Area：类型=枚举，默认="Screen"
- Exponential Darken Amount (0~1)：类型=数值，默认=0.45f
- Gaussian Darken Amount (0~1)：类型=数值，默认=0.4f
- Test 1：类型=布尔，默认=false
- Darken When Blur：类型=布尔，默认=true
- Frame Count：类型=数值，默认=5

历史更新
- 30. 改良了 Motion Blur 模块：
- 11. 添加 MotionBlur 模块，通过叠加截图帧模拟动态模糊。当然，目前还是重影的效果，不是真正的动态模糊。当你打开 Screen 模式时，将会消耗大量CPU，请注意。

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
