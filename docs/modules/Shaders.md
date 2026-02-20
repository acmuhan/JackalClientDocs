Shaders
着色器
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
Shaders 是 JackalClient 的 Render 分类模块。启用后会围绕 着色器 这一能力工作，核心行为是：暂无描述

配置项
- Screen Mode Update Cooldown：类型=数值，默认=33U
- Screen Mode Redraw Client Texture：类型=布尔，默认=true
- Blur Samples：类型=数值，默认=5
- Screen Compensation Faster：类型=布尔，默认=true
- Bloom Intensity：类型=数值，默认=0.3f
- Flow Text Scale：类型=数值，默认=6.0f
- Flow Text Theme Period (s)：类型=数值，默认=300L
- Bloom Quality：类型=数值，默认=0.2f
- Flow Text Noise Amount：类型=数值，默认=0.6f
- Bloom Samples：类型=数值，默认=1.0f
- Blur Strength：类型=数值，默认=2.0f
- Apply Area：类型=枚举，默认="Client Only"
- Style：类型=枚举，默认="bloom"
- Flow Text Brightness：类型=数值，默认=1.2f
- Flow Text Speed：类型=数值，默认=1.0f
- Flow Text Depth：类型=数值，默认=0.6f

历史更新
- 4. 在 Shader 模块 (bloom模式) 开启后，LiveStream 的观众头像亮度将会降低。
- 30. 修复 Screen 范围的其他 Shader 无法生效的问题。
- 5. 为模块 Shader 添加配置：

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
