(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{531:function(v,_,t){v.exports=t.p+"assets/img/linux_file_structure.b2e3112a.png"},551:function(v,_,t){"use strict";t.r(_);var r=t(2),a=Object(r.a)({},(function(){var v=this,_=v.$createElement,r=v._self._c||_;return r("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[r("h2",{attrs:{id:"linux文件系统目录结构"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#linux文件系统目录结构"}},[v._v("#")]),v._v(" Linux文件系统目录结构")]),v._v(" "),r("p",[v._v("Linux的文件系统目录结构是属于分层树形结构。因此，文件系统是由根目录（/）开始往下长，就像一棵倒长的树一样。如图所示：\n"),r("img",{attrs:{src:t(531),alt:""}}),v._v("\n安装Linux系统时，系统会建立一些默认的目录，每个目录都有其特殊功能。下面是Linux文件系统一些常用的目录：")]),v._v(" "),r("ul",[r("li",[r("p",[v._v("/ (根目录)")]),v._v(" "),r("p",[v._v("根目录位于分层文件系统的最顶层，它包含所有的目录和文件。")])]),v._v(" "),r("li",[r("p",[v._v("/bin")]),v._v(" "),r("p",[v._v("存放那些供系统管理员和普通用户使用的重要的linux命令的可执行文件。这个目录下的文件要么是可执行文件，要么是其它目录下的可执行文件的符号链接。一些常用的命令，如cat,cp,ls等都存放在这个目录中")])]),v._v(" "),r("li",[r("p",[v._v("/boot")]),v._v(" "),r("p",[v._v("存放用于启动Linux操作系统的所有文件，包括Linux内核的二进制映像。")])]),v._v(" "),r("li",[r("p",[v._v("/dev")]),v._v(" "),r("p",[v._v("dev是Device(设备)的缩写, 该目录下存放的是Linux的外部设备，在Linux中访问设备的方式和访问文件的方式是相同的。")])]),v._v(" "),r("li",[r("p",[v._v("/etc")]),v._v(" "),r("p",[v._v("这个目录用来存放所有的系统管理所需要的配置文件和子目录。")])]),v._v(" "),r("li",[r("p",[v._v("/home")]),v._v(" "),r("p",[v._v("存放一般用户的主目录")])]),v._v(" "),r("li",[r("p",[v._v("/lib")]),v._v(" "),r("p",[v._v("这个目录里存放着系统最基本的动态连接共享库，其作用类似于Windows里的DLL文件。几乎所有的应用程序都需要用到这些共享库。")])]),v._v(" "),r("li",[r("p",[v._v("/mnt")]),v._v(" "),r("p",[v._v("系统提供该目录是为了让用户临时挂载别的文件系统的，我们可以将光驱挂载在/mnt/上，然后进入该目录就可以查看光驱里的内容了。")])]),v._v(" "),r("li",[r("p",[v._v("/opt")]),v._v(" "),r("p",[v._v("这是给主机额外安装软件所摆放的目录。比如你安装一个ORACLE数据库则就可以放到这个目录下。默认是空的。")])]),v._v(" "),r("li",[r("p",[v._v("/proc")]),v._v(" "),r("p",[v._v("当前进程和系统的信息，该目录仅存在内存")])]),v._v(" "),r("li",[r("p",[v._v("/root")]),v._v(" "),r("p",[v._v("root用户（管理员用户）的主目录。其它用户的主目录都位于/home目录下。普通用户没有权限访问/root目录")])]),v._v(" "),r("li",[r("p",[v._v("/sbin")]),v._v(" "),r("p",[v._v("s就是Super User的意思，这里存放的是系统管理员使用的系统管理程序。")])]),v._v(" "),r("li",[r("p",[v._v("/tmp")]),v._v(" "),r("p",[v._v("这个目录是用来存放一些临时文件的。")])]),v._v(" "),r("li",[r("p",[v._v("/usr")]),v._v(" "),r("p",[v._v("这是一个非常重要的目录，用户的很多应用程序和文件都放在这个目录下，类似于windows下的program files目录。")])]),v._v(" "),r("li",[r("p",[v._v("/var")]),v._v(" "),r("p",[v._v("这个目录中存放着在不断扩充着的东西，我们习惯将那些经常被修改的目录放在这个目录下。包括各种日志文件。")])])]),v._v(" "),r("h2",{attrs:{id:"常用命令"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#常用命令"}},[v._v("#")]),v._v(" 常用命令")]),v._v(" "),r("h3",{attrs:{id:"ls"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ls"}},[v._v("#")]),v._v(" ls")]),v._v(" "),r("blockquote",[r("p",[v._v("用于显示目录内容，它的使用权限为所有用户")])]),v._v(" "),r("p",[v._v("命令格式: "),r("code",[v._v("ls [参数] [文件名]")])]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("参数")]),v._v(" "),r("th",[v._v("含义")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("-a")]),v._v(" "),r("td",[v._v("列出所有文件")])]),v._v(" "),r("tr",[r("td",[v._v("-l")]),v._v(" "),r("td",[v._v("以长格式显示指定目标的信息")])])])]),v._v(" "),r("p",[r("strong",[v._v("注:")]),v._v(" ll不是命令,是 ls -l的别名")]),v._v(" "),r("h3",{attrs:{id:"mkdir"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mkdir"}},[v._v("#")]),v._v(" mkdir")]),v._v(" "),r("blockquote",[r("p",[v._v("建立子目录，它的使用权限是所有用户")])]),v._v(" "),r("p",[v._v("命令格式："),r("code",[v._v("mkdir [参数] [目录名]")])]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("参数")]),v._v(" "),r("th",[v._v("含义")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("-m")]),v._v(" "),r("td",[v._v("设定权限<模式>")])]),v._v(" "),r("tr",[r("td",[v._v("-v")]),v._v(" "),r("td",[v._v("每次创建新目录都返回信息")])])])]),v._v(" "),r("h3",{attrs:{id:"rmdir"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rmdir"}},[v._v("#")]),v._v(" rmdir")]),v._v(" "),r("blockquote",[r("p",[v._v("删除目录")])]),v._v(" "),r("p",[v._v("命令格式："),r("code",[v._v("rmdir 目录名")])]),v._v(" "),r("h3",{attrs:{id:"cd"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cd"}},[v._v("#")]),v._v(" cd")]),v._v(" "),r("blockquote",[r("p",[v._v("切换目录")])]),v._v(" "),r("p",[v._v("命令格式："),r("code",[v._v("cd 目录名")])]),v._v(" "),r("h3",{attrs:{id:"mv"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#mv"}},[v._v("#")]),v._v(" mv")]),v._v(" "),r("blockquote",[r("p",[v._v("用来为文件或目录改名，或者将文件由一个目录移入另一个目录中，它的使用权限是所有用户")])]),v._v(" "),r("p",[v._v("命令格式："),r("code",[v._v("mv 源文件名 目标文件名")])]),v._v(" "),r("h3",{attrs:{id:"cp"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cp"}},[v._v("#")]),v._v(" cp")]),v._v(" "),r("blockquote",[r("p",[v._v("将文件或目录复制到其他目录中")])]),v._v(" "),r("p",[v._v("命令格式："),r("code",[v._v("cp 源文件名 目标文件名")])]),v._v(" "),r("h3",{attrs:{id:"rm"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#rm"}},[v._v("#")]),v._v(" rm")]),v._v(" "),r("blockquote",[r("p",[v._v("删除文件或目录")])]),v._v(" "),r("p",[v._v("命令格式："),r("code",[v._v("rm [参数] 文件")])]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("参数")]),v._v(" "),r("th",[v._v("含义")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("-r")]),v._v(" "),r("td",[v._v("指定将参数中列出的全部目录和子目录均递归删除")])]),v._v(" "),r("tr",[r("td",[v._v("-f")]),v._v(" "),r("td",[v._v("忽视不存在的文件，不给予提示")])])])]),v._v(" "),r("h3",{attrs:{id:"grep"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#grep"}},[v._v("#")]),v._v(" grep")]),v._v(" "),r("blockquote",[r("p",[v._v("在指定文件中搜索特定的内容，并将含有这些内容的行标准输出")])]),v._v(" "),r("p",[v._v("命令格式："),r("code",[v._v("grep [参数] [文件名]")])]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("参数")]),v._v(" "),r("th",[v._v("含义")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("-v")]),v._v(" "),r("td",[v._v("显示不包含匹配文本的所有行")])]),v._v(" "),r("tr",[r("td",[v._v("-n")]),v._v(" "),r("td",[v._v("显示匹配行及行号")])])])]),v._v(" "),r("h3",{attrs:{id:"find"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[v._v("#")]),v._v(" find")]),v._v(" "),r("blockquote",[r("p",[v._v("在目录中搜索文件")])]),v._v(" "),r("p",[v._v("命令格式："),r("code",[v._v("find [路径] [参数] [文件名]")])]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("参数")]),v._v(" "),r("th",[v._v("含义")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("-name")]),v._v(" "),r("td",[v._v("输出搜索结果，并且打印")])]),v._v(" "),r("tr",[r("td",[v._v("-user")]),v._v(" "),r("td",[v._v("显示搜索文件的属性")])])])]),v._v(" "),r("h3",{attrs:{id:"tail"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[v._v("#")]),v._v(" tail")]),v._v(" "),r("blockquote",[r("p",[v._v("用来显示一个或多个文件的尾部（默认显示10行）")])]),v._v(" "),r("p",[v._v("命令格式："),r("code",[v._v("tail [参数] 文件名")])]),v._v(" "),r("table",[r("thead",[r("tr",[r("th",[v._v("参数")]),v._v(" "),r("th",[v._v("含义")])])]),v._v(" "),r("tbody",[r("tr",[r("td",[v._v("+/-n")]),v._v(" "),r("td",[v._v("+n表示显示从文件第n行开始的所有行；-n表示显示文件的最后n行")])]),v._v(" "),r("tr",[r("td",[v._v("-f")]),v._v(" "),r("td",[v._v("显示完文件的最后一行后，如果文件正在被追加，会继续显示追加的行，直到键入<Ctrl> + C")])])])])])}),[],!1,null,null,null);_.default=a.exports}}]);