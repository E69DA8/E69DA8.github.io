一. 正则表达式

1.修饰符
g : 全局;
i : 忽略全局大小写;
var reg = /abg/gi

2.方法//reg:正则表达式，str：需要检测的字符串
(1)test方法:用来检测字符串是否含有复合规定的字符串,有返回true,无返回false;
var flag = reg.test(str)
(2)match方法:查找相同的字符串,
str.match(reg);
(3)search方法:用于查找复合规定的字串的位置,只返回第一个匹配的位置;
str.search(reg);
(4)split方法:分割,
str.split(reg);
(5)replace方法:替换,
str.replace(reg);
(6)exec方法:将匹配的内容放到数组里,如果没有匹配成功则返回null;
reg.exec(str);

3.特殊字符
. : 除换行符之外的所有单个字符;
* : 重复多次匹配,匹配任一次(0-n);
+ : 至少有一次重复匹配(1-n);
? : 进行0到1次匹配;
[] : 表示可出现范围;//例：[0-9]
\w : 数字字母下划线,等同于[0-9a-zA-Z_];
\W : 非数字字母下划线;
\d : 表示数字,等同于[0-9];
\D : 表示非数字;
\s : 匹配空格; 
{m,n} : 最少匹配m次,最多匹配n次;
{m,} : 最少匹配m次;
{m} : 匹配m次;
/^ : 匹配开始;
$/ : 匹配结尾;
| : 或;
() : 分组,将内容作为一个整体进行匹配;
$1,$2,$3..... : 代表分组;//$1即代表一个分组