# 文本处理命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 40 组命令。

## 准备阶段

第一步：打开左侧菜单栏的「命令面板」
随后，在搜索框中输入命令前缀快速定位。

## 核心操作

### `/echo <string...>`

```text
可用别名：
/echo <string...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
回显文本。
```

应用场景：

- 当你需要回显文本时，使用此命令

### `/translate [content...=clipboard]`

```text
可用别名：
/translate [content...=clipboard]
/translatecopy [content...=clipboard]
/translateto <lang> [content...=clipboard]
/translatetocopy <lang> [content...=clipboard]
/translateloop <times> [content...=clipboard]
/translateloopcopy <times> [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
Edge 翻译功能。translateto 可指定目标语言， translateloop 将会把文本按每一种语言轮流进行翻译，最后翻回原先的语言，共翻译 times 次。
如果结尾是copy，则会将结果复制到剪贴板。
```

应用场景：

- 当你需要Edge 翻译功能时，使用此命令

### `/translateoffline <from> <to> [content...=clipboard]`

```text
可用别名：
/translateoffline <from> <to> [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
opencc 离线翻译。
支持的语言缩写有：s简体中文，t繁体中文，hk香港，tw台湾繁体，jp日本汉字
```

应用场景：

- 当你需要opencc 离线翻译时，使用此命令

### `/memeizer [content...=clipboard]`

```text
可用别名：
/memeizer [content...=clipboard]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
生草机翻译。相关设置请到生草机模块进行配置。
```

应用场景：

- 当你需要生草机翻译时，使用此命令

### `/calc [expr...]`

```text
可用别名：
/calc [expr...]
/calculate <expr...>
/calccopy <expr...>
/getcalc <expr...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
前者如果参数不填，则异步启动一个计算器。
否则，计算并输出数学表达式 expr 的值。支持四则运算、**乘方运算、三角函数、反三角函数、双曲三角函数、expr、sqrt、pow、random()、randint(a,b)、uniform(a,b)
注意这其实是调用 PowerShell 进行运算，并非客户端自身计算。

calculate 命令会输出转化后的PowerShell表达式并输出用时。
calccopy 命令如果成功，将会将结果写入剪贴板。
getcalc 命令如果成功，将会将结果以字符串形式写入it
```

应用场景：

- 当你需要前者如果参数不填，则异步启动一个计算器时，使用此命令

### `/textdatabase get <key>`

```text
可用别名：
/textdatabase get <key>
/textdatabase query <key>
/textdatabase copy <key>
/textdatabase obtain <key>
/tdb get <key>
/tdb query <key>
/tdb copy <key>
/tdb obtain <key>
/pastebin get <key>
/pastebin query <key>
/pastebin copy <key>
/pastebin obtain <key>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
从文本数据库获取文本。key 为秘钥。其中 copy 会把结果存入剪贴板，obtain 会把结果存入 it 代词中。/pastebin 会使用某种客户端的算法加密你的key以减少冲突的可能性。
```

应用场景：

- 当你需要从文本数据库获取文本时，使用此命令

### `/textdatabase set <key>`

```text
可用别名：
/textdatabase set <key>
/textdatabase update <key>
/tdb set <key>
/tdb update <key>
/pastebin set <key>
/pastebin update <key>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
文本数据库中设置文本。key 为秘钥。/pastebin 会使用某种客户端的算法加密你的key以减少冲突的可能性。
```

应用场景：

- 当你需要文本数据库中设置文本时，使用此命令

### `/textdatabase clear <key>`

```text
可用别名：
/textdatabase clear <key>
/textdatabase delete <key>
/tdb clear <key>
/tdb delete <key>
/pastebin clear <key>
/pastebin delete <key>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
文本数据库中清空文本。key 为秘钥。/pastebin 会使用某种客户端的算法加密你的key以减少冲突的可能性。
```

应用场景：

- 当你需要文本数据库中清空文本时，使用此命令

### `/qrcode [content...]`

```text
可用别名：
/qrcode [content...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
根据内容生成二维码并打开。如果不写参数，则读取剪贴板内容（必须是文本类型）。
```

应用场景：

- 当你需要根据内容生成二维码并打开时，使用此命令

### `/string [content...]`

```text
可用别名：
/string [content...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
为 it 赋值字符串。
```

应用场景：

- 当你需要为 it 赋值字符串时，使用此命令

### `/string2 [content...]`

```text
可用别名：
/string2 [content...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
为 it 赋值字符串。但会弹出一个高级输入框让你编辑。content 将作为输入框的初始内容。
```

应用场景：

- 当你需要为 it 赋值字符串时，使用此命令

### `/string3 [content...]`

```text
可用别名：
/string3 [content...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
为 it 赋值字符串。但会弹出一个聊天框让你编辑。content 将作为输入框的初始内容。
```

应用场景：

- 当你需要为 it 赋值字符串时，使用此命令

### `/copystr [content...]`

```text
可用别名：
/copystr [content...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
复制字符串，但先弹出一个高级输入框让你编辑。content 作为输入框的初始内容。
```

应用场景：

- 当你需要复制字符串，但先弹出一个高级输入框让你编辑时，使用此命令

### `/str <params...>`

```text
可用别名：
/str <params...>
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
字符串功能。params 为相关参数。
```

应用场景：

- 当你需要字符串功能时，使用此命令

### `/str size [content=it...]`

```text
可用别名：
/str size [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
获取字符串长度与字符数。
```

应用场景：

- 当你需要字符串长度与字符数时，使用此命令

### `/str transform lower [content=it...]`

```text
可用别名：
/str transform lower [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
字符串转小写。
```

应用场景：

- 当你需要字符串转小写时，使用此命令

### `/str transform upper [content=it...]`

```text
可用别名：
/str transform upper [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
字符串转大写。
```

应用场景：

- 当你需要字符串转大写时，使用此命令

### `/str transform reverse [content=it...]`

```text
可用别名：
/str transform reverse [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
字符串反转。注意基本单位为字符而不是字节。
```

应用场景：

- 当你需要字符串反转时，使用此命令

### `/str transform swapcase [content=it...]`

```text
可用别名：
/str transform swapcase [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
交换字符串大小写。
```

应用场景：

- 当你需要交换字符串大小写时，使用此命令

### `/str transform annoycase [content=it...]`

```text
可用别名：
/str transform annoycase [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
混写字符串大小写。
```

应用场景：

- 当你需要混写字符串大小写时，使用此命令

### `/str transform remove <substr> [content=it...]`

```text
可用别名：
/str transform remove <substr> [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
移除子串。
```

应用场景：

- 当你需要移除子串时，使用此命令

### `/str transform replace <old> <new> [content=it...]`

```text
可用别名：
/str transform replace <old> <new> [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
替换字符串。
```

应用场景：

- 当你需要替换字符串时，使用此命令

### `/str transform split <sep> [content=it...]`

```text
可用别名：
/str transform split <sep> [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
分隔字符串。
```

应用场景：

- 当你需要分隔字符串时，使用此命令

### `/str transform join <sep> [content=it...]`

```text
可用别名：
/str transform join <sep> [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
在字符串每个字符间添加字符。
```

应用场景：

- 当你需要在字符串每个字符间添加字符时，使用此命令

### `/str transform delpunct [content=it...]`

```text
可用别名：
/str transform delpunct [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
删除字符串标点符号。
```

应用场景：

- 当你需要删除字符串标点符号时，使用此命令

### `/str transform punctcutline [content=it...]`

```text
可用别名：
/str transform punctcutline [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
根据字符串标点符号换行。
```

应用场景：

- 当你需要根据字符串标点符号换行时，使用此命令

### `/str transform toengpunct [content=it...]`

```text
可用别名：
/str transform toengpunct [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
将字符串的标点符号全部改为英文标点。
```

应用场景：

- 当你需要将字符串的标点符号全部改为英文标点时，使用此命令

### `/str transform tochnpunct [content=it...]`

```text
可用别名：
/str transform tochnpunct [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
将字符串的标点符号全部改为中文标点。
```

应用场景：

- 当你需要将字符串的标点符号全部改为中文标点时，使用此命令

### `/str transform obfuscate <mode> [content=it...]`

```text
可用别名：
/str transform obfuscate <mode> [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
使用 mode 模式混淆字符串。
```

应用场景：

- 当你需要使用 mode 模式混淆字符串时，使用此命令

### `/str transform quote [content=it...]`

```text
可用别名：
/str transform quote [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
添加双引号。
```

应用场景：

- 当你需要添加双引号时，使用此命令

### `/str transform unquote [content=it...]`

```text
可用别名：
/str transform unquote [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
移除首尾双引号。
```

应用场景：

- 当你需要移除首尾双引号时，使用此命令

### `/str transform escape [content=it...]`

```text
可用别名：
/str transform escape [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
转义字符串。例如将换行符替换为\n（写成这样）。
```

应用场景：

- 当你需要转义字符串时，使用此命令

### `/str transform unescape [content=it...]`

```text
可用别名：
/str transform unescape [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
反转义字符串。
```

应用场景：

- 当你需要反转义字符串时，使用此命令

### `/str transform escapehtml [content=it...]`

```text
可用别名：
/str transform escapehtml [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
转义字符串。但是是 HTML 转义规则。
```

应用场景：

- 当你需要转义字符串时，使用此命令

### `/str transform unescapehtml [content=it...]`

```text
可用别名：
/str transform unescapehtml [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
反转义字符串。但是是 HTML 转义规则。
```

应用场景：

- 当你需要反转义字符串时，使用此命令

### `/str transform extractext [content=it...]`

```text
可用别名：
/str transform extractext [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
提取文件路径扩展名。
```

应用场景：

- 当你需要提取文件路径扩展名时，使用此命令

### `/str transform delext [content=it...]`

```text
可用别名：
/str transform delext [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
去除文件路径扩展名。
```

应用场景：

- 当你需要去除文件路径扩展名时，使用此命令

### `/str transform filter [content=it...]`

```text
可用别名：
/str transform filter [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
对字符串进行屏蔽词过滤。
```

应用场景：

- 当你需要对字符串进行屏蔽词过滤时，使用此命令

### `/str transform cut [content=it...]`

```text
可用别名：
/str transform cut [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
中文分词。使用在线API。
```

应用场景：

- 当你需要中文分词时，使用此命令

### `/str transform cut_bili [content=it...]`

```text
可用别名：
/str transform cut_bili [content=it...]
```

操作步骤：

1. 在命令面板输入上述任意别名
2. 按下回车键执行命令

功能说明：

```text
中文分词。使用B站搜索推荐词。
```

应用场景：

- 当你需要中文分词时，使用此命令

## 运行与测试

1. 执行命令后，观察底部状态栏的反馈信息
2. 若命令未生效，检查输入格式是否正确

## 进阶建议

尝试组合多个命令，实现更复杂的操作流程。

恭喜你掌握了本节所有命令，现在去构建你的专属工作流吧！
