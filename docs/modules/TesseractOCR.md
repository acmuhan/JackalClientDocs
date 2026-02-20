TesseractOCR
TesseractOCR
分类：Misc
描述：Tesseract 文字识别设置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
TesseractOCR 是 JackalClient 的 Misc 分类模块。启用后会围绕 TesseractOCR 这一能力工作，核心行为是：Tesseract 文字识别设置。

配置项
- Executable Path：类型=文本，默认=""
- Language：类型=文本，默认="chi_sim"

历史更新
- 37. 给 TesseractOCR 识别函数添加了自动扫描路径（在Program Files /Program Files (x86)中自动查找）
- 30. 添加模块：TesseractOCR，文字识别设定。你需要手动下载好它然后指定可执行程序的路径。

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
