DownloadHUD
下载显示
分类：Render
描述：显示客户端文件下载进度。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
DownloadHUD 是 JackalClient 的 Render 分类模块。启用后会围绕 下载显示 这一能力工作，核心行为是：显示客户端文件下载进度。

配置项
- Background Shadow Opacity (0~1)：类型=数值，默认=0.5f
- Progress Bar Easing Speed (0~1)：类型=数值，默认=0.07f
- Hide When Menu On：类型=布尔，默认=false
- Item Width：类型=数值，默认=350.0f
- Background Shadow Thickness：类型=数值，默认=30.0f
- Item Easing：类型=布尔，默认=true
- Background Color：类型=枚举，默认="Black"
- Completed Task Show Time (ms)：类型=数值，默认=5000L
- Title：类型=布尔，默认=true
- Item Max Count：类型=数值，默认=8U
- Text Font Size：类型=数值，默认=25
- Progress Bar Height：类型=数值，默认=10
- X Rate：类型=数值，默认=0.7f
- Item Easing Speed (0~1)：类型=数值，默认=0.2f
- Background：类型=布尔，默认=true
- Background Round Corners：类型=布尔，默认=true
- Item Width Strict：类型=布尔，默认=true
- Progress Bar Easing：类型=布尔，默认=true
- Background Shadow：类型=布尔，默认=true
- Item Gap：类型=数值，默认=40.0f
- Y Rate：类型=数值，默认=0.1f
- Background Shadow Color：类型=枚举，默认="Black"
- Background Opacity (0~1)：类型=数值，默认=0.8f
- Item Fade Duration (ms)：类型=数值，默认=1000L
- Background Roundness：类型=数值，默认=0.5f
- Item Height：类型=数值，默认=120.0f
- Text Opacity (0~1)：类型=数值，默认=1.0f

历史更新
- 31. 为 Download HUD 添加配置：
- 32. 修复 Download HUD 进度条缓动在绘制时有概率不生效的问题。
- 64. 添加模块：Download HUD，显示客户端文件下载进度。

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
