MusicOverlay
音乐信息
[PRO]
分类：Render
描述：显示一个覆盖层，展示音乐信息。（专业版）

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：PRO 独有

介绍
MusicOverlay 是 JackalClient 的 Render 分类模块。启用后会围绕 音乐信息 这一能力工作，核心行为是：显示一个覆盖层，展示音乐信息。（专业版）

配置项
- Background Shadow Opacity (0~1)：类型=数值，默认=0.6f
- Progress Bar：类型=布尔，默认=true
- Easing Speed (0~1)：类型=数值，默认=0.05f
- Simple Wave Bar Jitter：类型=数值，默认=0.65f
- Progress Bar Easing Speed (0~1)：类型=数值，默认=0.02f
- Cover Image Opacity (0~1)：类型=数值，默认=1.0f
- Hide When Menu On：类型=布尔，默认=false
- Easing：类型=布尔，默认=true
- Simple Wave Fall Speed：类型=数值，默认=0.5f
- Background Shadow Thickness：类型=数值，默认=60.0f
- Progress Bar Easing：类型=布尔，默认=true
- Simple Wave Easing Speed (0~1)：类型=数值，默认=0.05f
- Simple Wave Bar Width：类型=数值，默认=10.0f
- Hide When Idle：类型=布尔，默认=false
- Background Color：类型=枚举，默认="Flow"
- Text Color：类型=枚举，默认="White"
- Time Info：类型=布尔，默认=true
- Simple Wave Opacity (0~1)：类型=数值，默认=0.4f
- Cover Image Circle：类型=布尔，默认=true
- Time Info Color：类型=枚举，默认="White"
- Title：类型=枚举，默认="Now Playing"
- Progress Bar Opacity (0~1)：类型=数值，默认=0.8f
- Cover Switch Animation：类型=枚举，默认="Loading"
- Simple Wave Color：类型=枚举，默认="White"
- Detect Mode：类型=枚举，默认="Hook"
- Simple Wave Bar Gap：类型=数值，默认=10.0f
- Progress Bar Height：类型=数值，默认=6
- Background Shadow：类型=布尔，默认=true
- X Rate：类型=数值，默认=0.1f
- Simple Wave Rise Speed：类型=数值，默认=6.0f
- Cover Image Rotation：类型=布尔，默认=true
- Give Way to Mouse：类型=布尔，默认=true
- Time Info Font Size：类型=数值，默认=25
- Cover Image ClickGUI Background：类型=枚举，默认="Off"
- Show Simple Wave：类型=布尔，默认=true
- Show Playing Status：类型=布尔，默认=true
- Cover Image Scale：类型=数值，默认=1.0f
- Text Font Size：类型=数值，默认=30
- Background Round Corners：类型=布尔，默认=true
- Temp HUD Duration (ms)：类型=数值，默认=5000L
- Y Rate：类型=数值，默认=0.1f
- Cover Image Rotation Speed：类型=数值，默认=10.0f
- Background Opacity (0~1)：类型=数值，默认=0.5f
- Background Roundness：类型=数值，默认=0.6f
- Simple Wave Height：类型=数值，默认=70.0f
- Background：类型=布尔，默认=true
- Progress Bar Update Cooldown (ms)：类型=数值，默认=1000L
- Auto Clean Cache：类型=布尔，默认=true
- Progress Bar Color：类型=枚举，默认="White"
- Background Shadow Color：类型=枚举，默认="Black"

历史更新
- 70. 把 Music Overlay 歌曲ID和封面获取在 Detect Mode 模式为 Hook 时改为从 NeteaseHookSDK 获取。
- 71. 为 Music Overlay 进度条添加圆圈。
- 26. 添加模块：Music Overlay，显示当前播放的音乐信息。目前只有网易云。需联网。

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
