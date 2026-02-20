Screenshot
截图工具
分类：Misc
描述：你可以用PrtScr键打开截图工具。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
Screenshot 是 JackalClient 的 Misc 分类模块。启用后会围绕 截图工具 这一能力工作，核心行为是：你可以用PrtScr键打开截图工具。

配置项
- Notify Close：类型=布尔，默认=true
- Save Image：类型=枚举，默认="Default"
- Copy Image：类型=枚举，默认="DIB"
- Countdown：类型=布尔，默认=false
- Countdown Duration (ms)：类型=数值，默认=3000L
- HUD Font Size：类型=数值，默认=35
- Mode：类型=枚举，默认="Tool"
- Exclude Client：类型=枚举，默认="Shift Key"
- bind：类型=按键/复合，默认={{"Keybind", {VK_LCONTROL, VK_SNAPSHOT}}}
- Close Vanilla Snipping Tool：类型=布尔，默认=true
- Preview Brightness (0~1)：类型=数值，默认=0.6f
- Save Image Custom Path：类型=文本，默认="D:\\"
- Extract Text Language (PRO)：类型=文本，默认="chi_sim"
- Extract Text (PRO)：类型=枚举，默认="Off"

历史更新
- 27. 为 Screenshot 模块添加配置：
- 28. 为 Screenshot 添加按 Shift 截方形图的功能。
- 7. 现在启用 Screenshot 截图后，GUIBlur 会自动关闭。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [Active (活动)](./Active.md)
- [AutoSpeak (自动讲述)](./AutoSpeak.md)
- [AntiMicrophone (反麦克风)](./AntiMicrophone.md)
- [Console (控制台)](./Console.md)
- [Shell (命令行)](./Shell.md)
- [QuickCommand (快速命令)](./QuickCommand.md)
- [ForceTopmost (强制置顶)](./ForceTopmost.md)
- [MemeTrigger (梗触发)](./MemeTrigger.md)

相关资料
无
