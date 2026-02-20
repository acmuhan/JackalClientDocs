Background
背景
分类：Render
描述：客户端背景设置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Background 是 JackalClient 的 Render 分类模块。启用后会围绕 背景 这一能力工作，核心行为是：客户端背景设置。

配置项
- Screen Compensation：类型=布尔，默认=false
- Hide Filter When No Focus：类型=布尔，默认=true
- Screen Compensation Faster：类型=布尔，默认=true
- Screen Mode Redraw Client Texture：类型=布尔，默认=true
- Filter Shader Offline Path：类型=文本，默认=""
- When to Apply Filter：类型=枚举，默认="Menu On"
- Filter Type：类型=枚举，默认="Flow"
- Lightness (0~1)：类型=数值，默认=0.8f
- Filter Opacity (0~1)：类型=数值，默认=0.5f
- When to Apply Screen Compensation：类型=枚举，默认="Always"
- Screen Compensation Cooldown (ms)：类型=数值，默认=250U
- Filter Shader Online Name：类型=文本，默认=""

历史更新
- 45. 修复了 Background 的滤镜。之前那个太不明显了。
- 34. 将 GUI 选项中的 Enabled Module Color 重命名为 Module Background Color (Enabled)
- 9. 为未启用的模块的背景颜色添加GUI选项：Module Background Color。颜色可选：

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
