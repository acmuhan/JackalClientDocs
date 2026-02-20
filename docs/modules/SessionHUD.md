SessionHUD
会话显示
分类：Render
描述：显示当前用户的信息。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
SessionHUD 是 JackalClient 的 Render 分类模块。启用后会围绕 会话显示 这一能力工作，核心行为是：显示当前用户的信息。

配置项
- Width：类型=数值，默认=300
- Text Font Size：类型=数值，默认=30
- Background Roundness：类型=数值，默认=0.6f
- Background：类型=布尔，默认=true
- Avatar Scale：类型=数值，默认=1.0f
- Background Shadow Color：类型=枚举，默认="Black"
- Avatar Opacity (0~1)：类型=数值，默认=1.0f
- Background Shadow Opacity (0~1)：类型=数值，默认=0.6f
- Background Shadow Thickness：类型=数值，默认=60.0f
- Background Opacity (0~1)：类型=数值，默认=0.5f
- Background Round Corners：类型=布尔，默认=true
- Hide When Menu On：类型=布尔，默认=false
- Text Color：类型=枚举，默认="White"
- Time Info：类型=布尔，默认=true
- Background Color：类型=枚举，默认="Flow"
- Y Rate：类型=数值，默认=0.2f
- Give Way to Mouse：类型=布尔，默认=true
- Avatar Circle：类型=布尔，默认=true
- Background Shadow：类型=布尔，默认=true
- X Rate：类型=数值，默认=0.1f

历史更新
- 19. 修复了 SessionHUD 在 HudEditor 启用时仍能为鼠标让位的问题。
- 1. 添加模块：Session HUD，显示当前 Windows 用户信息，模仿挂端设计。还会有当前的游玩时间，实际是开机时间。

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
