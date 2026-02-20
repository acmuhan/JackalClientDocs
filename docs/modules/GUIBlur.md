GUIBlur
界面模糊
分类：Render
描述：应用模糊效果到GUI。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
GUIBlur 是 JackalClient 的 Render 分类模块。启用后会围绕 界面模糊 这一能力工作，核心行为是：应用模糊效果到GUI。

配置项
- Blur Color Alpha (0~1)：类型=数值，默认=0.3f
- Blur Color：类型=文本，默认="43;43;43"
- Hide When No Focus：类型=布尔，默认=true
- Dark Mode：类型=枚举，默认="On"
- Not When Power Saving：类型=布尔，默认=true

历史更新
- 17. 为 Background, Night, GUIBlur 添加了无焦点时隐藏的配置项。
- 7. 现在启用 Screenshot 截图后，GUIBlur 会自动关闭。
- 11. 添加新模块：GUI Blur，支持在打开 ClickGUI 后对背景的模糊效果。

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
