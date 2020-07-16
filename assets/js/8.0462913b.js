(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{495:function(s,a,t){s.exports=t.p+"assets/img/B-tree.b1316115.png"},496:function(s,a,t){s.exports=t.p+"assets/img/B+Tree.a3fdd08a.png"},497:function(s,a,t){s.exports=t.p+"assets/img/msqlnodesize.75119729.png"},498:function(s,a,t){s.exports=t.p+"assets/img/mylsam_data.bfd612b7.png"},499:function(s,a,t){s.exports=t.p+"assets/img/mylsam.7c04975d.png"},500:function(s,a,t){s.exports=t.p+"assets/img/inno1.eaa78542.png"},501:function(s,a,t){s.exports=t.p+"assets/img/inno2.b5431c25.png"},502:function(s,a,t){s.exports=t.p+"assets/img/inno3.c8fdbcbb.png"},503:function(s,a,t){s.exports=t.p+"assets/img/inno4.198a13a5.png"},504:function(s,a,t){s.exports=t.p+"assets/img/image-20200626104917337.d6661160.png"},505:function(s,a,t){s.exports=t.p+"assets/img/hashmap.27027e24.png"},545:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"mysql底层结构分析-最终选择了什么数据结构作为索引？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql底层结构分析-最终选择了什么数据结构作为索引？"}},[s._v("#")]),s._v(" Mysql底层结构分析(最终选择了什么数据结构作为索引？)")]),s._v(" "),e("h2",{attrs:{id:"索引是帮助mysql高效获取数据的排序的数据结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#索引是帮助mysql高效获取数据的排序的数据结构"}},[s._v("#")]),s._v(" 索引是帮助Mysql高效获取数据的排序的数据结构")]),s._v(" "),e("p",[s._v("索引数据结构分类")]),s._v(" "),e("div",{staticClass:"language-http line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[s._v("  演示地址：https://www.cs.usfca.edu/~galles/visualization/Algorithms.html\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("blockquote",[e("ul",[e("li",[e("p",[s._v("二叉树")])]),s._v(" "),e("li",[e("p",[s._v("红黑树")])]),s._v(" "),e("li",[e("p",[s._v("Hash表")])]),s._v(" "),e("li",[e("p",[s._v("B-Tree")])])])]),s._v(" "),e("h2",{attrs:{id:"二叉树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[s._v("#")]),s._v(" 二叉树")]),s._v(" "),e("p",[s._v("演示地址：https://www.cs.usfca.edu/~galles/visualization/BST.html")]),s._v(" "),e("h2",{attrs:{id:"红黑树（弱平衡二叉树-）插入最大2次旋转，删除最大3次旋转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#红黑树（弱平衡二叉树-）插入最大2次旋转，删除最大3次旋转"}},[s._v("#")]),s._v(" 红黑树（弱平衡二叉树 ）插入最大2次旋转，删除最大3次旋转")]),s._v(" "),e("p",[s._v("演示地址："),e("code",[s._v("https://www.cs.usfca.edu/~galles/visualization/RedBlack.html")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1、节点是红色或黑色\n2、根节点是黑色\n3、所有叶子节点是黑色（叶子节点是NIL节点，为了性质5到叶子节点具有相同数目黑色节点）\n4、从每个叶子到根的所有路径上不能有两个连续的红色节点\n5、从任一节点到其叶子的所有路径包含相同数目黑色节点\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"hash表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hash表"}},[s._v("#")]),s._v(" Hash表")]),s._v(" "),e("p",[s._v("经过hash运算可以快速的查找，但是无法进行范围查询。")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1、哈希表是把索引字段映射成对应的哈希码然后再存放在对应的位置，这样的话，如果我们要进行模糊查找的话，显然哈希表这种结构是不支持的，只能遍历这个表。而B+树则可以通过最左前缀原则快速找到对应的数据。\n\n2、如果我们要进行范围查找，例如查找ID为100 ~ 400的人，哈希表同样不支持，只能遍历全表。\n\n3、索引字段通过哈希映射成哈希码，如果很多字段都刚好映射到相同值的哈希码的话，那么形成的索引结构将会是一条很长的链表，这样的话，查找的时间就会大大增加。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"b-tree-多路平衡搜索树"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-tree-多路平衡搜索树"}},[s._v("#")]),s._v(" B-Tree(多路平衡搜索树)")]),s._v(" "),e("p",[e("img",{attrs:{src:t(495),alt:"image-20200625224338667"}})]),s._v(" "),e("p",[s._v("B树也无法进行很好的范围查找。")]),s._v(" "),e("h2",{attrs:{id:"b-tree-b-tree变种-多叉平衡数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#b-tree-b-tree变种-多叉平衡数"}},[s._v("#")]),s._v(" B+Tree(B-Tree变种) 多叉平衡数")]),s._v(" "),e("ul",[e("li",[s._v("非叶子节点不存储data，只存储索引（冗余），可以放更多的索引")]),s._v(" "),e("li",[s._v("叶子节点包含所有索引字段")]),s._v(" "),e("li",[s._v("叶子节点用指针连接，提高区间访问的性能")]),s._v(" "),e("li",[s._v("根节点直接放入内存进行查找，进行比对。 2 次 I/O 即可查询完毕")]),s._v(" "),e("li",[s._v("支持很好的范围查找，因为叶子节点有指针关联（双向指针）")])]),s._v(" "),e("p",[e("img",{attrs:{src:t(496),alt:"image-20200625225830301"}})]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" 可以存放多少个非叶子节点： \n 16KB/14B = 16*1024/14 = 1170个\n 叶子节点：假设加data 可以存放 1kb  16\n 假设 h = 3  可以存放多少个索引 ：1170 * 1170 * 16 > 2000万\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"mysql-节点大小设置为16kb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-节点大小设置为16kb"}},[s._v("#")]),s._v(" mysql 节点大小设置为16kb")]),s._v(" "),e("p",[e("img",{attrs:{src:t(497),alt:"image-20200625225228036"}})]),s._v(" "),e("h2",{attrs:{id:"mysql-5-5-的默认配置文件和数据文件的存放路径"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-5-5-的默认配置文件和数据文件的存放路径"}},[s._v("#")]),s._v(" mysql 5.5 的默认配置文件和数据文件的存放路径")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("my.ini：\nC:\\ProgramData\\MySQL\\MySQL Server 5.5\n数据文件：\nC:\\ProgramData\\MySQL\\MySQL Server 5.5\\data\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h2",{attrs:{id:"myisam存储引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#myisam存储引擎"}},[s._v("#")]),s._v(" MyISAM存储引擎")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("myisam索引文件和数据文件分离的\nfrm：表结构；MYD：数据文件；MYI：索引文件\n首先是 MyI（index索引） 存储索引进行查找，查到叶子节点存放的是地址，然后根据地址查询MYD（data数据）获取数据。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("blockquote",[e("p",[e("img",{attrs:{src:t(498),alt:"image-20200626101336307"}}),s._v(" "),e("img",{attrs:{src:t(499),alt:"image-20200626101057873"}})])]),s._v(" "),e("h2",{attrs:{id:"innodb存储引擎"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#innodb存储引擎"}},[s._v("#")]),s._v(" InnoDB存储引擎 :")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("innoDB索引文件和数据文件是在一起的\nfrm：表结构；ibd：索引文件和数据文件\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("ol",[e("li",[e("h3",{attrs:{id:"表数据文件本身就是按b-tree组织的一个索引结构文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表数据文件本身就是按b-tree组织的一个索引结构文件"}},[s._v("#")]),s._v(" 表数据文件本身就是按B+ Tree组织的一个索引结构文件")])]),s._v(" "),e("li",[e("h3",{attrs:{id:"聚集索引：叶子节点包含了完整的数据记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#聚集索引：叶子节点包含了完整的数据记录"}},[s._v("#")]),s._v(" 聚集索引：叶子节点包含了完整的数据记录")])]),s._v(" "),e("li",[e("h3",{attrs:{id:"为什么innodb表必须有主键，并且推荐使用整型的自增主键？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么innodb表必须有主键，并且推荐使用整型的自增主键？"}},[s._v("#")]),s._v(" 为什么InnoDB表必须有主键，并且推荐使用整型的自增主键？")]),s._v(" "),e("blockquote",[e("p",[s._v("对于这颗主键索引的树")]),s._v(" "),e("p",[e("img",{attrs:{src:t(500),alt:"img"}})]),s._v(" "),e("p",[s._v("如果我们插入 ID = 650 的一行数据，那么直接在最右边插入就可以了")]),s._v(" "),e("p",[e("img",{attrs:{src:t(501),alt:"img"}})]),s._v(" "),e("p",[s._v("但是如果插入的是 ID = 350 的一行数据，由于 B+ 树是有序的，那么需要将下面的叶子节点进行移动，腾出位置来插入 ID = 350 的数据，这样就会比较消耗时间，如果刚好 R4 所在的数据页已经满了，需要进行"),e("strong",[s._v("页分裂")]),s._v("操作，这样会更加糟糕。")]),s._v(" "),e("p",[s._v("但是，如果我们的主键是自增的，每次插入的 ID 都会比前面的大，那么我们每次只需要在后面插入就行， 不需要移动位置、分裂等操作，这样可以提高性能。也就是为什么建议使用主键自增的索引。")]),s._v(" "),e("p",[s._v("推荐使用整型的自增主键因为索引查找会进行大量的索引数据比较大小，占用空间小，且维护树结构新增叶子节点比较方便,不会大量导致元素的分裂和树的平衡")]),s._v(" "),e("p",[s._v("1、如果设置了主键，那么InnoDB会选择主键作为聚集索引、如果没有显式定义主键，则InnoDB会选择第一个不包含有NULL值的唯一索引作为主键索引、如果也没有这样的唯一索引，则InnoDB会选择内置6字节长的ROWID作为隐含的聚集索引(ROWID随着行记录的写入而主键递增)。")]),s._v(" "),e("p",[s._v("2、如果表使用自增主键\n那么每次插入新的记录，记录就会顺序添加到当前索引节点的后续位置，主键的顺序按照数据记录的插入顺序排列，自动有序。当一页写满，就会自动开辟一个新的页")]),s._v(" "),e("p",[s._v("3、如果使用非自增主键（如果身份证号或学号等）\n由于每次插入主键的值近似于随机，因此每次新纪录都要被插到现有索引页得中间某个位置，此时MySQL不得不为了将新记录插到合适位置而移动数据，甚至目标页面可能已经被回写到磁盘上而从缓存中清掉，此时又要从磁盘上读回来，这增加了很多开销，同时频繁的移动、分页操作造成了大量的碎片，得到了不够紧凑的索引结构，后续不得不通过OPTIMIZE TABLE来重建表并优化填充页面")])])]),s._v(" "),e("li",[e("h3",{attrs:{id:"为什么非主键索引结构叶子节点存储的主键值？（一致性和节省存储空间）"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么非主键索引结构叶子节点存储的主键值？（一致性和节省存储空间）"}},[s._v("#")]),s._v(" 为什么非主键索引结构叶子节点存储的主键值？（一致性和节省存储空间）")]),s._v(" "),e("blockquote",[e("p",[s._v("非主键索引结构叶子节点存储的是主键值，使主键索引复用性高，节省空间，保证了主键索引的一致性。")]),s._v(" "),e("p",[s._v("减少了出现行移动或者数据页分裂时二级索引的维护工作（当数据需要更新的时候，二级索引不需要修改，只需要修改聚簇索引，一个表只能有一个聚簇索引，其他的都是二级索引，这样只需要修改聚簇索引就可以了，不需要重新构建二级索引）")]),s._v(" "),e("p",[s._v("聚簇索引也称为主键索引，其索引树的叶子节点中存的是整行数据，表中行的物理顺序与键值的逻辑（索引）顺序相同。一个表只能包含一个聚集索引。因为索引（目录）只能按照一种方法进行排序。")]),s._v(" "),e("p",[s._v("非聚簇索引（普通索引）的叶子节点内容是主键的值。在 InnoDB 里，非主键索引也被称为二级索引（secondary index）。")]),s._v(" "),e("ul",[e("li",[s._v("主键索引和非主键索引有什么区别？")])]),s._v(" "),e("p",[s._v("例如对于下面这个表(其实就是上面的表中增加了一个k字段),且ID是主键。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(502),alt:"img"}}),s._v("\n主键索引和非主键索引的示意图如下：\n"),e("img",{attrs:{src:t(503),alt:"img"}}),s._v("其中R代表一整行的值。")]),s._v(" "),e("p",[s._v("从图中不难看出，主键索引和非主键索引的区别是：非主键索引的叶子节点存放的是"),e("strong",[s._v("主键的值")]),s._v("，而主键索引的叶子节点存放的是"),e("strong",[s._v("整行数据")]),s._v("，其中非主键索引也被称为"),e("strong",[s._v("二级索引")]),s._v("，而主键索引也被称为"),e("strong",[s._v("聚簇索引")]),s._v("。")]),s._v(" "),e("p",[s._v("根据这两种结构我们来进行下查询，看看他们在查询上有什么区别。")]),s._v(" "),e("p",[s._v("1、如果查询语句是 select * from table where ID = 100,即主键查询的方式，则只需要搜索 ID 这棵 B+树。")]),s._v(" "),e("p",[s._v("2、如果查询语句是 select * from table where k = 1，即非主键的查询方式，则先搜索k索引树，得到ID=100,再到ID索引树搜索一次，这个过程也被称为回表。")])])])])]),s._v(" "),e("p",[e("img",{attrs:{src:t(504),alt:"image-20200626104917337"}})]),s._v(" "),e("h2",{attrs:{id:"联合索引"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#联合索引"}},[s._v("#")]),s._v(" 联合索引 :")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("innoDB索引文件和数据文件是在一起的\nfrm：表结构；ibd：索引文件和数据文件\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("HashMap")]),s._v(" "),e("p",[s._v("组合结构： 左边部分是数组，右边部分是链表或则是红黑树，当<6的时候蜕化为链表，>8的时候转换为红黑树")]),s._v(" "),e("p",[e("img",{attrs:{src:t(505),alt:"image-20200626150727952"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);