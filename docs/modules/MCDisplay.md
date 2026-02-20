MCDisplay
MC显示
分类：Render
描述：显示 Minecraft 的 HUD 元素。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
MCDisplay 是 JackalClient 的 Render 分类模块。启用后会围绕 MC显示 这一能力工作，核心行为是：显示 Minecraft 的 HUD 元素。

配置项
- Hand Scale：类型=数值，默认=6.0f
- Hand Move Y Range：类型=数值，默认=1000.0f
- Hand Texture Name：类型=文本，默认="iron_sword.png"
- Hand Left Click Action：类型=枚举，默认="Wield"
- Hand Wield Action Rotation Changes (Degrees)：类型=数值，默认=25.0f
- Hand Right Click Action：类型=枚举，默认="Block"
- Hand Move X Range：类型=数值，默认=400.0f
- Hand Opacity (0~1)：类型=数值，默认=1.0f
- Hide When In Minecraft：类型=布尔，默认=false
- Hand X Addition：类型=数值，默认=0.0f
- Hand Block Action Rotation Changes (Degrees)：类型=数值，默认=-45.0f
- Crosshair：类型=枚举，默认="Vanilla"
- Hand Left Click Action Duration (ms)：类型=数值，默认=400L
- Crosshair Opacity (0~1)：类型=数值，默认=1.0f
- Crosshair Color：类型=枚举，默认="Smart"
- Hand Rotation Base (Degrees)：类型=数值，默认=-150.0f
- Hand Y Addition：类型=数值，默认=0.0f
- Hand Enabled：类型=布尔，默认=true
- Hand Rotation Turn Coefficient (0~1)：类型=数值，默认=0.35f
- Crosshair Scale：类型=数值，默认=1.0f

历史更新
- 33. 为 MC Display 添加配置：
- 60. 修复 MC Display 模块名称少了一个空格导致无法访问配置的问题。
- 7. 将之前的 Minecraft 重命名为 MCDisplay

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
