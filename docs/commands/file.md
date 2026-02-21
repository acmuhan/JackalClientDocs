# 文件命令

> 本页由 `test/COMMANDS.txt` 自动拆分生成。

共 32 组命令。

## `/ls`

```text
/ls
```

说明摘录：

```text
枚举当前目录文件。
```

## `/interpret <path...>`

```text
/interpret <path...>
```

说明摘录：

```text
同步解释执行一个客户端批处理文件(.jbat)或者宏文件(.jm)。
```

## `/perform <path...>`

```text
/perform <path...>
```

说明摘录：

```text
异步解释执行一个客户端批处理文件(.jbat)或者宏文件(.jm)。
```

## `/pwd`

```text
/pwd
```

说明摘录：

```text
输出当前工作目录。
```

## `/cd [path...]`

```text
/cd [path...]
/chdir [path...]
```

说明摘录：

```text
切换当前工作目录。注意，不需要指定/d参数，如果有会自动去除。后面的路径可以不加双引号。如果要切换到上一个目录，可以使用 /chdir .. 命令。/chdir 命令成功执行后，会输出当前工作目录，而 /cd 不会。
```

## `/rm <path...>`

```text
/rm <path...>
/remove <path...>
/rmcom <path...>
/removecom <path...>
```

说明摘录：

```text
删除文件或目录。后两个使用COM接口（支持撤销）。前两者如果目标为文件夹，则必须保证文件夹为空。
```

## `/hexviewfile <filepath...>`

```text
/hexviewfile <filepath...>
```

说明摘录：

```text
十六进制查看指定文件。
```

## `/hexviewproc <pid/hprocess/hwnd>`

```text
/hexviewproc <pid/hprocess/hwnd>
```

说明摘录：

```text
十六进制查看进程并输出到文件。
```

## `/cleardumps`

```text
/cleardumps
/clearcrashlogs
```

说明摘录：

```text
清空客户端崩溃转储文件 (crashlog\*.dmp)
```

## `/file <path...>`

```text
/file <path...>
```

说明摘录：

```text
根据文件内容辨别文件类型，较为基础，只能判断一小部分类型。
```

## `/findfile <keywords...>`

```text
/findfile <keywords...>
/findfileb <keywords...>
```

说明摘录：

```text
通过 Everything 软件搜索指定的文件。 /findfileb 命令只显示文件名， /findfile 显示文件名和绝对路径。
```

## `/everything`

```text
/everything
```

说明摘录：

```text
切换 Everything 模块。
```

## `/everything status`

```text
/everything status
```

说明摘录：

```text
【PRO】查看 Everything 状态（进程、版本、请求参数等）。
```

## `/everything start`

```text
/everything start
```

说明摘录：

```text
【PRO】启动 Everything.exe 并初始化接口。
```

## `/everything exit`

```text
/everything exit
```

说明摘录：

```text
【PRO】关闭 Everything 并清理接口。
```

## `/everything search <keywords...>`

```text
/everything search <keywords...>
```

说明摘录：

```text
【PRO】通过 /findfile 搜索指定文件。
```

## `/everything reset`

```text
/everything reset
```

说明摘录：

```text
【PRO】重置 Everything 搜索状态。
```

## `/everything rebuild`

```text
/everything rebuild
```

说明摘录：

```text
【PRO】请求 Everything 重新建立索引数据库。
```

## `/everything update`

```text
/everything update
```

说明摘录：

```text
【PRO】请求 Everything 更新文件夹索引。
```

## `/everything savedb`

```text
/everything savedb
```

说明摘录：

```text
【PRO】保存 Everything 数据库。
```

## `/everything savehistory`

```text
/everything savehistory
```

说明摘录：

```text
【PRO】保存 Everything 运行历史。
```

## `/everything clearhistory`

```text
/everything clearhistory
```

说明摘录：

```text
【PRO】清空 Everything 运行历史。
```

## `/everything matchpath [on/off]`

```text
/everything matchpath [on/off]
```

说明摘录：

```text
【PRO】查看或设置匹配路径（Match Path）。
```

## `/everything matchcase [on/off]`

```text
/everything matchcase [on/off]
```

说明摘录：

```text
【PRO】查看或设置大小写匹配（Match Case）。
```

## `/everything wholeword [on/off]`

```text
/everything wholeword [on/off]
```

说明摘录：

```text
【PRO】查看或设置全词匹配（Whole Word）。
```

## `/everything regex [on/off]`

```text
/everything regex [on/off]
```

说明摘录：

```text
【PRO】查看或设置正则匹配（Regex）。
```

## `/everything max [number]`

```text
/everything max [number]
```

说明摘录：

```text
【PRO】查看或设置最大返回数量。
```

## `/everything offset [number]`

```text
/everything offset [number]
```

说明摘录：

```text
【PRO】查看或设置结果偏移。
```

## `/everything sort [type]`

```text
/everything sort [type]
```

说明摘录：

```text
【PRO】查看或设置排序方式。示例：name-asc、name-desc、size-asc、size-desc。
```

## `/everything request [default/all/flags...]`

```text
/everything request [default/all/flags...]
```

说明摘录：

```text
【PRO】查看或设置请求字段。可选：name path full ext size created modified accessed attributes filelist runcount rundate recent hname hpath hfull
```

## `/load <dllpath...>`

```text
/load <dllpath...>
```

说明摘录：

```text
加载指定位置的DLL。
```

## `/unload <dllname>`

```text
/unload <dllname>
```

说明摘录：

```text
卸载已加载的DLL。
```
