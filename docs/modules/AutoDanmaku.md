AutoDanmaku
自动弹幕
分类：Render
描述：根据xml文件自动发送弹幕。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AutoDanmaku 是 JackalClient 的 Render 分类模块。启用后会围绕 自动弹幕 这一能力工作，核心行为是：根据xml文件自动发送弹幕。

配置项
- Show Reverse Danmaku：类型=布尔，默认=true
- Vertical Reverse：类型=布尔，默认=false
- Correct /n to NewLine：类型=布尔，默认=true
- Recursive Selection in Folder：类型=布尔，默认=false
- Hotkey (Next Danmaku File)：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_LMENU, '2'}}}
- List Current Index：类型=数值，默认=0
- White Danmaku Color Frozen：类型=布尔，默认=false
- Horizontal Reverse：类型=布尔，默认=false
- Path：类型=文本，默认="danmaku_172423516.xml"
- Show Top Danmaku：类型=布尔，默认=true
- File Selection Max Attempts：类型=数值，默认=5
- White Danmaku Color：类型=枚举，默认="White"
- Notify Danmaku File Name：类型=布尔，默认=true
- File Gap Duration (ms)：类型=数值，默认=0L
- Lazy Danmaku Pushing：类型=布尔，默认=false
- Show Bottom Danmaku：类型=布尔，默认=true
- File Selection Mode：类型=枚举，默认="Single File"
- Danmaku Font Size Mode：类型=枚举，默认="Auto"
- Danmaku Font Size Manual Scale：类型=数值，默认=1.0f

历史更新
- 17. 修复 AutoDanmaku 模块因为编码而无法启动问题。
- 22. 修改 AutoDanmaku 的示例文件为 danmaku_172423516.xml
- 15. 添加模块：Auto Danmaku，用于自动解析B站弹幕 XML 文件并自动播放弹幕。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Arraylist (模块列表)](./Arraylist.md)
- [Ambience (环境气氛)](./Ambience.md)
- [AutoTitle (自动标题)](./AutoTitle.md)
- [AutoTotem (自动图腾)](./AutoTotem.md)
- [AudioVisualizer (音频可视化)](./AudioVisualizer.md)
- [LyricsPhysics (物理歌词)](./LyricsPhysics.md)
- [BetterLyrics (更好的歌词)](./BetterLyrics.md)
- [MusicOverlay (音乐信息)](./MusicOverlay.md)

相关资料
无
