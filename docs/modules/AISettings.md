AISettings
AI设定
分类：Web
描述：关于AI的设置。

需求
- 安全级别：常规模块
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
AISettings 是 JackalClient 的 Web 分类模块。启用后会围绕 AI设定 这一能力工作，核心行为是：关于AI的设置。

配置项
- Response Console Output Format：类型=枚举，默认="Markdown"
- ChatAnywhere Model：类型=枚举，默认="gpt-3.5-turbo"
- Command /chat Prompt Prefix：类型=文本，默认=""
- Dashscope API Key：类型=文本，默认="sk-"
- Local Model：类型=文本，默认=""
- Chat History Sessions Saved in Files (Sep With Semicolon)：类型=文本，默认="livestream"
- Spark Model：类型=枚举，默认="Spark Lite"
- Local Route (Stream)：类型=文本，默认="/api/chat"
- Command /chat Force Stream：类型=布尔，默认=true
- PearAPI Model：类型=枚举，默认="ChatGLM"
- Filter (PRO)：类型=枚举，默认="Replace"
- Local Port：类型=数值，默认=11434
- Spark API Key：类型=文本，默认=""
- Custom AI Model：类型=文本，默认=""
- AI Type：类型=枚举，默认="PearAPI"
- Local Route：类型=文本，默认="/api/chat"
- AI Role Prompt：类型=文本，默认="You are a helpful assistant."
- Translation：类型=枚举，默认="Off"
- Debug Output：类型=布尔，默认=false
- Dashscope Use EnvVar ApiKey: DASHSCOPE_API_KEY：类型=布尔，默认=true
- Custom AI Use EnvVar ApiKey：类型=布尔，默认=false
- Spark Use EnvVar ApiKey: SPARK_API_KEY：类型=布尔，默认=true
- Custom AI Use EnvVar ApiKey Name：类型=文本，默认=""
- Memeizer Processor (PRO)：类型=布尔，默认=false
- Chat History Default Storage Policy：类型=枚举，默认="Temporary"
- Dashscope Model：类型=枚举，默认="qwen-turbo"
- ChatAnywhere API Key：类型=文本，默认="sk-"
- Command /chat Show Session：类型=布尔，默认=true
- Custom AI API Key：类型=文本，默认=""
- Chat History Sessions Saved in Records (Sep With Semicolon)：类型=文本，默认=""
- ChatAnywhere Use EnvVar ApiKey: CHATANYWHERE_API_KEY：类型=布尔，默认=true
- AI Temperature：类型=数值，默认=0.3f
- Filter Keywords (Sep With Semicolon)：类型=文本，默认=""
- AI Top P：类型=数值，默认=0.8f
- Off：类型=文本，默认="Chinese", "English", "Japanese"
- Clipboard Tweaks Module Text Processor：类型=布尔，默认=false

历史更新
- 13. 为 AI Settings 添加配置：
- 31. 为 AI Settings 添加配置：
- 52. 添加模块：AI Settings，将之前的 Chat Ask 的 API Key 等配置移动到这里。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [IRC (聊天室)](./IRC.md)
- [AntiRickroll (反诈骗)](./AntiRickroll.md)
- [AntiBrowser (反浏览器)](./AntiBrowser.md)
- [AntiWebpage (反网页)](./AntiWebpage.md)
- [LiveChatter (直播弹幕)](./LiveChatter.md)
- [TcpMonitor (TCP监视)](./TcpMonitor.md)
- [TcpKiller (TCP杀手)](./TcpKiller.md)
- [LiveStream (直播间)](./LiveStream.md)

相关资料
无
