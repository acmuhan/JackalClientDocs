PrivacySpy
隐私密探
分类：File
描述：根据本地文件汇总用户的隐私信息，让你变得紧张

需求
- 安全级别：恶意模块（高风险）
- 权限需求：无
- 驱动依赖：否
- 联网需求：否
- 开发状态：稳定/常规
- 版本属性：普通可用

介绍
PrivacySpy（隐私密探）用于根据本地文件汇总用户的隐私信息，让你变得紧张。
适合在日常管理与自动化场景中按需启用。
初次使用可优先调整：Async、Auto Console、Custom Scan Directory。
该模块被标记为恶意高风险，请在隔离环境下验证，避免对生产系统直接操作。

配置项
- Async（异步）
 类型：布尔；默认：true
 说明：用于控制是否异步处理。默认值 true 通常能减少主线程卡顿；若你遇到并发相关问题，可回退到更保守设置测试。
- Auto Console（自动启用控制台）
 类型：布尔；默认：true
 说明：用于选择结果反馈方式。默认值 true 适合大多数场景；若你不想打扰可改为更安静的输出方式。
- Custom Scan Directory（自定义扫描目录）
 类型：文本；默认："D:\\"
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Skip Folders（跳过目录检查）
 类型：布尔；默认：false
 说明：这是开关型配置。默认值 false 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Skip Readonly Files（跳过只读文件）
 类型：布尔；默认：true
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Skip Hidden Files（跳过隐藏文件）
 类型：布尔；默认：true
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Skip System Files（跳过系统文件）
 类型：布尔；默认：true
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- IDCard Valid Year Min（身份证有效年份最小值）
 类型：数值；默认：1914
 说明：这是数值型配置。默认值 1914 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- IDCard Valid Year Max（身份证有效年份最大值）
 类型：数值；默认：2024
 说明：这是数值型配置。默认值 2024 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- IDCard Strict Validify（身份证严格验证）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Person Name Character Max Count（人名最多几个汉字）
 类型：数值；默认：3
 说明：这是数值型配置。默认值 3 通常在稳定性与效果之间做了平衡，建议小步调整并观察实际变化。
- Filter File Extensions（筛选文件扩展名）
 类型：布尔；默认：true
 说明：用于限定作用范围，避免误触发。建议先用小样本验证规则，再逐步扩展；涉及正则时优先从简单规则开始。
- Included File Extensions（包括的文件扩展名）
 类型：文本；默认：".txt;.md;.rtf;.doc;.ppt;.xls;.docx;.pptx;.xlsx;.wps;.zip;.rar;.7z;.gz;.c;.cpp;.h;.hpp;.java;.py;.cs;.exe;.sln;.jpg;.png;.bmp;.mp3;.m4a;.mp4;.html;.htm;.css;.js;.db ...
 说明：用于指定文件/目录路径。建议使用稳定的绝对路径并确认权限可访问，避免因路径变化导致功能失效。
- Scan Disk Privacy（扫描磁盘隐私）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Confirm Before Scanning（扫描前确认）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
- Find Other Privacy（寻找其他隐私）
 类型：布尔；默认：true
 说明：这是开关型配置。默认值 true 代表作者推荐的初始行为；若要改动，建议一次只改一个开关便于观察影响。
历史更新
- 12. 现在 PrivacySpy 也会对文件夹名称进行检查统计了，如果你不想，就打开 Skip Folders 选项。
- 13. 现在 PrivacySpy 支持扫描时取消扫描。
- 31. 添加了新模块 PrivacySpy，对指定目录进行扫描，提取文件名中包含的人名、身份证号码和可能的手机号码并汇总输出。assets文件夹中多了PERSON_SUERNAMES.TXT存储姓氏，PERSON_EXCLUDE.TXT中存储非人名的排除项，可以自行修改。

备注
该模块可能受系统版本、权限级别、目标进程状态或安全软件策略影响；若功能未生效，优先检查管理员权限、驱动依赖、联网状态与系统兼容性。

相关命令
无

相关模块
- [FileManager (文件管理器)](./FileManager.md)
- [Everything (Everything)](./Everything.md)
- [FileDelete (文件删除)](./FileDelete.md)
- [FileCreate (文件创建)](./FileCreate.md)
- [FileMonitor (文件监视)](./FileMonitor.md)
- [FolderClear (目录清空)](./FolderClear.md)
- [TempClear (临时清空)](./TempClear.md)
- [RecyclerClear (回收站清空)](./RecyclerClear.md)

相关资料
无

