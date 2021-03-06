## 原型链
* function Fn() {}// Fn为构造函数
* var f1 = new Fn();//f1是Fn构造函数创建出来的对象
* 构造函数的prototype属性值就是对象原型。（Fn.prototype就是对象的原型）
* 构造函数的prototype属性值的类型就是对象  typeof Fn.prototype===object. 
* 对象原型中的constructor属性指向构造函数 （Fn.prototype.constructor===Fn)
* 对象的__proto__属性值就是对象的原型。（f1.__proto__就是对象原型）
* Fn.prototype===f1.__proto__ 其实它们两个就是同一个对象---对象的原型。
* 所有Fn.prototype.__proto__===Object.prototype
* typeof Object.prototype ===object。
* Object.prototype.__proto__===null。

我讨论原型就是指的对象与原型对象之间的关系。所以原型链也称之为对象链。
有了以上的基础知识，下面的原型链图你就可以看明白了。
![image.png](https://upload-images.jianshu.io/upload_images/5138592-f26e97f60e40843b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
所以对象f1的原型链：f1.__proto__---->Fn.prototype.__proto__----->Object.prototype.__prototype__---->null
> https://blog.csdn.net/qq_34629352/article/details/78553716
###避免原型链的对象共享
    用构造函数和原型链的混合模式去实现继承，避免对象共享可以参考经典的extend()函数，很多前端框架都有封装的，就是用一个空函数当做中间变量
## js中函数参数值传递和引用(地址)传递
### 参数是传值参数
```TypeScript
var foo=1;
(function (foo) {
    console.log(foo);
    foo=3;
    var foo=2;
    console.log(foo);
})(foo);
console.log(foo);
```
结果:1 2 1
### 参数是引用参数
```TypeScript
var foo={n:1};
(function (foo) {
    console.log(foo.n);
    foo.n=3;
    var foo={n:2};
    console.log(foo.n);
})(foo);
console.log(foo.n);
```
结果: 1 2 3
### 数组如果直接取值是值传递
```TypeScript
var list = [1, 2, 3];
function a(item) {
 item[0] ++;
};
//  地址传递
a(list);
console.log(list); // [ 2, 2, 3 ]

var list = [1, 2, 3];
function a(val) {
 val ++;
};
//  值传递
a(list[0]);
console.log(list); // [ 1, 2, 3 ]
```
解释:
```TypeScript
var foo={n:"我是形参或全局变量"};
(function (foo) {
    console.log(foo.n);
    foo.n="我改变了参数和全局变量";
    var foo={n:"我是局部变量"};
    console.log(foo.n);
})(foo);
console.log(foo.n);
```
注意arguments对象的值和参数值是相互影响的，但使用es6新特性进行参数声明(变长参数、默认参数、解构赋值。。。)的，对象传递时地址将改变，值修改也就不再影响。
> https://baijiahao.baidu.com/s?id=1587358013067643832&wfr=spider&for=pc
> https://www.cnblogs.com/refe/p/5101744.html

## JS异步的解决方案

deferred （jQuery 或者 zepto 中）
Promise（ES6 或者第三方库，如 q.js bluebird.js）
Generator（从 koa 升级 2.x 之后已经不再常用）
async/await （ES7 草案）

## hybrid 和 h5 区别
hybrid 是通过file协议加载的本地文件，h5 是通过http协议加载的网络文件，前者速度快。
hybrid 是通过为不同版本打包进行更新，而 h5 没有版本的概念，每次都获取服务端的最新版。
hybrid 更加依赖于客户端的能力，因此会更多的和客户端通讯，而 h5 基本用不到和客户端通讯。

### http返回码：
    100  Continue  继续，一般在发送post请求时，已发送了http header之后服务端将返回此信息，表示确认，之后发送具体参数信息
    200  OK   正常返回信息
    201  Created  请求成功并且服务器创建了新的资源
    202  Accepted  服务器已接受请求，但尚未处理
    301  Moved Permanently  请求的网页已永久移动到新位置。
    302 Found  临时性重定向。
    303 See Other  临时性重定向，且总是使用 GET 请求新的 URI。
    304  Not Modified  自从上次请求后，请求的网页未修改过。

    400 Bad Request  服务器无法理解请求的格式，客户端不应当尝试再次使用相同的内容发起请求。
    401 Unauthorized  请求未授权。
    403 Forbidden  禁止访问。
    404 Not Found  找不到如何与 URI 相匹配的资源。

    500 Internal Server Error  最常见的服务器端错误。
    503 Service Unavailable 服务器端暂时无法处理请求（可能是过载或维护）。

## 说说你对闭包的理解
优点 可以**避免全局变量的污染**
缺点 闭包会**常驻内存**

闭包有三个特性:
>1.函数嵌套函数
>2.函数内部可以引用外部的参数和变量
>3.参数和变量不会被垃圾回收机制回收
 
### 请你谈谈Cookie的弊端
* 存储个数有限制，不同浏览器限制不一
    1.IE6或更低版本最多20个cookie
    2.IE7和之后的版本最后可以有50个cookie。
    3.Firefox最多50个cookie
    4.chrome和Safari没有做硬性限制
* `IE`和`Opera` 会清理近期最少使用的`cookie`，`Firefox`会随机清理`cookie`。
* `cookie`的最大大约为`4096`字节，为了兼容性，一般不能超过`4095`字节。

> IE 提供了一种存储可以持久化用户数据，叫做`userdata`，从`IE5.0`就开始支持。每个数据最多128K，每个域名下最多1M。这个持久化数据放在缓存中，如果缓存没有清理，那么会一直存在。

### 优点：极高的扩展性和可用性
    1.通过良好的编程，控制保存在cookie中的session对象的大小。
    2.通过加密和安全传输技术（SSL），减少cookie被破解的可能性。
    3.只在cookie中存放不敏感数据，即使被盗也不会有重大损失。
    4.控制cookie的生命期，使之不会永远有效。偷盗者很可能拿到一个过期的cookie。

### 缺点：
    1.`Cookie`数量和长度的限制。每个domain最多只能有20条cookie，每个cookie长度不能超过4KB，否则会被截掉。
    2.安全性问题。如果cookie被人拦截了，那人就可以取得所有的session信息。即使加密也与事无补，因为拦截者并不需要知道cookie的意义，他只要**原样转发cookie**就可以达到目的了。
    3.**内容会丢失**，有些状态不可能保存在客户端。例如，为了防止重复提交表单，我们需要在服务器端保存一个计数器。如果我们把这个计数器保存在客户端，那么它起不到任何作用。
    4、**每次请求都会带上cookie，浪费流量**

### 浏览器本地存储
---------
* `js`提供了`sessionStorage`和`globalStorage`。在`HTML5`中提供了`localStorage`来取代`globalStorage`。
`html5`中的`Web Storage`包括了两种存储方式：`sessionStorage`和`localStorage`。
`sessionStorage`用于本地存储一个会话（session）中的数据，这些数据只有在同一个会话中的页面才能访问并且当会话结束后数据也随之销毁。因此`sessionStorage`不是一种持久化的本地存储，仅仅是会话级别的存储。
而`localStorage`用于持久化的本地存储，除非主动删除数据，否则数据是永远不会过期的。
* cookie
* react、angular、vue内存存储，方便组件之间互相读取数据
* 第三方js工具整合出来“永久”存储
* JSP内置对象session

### web storage和cookie的区别
* `Web Storage`的概念和`cookie`相似，区别是它是为了更大容量存储设计的。`Cookie`的大小是受限的，并且**每次你请求一个新的页面的时候`Cookie`都会被发送过去**，这样无形中浪费了带宽，另外`cookie`还需要指定作用域，不可以跨域调用。
* `Web Storage`拥有`setItem,getItem,removeItem,clear`等方法，不像`cookie`需要前端开发者自己封装`setCookie，getCookie`。
* `cookie`的作用是与服务器进行交互，作为`HTTP`规范的一部分而存在 ，而`Web Storage`仅仅是为了在本地“存储”数据而生
* cookie兼容性高，浏览器的支持除了`IE７`及以下不支持外，其他标准浏览器都完全支持(ie及FF需在web服务器里运行)，值得一提的是IE总是办好事，例如IE7、IE6中的`userData`其实就是`javascript`本地存储的解决方案。通过简单的代码封装可以统一到所有的浏览器都支持`web storage`

### cookie 和session 的区别：
     1、cookie数据存放在客户的浏览器上，session数据放在服务器上。
     2、cookie不是很安全，别人可以分析存放在本地的COOKIE并进行COOKIE欺骗
        考虑到安全应当使用session。
     3、session会在一定时间内保存在服务器上。当访问增多，会比较占用你服务器的性能
         考虑到减轻服务器性能方面，应当使用COOKIE。
     4、单个cookie保存的数据不能超过4K，很多浏览器都限制一个站点最多保存20个cookie。
     5、所以个人建议：
        将登陆信息等重要信息存放为SESSION
        其他信息如果需要保留，可以放在COOKIE中

### BFC规范
    BFC，块级格式化上下文，一个创建了新的BFC的盒子是独立布局的，盒子里面的子元素的样式不会影响到外面的元素。在同一个BFC中的两个毗邻的块级盒在垂直方向（和布局方向有关系）的margin会发生折叠。
    （W3C CSS 2.1 规范中的一个概念，它决定了元素如何对其内容进行布局，以及与其他元素的关系和相互作用。）


html部分
------
### 对语义化
    1，去掉或者丢失样式的时候能够让页面呈现出清晰的结构
    2，有利于SEO：和搜索引擎建立良好沟通，有助于爬虫抓取更多的有效信息：爬虫依赖于标签来确定上下文和各个关键字的权重；
    3，方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以意义的方式来渲染网页；
    4，便于团队开发和维护，语义化更具可读性，是下一步吧网页的重要动向，遵循W3C标准的团队都遵循这个标准，可以减少差异化。
    
### Doctype：严格模式与混杂模式 
    （1）、<!DOCTYPE> 声明位于文档中的最前面，处于 <html> 标签之前。告知浏览器以何种模式来渲染文档。 
    （2）、严格模式的排版和 JS 运作模式是  以该浏览器支持的最高标准运行。
    （3）、在混杂模式中，页面以宽松的向后兼容的方式显示。模拟老式浏览器的行为以防止站点无法工作。
    （4）、DOCTYPE不存在或格式不正确会导致文档以混杂模式呈现。   



### IE 8以下版本的浏览器中的盒模型有什么不同

    IE8以下浏览器的盒模型中定义的元素的宽高不包括内边距和边框

### DOM操作——怎样添加、移除、移动、复制、创建和查找节点。 

    （1）创建新节点
          createDocumentFragment()    //创建一个DOM片段
          createElement()   //创建一个具体的元素
          createTextNode()   //创建一个文本节点
    
    （2）添加、移除、替换、插入
          appendChild()
          removeChild()
          replaceChild()
          insertBefore() //在已有的子节点前插入一个新的子节点
    
    （3）查找
          getElementsByTagName()    //通过标签名称
          getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
          getElementById()    //通过元素Id，唯一性

## dom操作优化
* 批量增加时尽量使用修改innerHTML（销毁重新创建）的方式而不是用appendChild的方式，并且使用array.join(‘’)拼接；
* 单节点新增到正在变化的父节点时应使用append;
* 单个大节点创建后应先append后修改，不然内存会常驻
* 对节点读写分开，不要边读边写
* 删除节点应先移除事件监听

## iframe的优缺点
------------
    1.`<iframe>`优点：
        解决加载缓慢的第三方内容如图标和广告等的加载问题
        Security sandbox
        并行加载脚本
    
    2.`<iframe>`的缺点：
        *iframe会阻塞主页面的Onload事件
        *即时内容为空，加载也需要时间
        *没有语意 

## 如何实现浏览器内多个标签页之间的通信
-------------------
    调用localstorge、cookies等本地存储方式
    同域名可发布和订阅事件？


## 线程与进程的区别
--------
    一个程序至少有一个进程,一个进程至少有一个线程. 
    线程的划分尺度小于进程，使得多线程程序的并发性高。 
    另外，进程在执行过程中拥有独立的内存单元，而多个线程共享内存，从而极大地提高了程序的运行效率。 
    线程在执行过程中与进程还是有区别的。每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能够独立执行，必须依存在应用程序中，由应用程序提供多个线程执行控制。 
    从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看做多个独立的应用，来实现进程的调度和管理以及资源分配。这就是进程和线程的重要区别。


## 对网站的文件和资源进行优化
-----------------
    期待的解决方案包括：
     文件合并
     文件最小化/文件压缩
     使用 CDN 托管
     缓存的使用（多个域名来提供缓存）
     其他

## FOUC（无样式内容闪烁）
------------------------------

     FOUC - Flash Of Unstyled Content 文档样式闪烁
     <style type="text/css" media="all">@import "../fouc.css";</style> 
    而引用CSS文件的@import就是造成这个问题的罪魁祸首。IE会先加载整个HTML文档的DOM，然后再去导入外部的CSS文件，因此，在页面DOM加载完成到CSS导入完成中间会有一段时间页面上的内容是没有样式的，这段时间的长短跟网速，电脑速度都有关系。
     解决方法简单的出奇，只要在<head>之间加入一个<link>或者<script>元素就可以了。

## null和undefined
`null`是一个表示"无"的对象，转为数值时为0；`undefined`是一个表示"无"的原始值，转为数值时为`NaN`。  
  
当声明的变量还未被初始化时，变量的默认值为`undefined`。
`null`用来表示尚未存在的对象，常用来表示函数企图返回一个不存在的对象。 

`undefined`表示"缺少值"，就是此处应该有一个值，但是还没有定义。典型用法是：

    （1）变量被声明了，但没有赋值时，就等于undefined。

    （2) 调用函数时，应该提供的参数没有提供，该参数等于undefined。

    （3）对象没有赋值的属性，该属性的值为undefined。

    （4）函数没有返回值时，默认返回undefined。

`null`表示"没有对象"，即该处不应该有值。典型用法是：

    （1） 作为函数的参数，表示该函数的参数不是对象。

    （2） 作为对象原型链的终点。

## new操作符
--------------
       1、创建一个**空对象**，并且 this 变量引用该对象，同时还继承了该函数的原型。
       2、**属性和方法被加入到 this** 引用的对象中。
       3、新创建的对象由 this 所引用，并且最后隐式的**返回 this** 。
    var obj  = {};
    obj.__proto__ = Base.prototype;
    Base.call(obj); 


## js延迟加载
-------------
    defer和async、动态创建DOM方式（创建script，插入到DOM中，加载完毕后callBack）、按需异步载入js

documen.write和 innerHTML的区别
---------------------------
    document.write只能重绘整个页面
    innerHTML可以重绘页面的一部分

## 内存泄漏
------------
    内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
    垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。
    
    setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。
    闭包、控制台日志、循环（在两个对象彼此引用且彼此保留时，就会产生一个循环）

### 优雅降级和渐进增强

    优雅降级：Web站点在所有新式浏览器中都能正常工作，如果用户使用的是老式浏览器，则代码会检查以确认它们是否能正常工作。由于IE独特的盒模型布局问题，针对不同版本的IE的hack实践过优雅降级了,为那些无法支持功能的浏览器增加候选方案，使之在旧式浏览器上以某种形式降级体验却不至于完全失效.
    
    渐进增强：从被所有浏览器支持的基本功能开始，逐步地添加那些只有新式浏览器才支持的功能,向页面增加无害于基础浏览器的额外样式和功能的。当浏览器支持时，它们会自动地呈现出来并发挥作用。

## NaN 

NaN 属性代表一个“不是数字”的值。这个特殊的值是因为运算不能执行而导致的，不能执行的原因要么是因为其中的运算对象之一非数字（例如， "abc"/ 4），要么是因为运算的结果非数字（例如，除数为零）。

console.log(typeof NaN === "number");  // logs "true"

NaN 和任何东西比较——甚至是它自己本身！——结果是false：
console.log(NaN === NaN);  // logs "false"

一种半可靠的方法来测试一个数字是否等于 NaN，是使用内置函数 **isNaN()**，但即使使用 isNaN() 依然并非是一个完美的解决方案。

一个更好的解决办法是 **使用 value !== value**，如果值等于NaN，只会产生true。另外，ES6提供了一个新的 Number.isNaN() 函数，这是一个不同的函数，并且比老的全局 isNaN() 函数更可靠。

## 异步加载和延迟加载
---------
    1.异步加载的方案： 动态插入script标签
    2.通过ajax去获取js代码，然后通过eval执行
    3.script标签上添加defer或者async属性
    4.创建并插入iframe，让它异步执行js
    5.延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的。

## 前端安全
-------
### sql注入原理

就是通过把`SQL`命令插入到`Web`表单递交或输入域名或页面请求的查询字符串，最终达到欺骗服务器执行恶意的SQL命令。

总的来说有以下几点：
    1.永远不要信任用户的输入，要对用户的输入进行校验，可以通过正则表达式，或限制长度，对单引号和双"-"进行转换等。
    2.永远不要使用动态拼装SQL，可以使用参数化的SQL或者直接使用存储过程进行数据查询存取。
    3.永远不要使用管理员权限的数据库连接，为每个应用使用单独的权限有限的数据库连接。
    4.不要把机密信息明文存放，请加密或者hash掉密码和敏感的信息。

### XSS原理及防范
`Xss(cross-site scripting)`攻击指的是攻击者往Web页面里插入恶意`html`标签或者`javascript`代码。比如：攻击者在论坛中放一个
看似安全的链接，骗取用户点击后，窃取cookie中的用户私密信息；或者攻击者在论坛中加一个恶意表单，
当用户提交表单的时候，却把信息传送到攻击者的服务器中，而不是用户原本以为的信任站点。

### XSS防范方法
1.代码里对用户输入的地方和变量都需要仔细检查长度和对`”<”,”>”,”;”,”’”`等字符做过滤；其次任何内容写到页面之前都必须加以`encode`，避免不小心把`html tag` 弄出来。这一个层面做好，至少可以堵住超过一半的`XSS` 攻击。
<br/>
2.避免直接在`cookie` 中泄露用户隐私，例如`email`、密码等等。
3.通过使cookie 和系统ip 绑定来降低`cookie` 泄露后的危险。这样攻击者得到的cookie 没有实际价值，不可能拿来重放。
<br/>
4.尽量采用POST 而非GET 提交表单

### XSS与CSRF有什么区别吗？

`XSS`是获取信息，不需要提前知道其他用户页面的代码和数据包。`CSRF`是代替用户完成指定的动作，需要知道其他用户页面的代码和数据包。

要完成一次CSRF攻击，受害者必须依次完成两个步骤：

　　1.登录受信任网站A，并在本地生成Cookie。
　　2.在不登出A的情况下，访问危险网站B。

### CSRF的防御

1.服务端的CSRF方式方法很多样，但总的思想都是一致的，就是在客户端页面增加伪随机数。
2.使用验证码

ie各版本和chrome可以并行下载多少个资源
-----------------------
    IE6 两个并发，iE7升级之后的6个并发，之后版本也是6个
    Firefox，chrome也是6个

grunt， YUI compressor 和 google clojure用来进行代码压缩的用法。
--------------------------------------------------
    YUI Compressor 是一个用来压缩 JS 和 CSS 文件的工具，采用Java开发。
    使用方法：
    //压缩JS
    java -jar yuicompressor-2.4.2.jar --type js --charset utf-8 -v src.js > packed.js
    //压缩CSS
    java -jar yuicompressor-2.4.2.jar --type css --charset utf-8 -v src.css > packed.css


请解释一下 JavaScript 的同源策略。
-----------------------
概念:同源策略是客户端脚本（尤其是`Javascript`）的重要的安全度量标准。它最早出自`Netscape Navigator2.0`，其目的是防止某个文档或脚本从多个不同源装载。

这里的同源策略指的是：协议，域名，端口相同，同源策略是一种安全协议。
指一段脚本只能读取来自同一来源的窗口和文档的属性。

### 同源限制
   我们举例说明：比如一个黑客程序，他利用`Iframe`把真正的银行登录页面嵌到他的页面上，当你使用真实的用户名，密码登录时，他的页面就可以通过`Javascript`读取到你的表单中`input`中的内容，这样用户名，密码就轻松到手了。


"use strict"
-----------------------------------
`ECMAscript 5`添加了第二种运行模式："严格模式"（strict mode）。顾名思义，这种模式使得`Javascript`在更严格的条件下运行。

设立"严格模式"的目的，主要有以下几个：
    - 消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;
    - 消除代码运行的一些不安全之处，保证代码运行的安全；
    - 提高编译器效率，增加运行速度；
    - 为未来新版本的Javascript做好铺垫。
    - 
注：经过测试`IE6,7,8,9`均不支持严格模式。

缺点：
现在网站的`JS` 都会进行压缩，一些文件用了严格模式，而另一些没有。这时这些本来是严格模式的文件，被 `merge` 后，这个串就到了文件的中间，不仅没有指示严格模式，反而在压缩后浪费了字节。
-----------------------------------

**js的阻塞特性：**所有浏览器在下载`JS`的时候，会阻止一切其他活动，比如其他资源的下载，内容的呈现等等。直到`JS`下载、解析、执行完毕后才开始继续`并行下载`其他资源并呈现内容。为了提高用户体验，新一代浏览器都支持并行下载`JS`，但是`JS`下载仍然会阻塞其它资源的下载（例如.图片，css文件等）。

由于浏览器为了防止出现`JS`修改`DOM`树，需要重新构建`DOM`树的情况，所以就会阻塞其他的下载和呈现。
嵌入`JS`会阻塞所有内容的呈现，而外部`JS`只会阻塞其后内容的显示，2种方式都会阻塞其后资源的下载。也就是说外部样式不会阻塞外部脚本的加载，但会阻塞外部脚本的执行。

`CSS`怎么会阻塞加载了？`CSS`本来是可以并行下载的，在什么情况下会出现阻塞加载了(在测试观察中，`IE6`下`CSS`都是阻塞加载）

当`CSS`后面跟着嵌入的`JS`的时候，该`CSS`就会出现阻塞后面资源下载的情况。而当把嵌入`JS`放到`CSS`前面，就不会出现阻塞的情况了。

 根本原因：因为浏览器会维持`html`中`css`和`js`的顺序，样式表必须在嵌入的JS执行前先加载、解析完。而嵌入的`JS`会阻塞后面的资源加载，所以就会出现上面`CSS`阻塞下载的情况。

## 嵌入`JS`应该放入位置

       1、放在底部，虽然放在底部照样会阻塞所有呈现，但不会阻塞资源下载。
       
       2、如果嵌入JS放在head中，请把嵌入JS放在CSS头部。
       
       3、使用defer（只支持IE）
       
       4、不要在嵌入的JS中调用运行时间较长的函数，如果一定要用，可以用`setTimeout`来调用

### Javascript无阻塞加载具体方式
 - **将脚本放在底部。**`<link>`还是放在`head`中，用以保证在`js`加载前，能加载出正常显示的页面。`<script>`标签放在`</body>`前。
 - **成组脚本**：由于每个`<script>`标签下载时阻塞页面解析过程，所以限制页面的`<script>`总数也可以改善性能。适用于内联脚本和外部脚本。

 - **非阻塞脚本**：等页面完成加载后，再加载`js`代码。也就是，在`window.onload`事件发出后开始下载代码。
    （1）`defer`属性：支持IE4和`fierfox3.5`更高版本浏览器
    （2）动态脚本元素：文档对象模型（DOM）允许你使用js动态创建`HTML`的几乎全部文档内容。代码如下：
```TypeScript
    <script>
    var script=document.createElement("script");
    script.type="text/javascript";
    script.src="file.js";
    document.getElementsByTagName("head")[0].appendChild(script);
    </script>
```
 此技术的重点在于：无论在何处启动下载，文件额下载和运行都不会阻塞其他页面处理过程。即使在head里（除了用于下载文件的http链接）。   
 

## 事件、IE与火狐的事件机制与冒泡
---

     1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。  
     2. 事件处理机制：IE是事件冒泡、firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件。；
     3.  ev.stopPropagation();注意旧ie的方法 ev.cancelBubble = true;

## js对象的深度克隆
```TypeScript
      function clone(Obj) {   
            var buf;   
            if (Obj instanceof Array) {   
                buf = [];  //创建一个空的数组 
                var i = Obj.length;   
                while (i--) {   
                    buf[i] = clone(Obj[i]);   
                }   
                return buf;   
            }else if (Obj instanceof Object){   
                buf = {};  //创建一个空对象 
                for (var k in Obj) {  //为这个对象添加新的属性 
                    buf[k] = clone(Obj[k]);   
                }   
                return buf;   
            }else{   
                return Obj;   
            }   
        }  
```

## 浏览器信息UA
```TypeScript
    <script> 
        function whatBrowser() {  
            document.Browser.Name.value=navigator.appName;  
            document.Browser.Version.value=navigator.appVersion;  
            document.Browser.Code.value=navigator.appCodeName;  
            document.Browser.Agent.value=navigator.userAgent;  
        }  
    </script>
```
js数组去重
------
以下是数组去重的三种方法：
```TypeScript
    // 最简单的
    new Set([1,2,2,3]);
    // 其他：
    Array.prototype.unique1 = function () {
      var n = []; //一个新的临时数组
      for (var i = 0; i < this.length; i++) //遍历当前数组
      {
        //如果当前数组的第i已经保存进了临时数组，那么跳过，
        //否则把当前项push到临时数组里面
        if (n.indexOf(this[i]) == -1) n.push(this[i]);
      }
      return n;
    }
    
    Array.prototype.unique2 = function()
    {
    	var n = {},r=[]; //n为hash表，r为临时数组
    	for(var i = 0; i < this.length; i++) //遍历当前数组
    	{
    		if (!n[this[i]]) //如果hash表中没有当前项
    		{
    			n[this[i]] = true; //存入hash表
    			r.push(this[i]); //把当前数组的当前项push到临时数组里面
    		}
    	}
    	return r;
    }
    
    Array.prototype.unique3 = function()
    {
    	var n = [this[0]]; //结果数组
    	for(var i = 1; i < this.length; i++) //从第二项开始遍历
    	{
    		//如果当前数组的第i项在当前数组中第一次出现的位置不是i，
    		//那么表示第i项是重复的，忽略掉。否则存入结果数组
    		if (this.indexOf(this[i]) == i) n.push(this[i]);
    	}
    	return n;
    }
```
## js操作获取和设置cookie
---------------
```TypeScript
    //创建cookie
    function setCookie(name, value, expires, path, domain, secure) {
    	var cookieText = encodeURIComponent(name) + '=' + encodeURIComponent(value);
    	if (expires instanceof Date) {
    		cookieText += '; expires=' + expires;
    	}
    	if (path) {
    		cookieText += '; path=' + path;
    	}
    	if (domain) {
    		cookieText += '; domain=' + domain;
    	}
    	if (secure) {
    		cookieText += '; secure';
    	}
    	document.cookie = cookieText;
    }
    
    //获取cookie
    function getCookie(name) {
    	var cookieName = encodeURIComponent(name) + '=';
    	var cookieStart = document.cookie.indexOf(cookieName);
    	var cookieValue = null;
    	if (cookieStart > -1) {
    		var cookieEnd = document.cookie.indexOf(';', cookieStart);
    		if (cookieEnd == -1) {
    			cookieEnd = document.cookie.length;
    		}
    		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
    	}
    	return cookieValue;
    }
    
    //删除cookie
    function unsetCookie(name) {
    	document.cookie = name + "= ; expires=" + new Date(0);
    }
```
 
### TCP传输的三次握手策略

	为了准确无误地把数据送达目标处，TCP协议采用了三次握手策略。用TCP协议把数据包送出去后，TCP不会对传送  后的情况置之不理，它一定会向对方确认是否成功送达。握手过程中使用了TCP的标志：SYN和ACK。
	发送端首先发送一个带SYN标志的数据包给对方。接收端收到后，回传一个带有SYN/ACK标志的数据包以示传达确认信息。最后，发送端再回传一个带ACK标志的数据包，代表“握手”结束
	若在握手过程中某个阶段莫名中断，TCP协议会再次以相同的顺序发送相同的数据包。

### Promise
依照 `Promise/A+` 的定义，`Promise` 有四种状态：
	pending: 初始状态, 非 fulfilled 或 rejected.
	fulfilled: 成功的操作.
	rejected: 失败的操作.
	settled: Promise已被fulfilled或rejected，且不是pending

另外， `fulfilled` 与 `rejected` 一起合称 `settled`。
`Promise` 对象用来进行延迟(deferred) 和异步(asynchronous ) 计算。
>Promise 的构造函数

构造一个 `Promise`，最基本的用法如下：
```TypeScript
	var promise = new Promise(function(resolve, reject) {
	    if (...) {  // succeed
	        resolve(result);
	    } else {   // fails
	        reject(Error(errMessage));
	    }
	});
```
`Promise` 实例拥有 `then` 方法（具有 `then` 方法的对象，通常被称为 `thenable`）。它的使用方法如下：

	promise.then(onFulfilled, onRejected)

接收两个函数作为参数，一个在 `fulfilled` 的时候被调用，一个在 `rejected` 的时候被调用，接收参数就是 `future，onFulfilled` 对应 `resolve`, `onRejected` 对应 `reject`。


## Javascript垃圾回收方法
### 回收对象
    1. 对象不再被引用
    2. 对象无法在根上被访问到
### 标记清除（mark and sweep）
这是`JavaScript`最常见的垃圾回收方式，当变量进入执行环境的时候，比如函数中声明一个变量，垃圾回收器将其标记为“进入环境”，当变量离开环境的时候（函数执行结束）将其标记为“离开环境”。
垃圾回收器会在运行的时候给存储在内存中的所有变量加上标记，然后去掉环境中的变量以及被环境中变量所引用的变量（闭包），在这些完成之后仍存在标记的就是要删除的变量了

### 引用计数(reference counting)
使用一张引用表记录引用次数，为0清除
在`低版本IE`中经常会出现内存泄露，很多时候就是因为其采用引用计数方式进行垃圾回收。引用计数的策略是跟踪记录每个值被使用的次数，当声明了一个 变量并将一个引用类型赋值给该变量的时候这个值的引用次数就加1，如果该变量的值变成了另外一个，则这个值得引用次数减1，当这个值的引用次数变为0的时 候，说明没有变量在使用，这个值没法被访问了，因此可以将其占用的空间回收，这样垃圾回收器会在运行的时候清理掉引用次数为0的值占用的空间。

在IE中虽然`JavaScript`对象通过标记清除的方式进行垃圾回收，但 `BOM与DOM对象却是通过引用计数回收垃圾的` ，也就是说只要涉及BOM及DOM就会出现循环引用问题。

### 移动端性能优化

>尽量使用`css3`动画，开启硬件加速。适当使用`touch`事件代替`click`事件。避免使用`css3`渐变阴影效果。
>尽可能少的使用`box-shadow`与`gradients`。`box-shadow`与`gradients`往往都是页面的性能杀手

## Etag

浏览器下载组件的时候，会将它们存储到浏览器缓存中。如果需要再次获取相同的组件，浏览器将检查组件的缓存时间，
假如已经过期，那么浏览器将发送一个条件GET请求到服务器，服务器判断缓存还有效，则发送一个304响应，
告诉浏览器可以重用缓存组件。

那么服务器是根据什么判断缓存是否还有效呢?答案有两种方式，一种是前面提到的ETag，另一种是根据`Last-Modified`

### Expires和Cache-Control

`Expires`要求客户端和服务端的时钟严格同步。HTTP1.1引入`Cache-Control`来克服Expires头的限制。如果max-age和Expires同时出现，则max-age有更高的优先级。

    Cache-Control: no-cache, private, max-age=0
    ETag: abcde
    Expires: Thu, 15 Apr 2014 20:00:00 GMT
    Pragma: private
    Last-Modified: $now // RFC1123 format

### 栈和队列的区别

    栈的插入和删除操作都是在一端进行的，而队列的操作却是在两端进行的。
    队列先进先出，栈先进后出。
    栈只允许在表尾一端进行插入和删除，而队列只允许在表尾一端进行插入，在表头一端进行删除 

### 栈和堆的区别？

    栈区（stack）—   由编译器自动分配释放   ，存放函数的参数值，局部变量的值等。
    堆区（heap）   —   一般由程序员分配释放，   若程序员不释放，程序结束时可能由OS回收。
    堆（数据结构）：堆可以被看成是一棵树，如：堆排序；
    栈（数据结构）：一种先进后出的数据结构。 

### 关于Http 2.0

`HTTP/2`引入了“服务端推（serverpush）”的概念，它允许服务端在客户端需要数据之前就主动地将数据发送到客户端缓存中，从而提高性能。
`HTTP/2`提供更多的加密支持
`HTTP/2`使用多路技术，允许多个消息在一个连接上同时交差。 
它增加了头压缩（header compression），因此即使非常小的请求，其请求和响应的`header`都只会占用很小比例的带宽。

### Cookie与Session
如果`session id`保存在cookie中，则禁用cookie后session将无法正常使用。

原因如下：当程序需要为某个客户端的请求创建一个session时，服务器首先检查这个客户端的请求里是否已包含了一个session标识（称为`session id`），如果已包含则说明以前已经为此客户端创建过session，服务器就按照`session id`把这个session检索出来使用（检索不到，会新建一个），如果客户端请求不包含`session id`，则为此客户端创建一个session并且生成一个与此session相关联的`session id`，
>`session id`的值应该是一个既不会重复，又不容易被找到规律以仿造的字符串，这个`session id`将被在本次响应中返回给客户端保存。

**保存这个`session id`最常见的方法就是直接放在cookie中**，这样在交互过程中浏览器可以自动的按照规则把这个标识发送给服务器。但是，一旦浏览器禁用了cookie，session同时也会无法使用。解决方法有两种：
1. 使用URL重写，将`session id`附在URL中
2. 使用隐藏表单字段,将`session id`放在隐藏的表单字段中一同提交

###  JavaScript类型判断
```TypeScript
typeof(obj) === "string"
typeof obj === "string"

obj.constructor === String

(<String>obj).split !== undefined;

obj instanceof String
const typeStr = Object.prototype.toString.call(obj);
if (typeStr === '[object Array]') {
    //  ...
}

Array.isArray(obj)
// 判断变量的类型
function getType(obj){
	var str = Object.prototype.toString.call(obj);
	var map={
		'[object Boolean]'  : 'boolean', 
		'[object Number]'   : 'number', 
		'[object String]'   : 'string', 
		'[object Function]' : 'function', 
		'[object Array]'    : 'array', 
		'[object Date]'     : 'date', 
		'[object RegExp]'   : 'regExp', 
		'[object Undefined]': 'undefined',
		'[object Null]'     : 'null', 
		'[object Object]'   : 'object'
	}
	if(obj instanceof Element){ //判断是否是dom元素，如div等
		return "element";
	}
	return map[str];
}
```
> 原型toString出来的第一个字母都是小写，typeof也一样
### 请用js去除字符串空格？

* 使用replace[正则表达式](http://www.runoob.com/js/js-regexp.html)的方法
去除所有空格: str = str.replace(/\s*/g,"");      
去除两头空格: str = str.replace(/^\s*|\s*$/g,"");
去除左空格： str = str.replace( /^\s*/, " "); str = str.replace(" ", " ");
去除右空格： str = str.replace(/(\s*$)/g, "");
str为要去除空格的字符串，实例如下：

```TypeScript
var str = " 23 23 "; var str2 = str.replace(/\s*/g,"");
console.log(str2); // 2323
```

* 使用str.trim()可返回去除头尾空格的字符串，不改变原数组

str.trim()无法去除中间的空格需同时使用str.trimLeft()，str.trimRight()。

* 使用jquery,$.trim(str)，同上不改变原数组

$.trim(str)也无法去除中间的空格

### 获取浏览器URL中的参数

#### 原生js：
```TypeScript
function showWindowHref(){ 
var sHref = window.location.href;
var args = sHref.split('?'); 
if(args[0] == sHref){ 
  return "";
    }
var arr = args[1].split('&'); 
var obj = {}; 
for(var i = 0;i< arr.length;i++){
 var arg = arr[i].split('=');
        obj[arg[0]] = arg[1];
    } return obj;
} 
var href = showWindowHref(); // obj
console.log(href['name']); // xiaoming
```
#### react-route:
```TypeScript
  const { id } = this.props.match.params;
```
#### angular1:
```TypeScript
app.controller('paidOrderListCtrl',
    function ($scope, $state, $stateParams) {
  $scope.id = $stateParams.id;
  }
```
#### angularX:
```TypeScript
  /**
   * 生命周期钩子
   * 在第一轮 ngOnChanges 完成之后调用。
   * ( 译注：也就是说当每个输入属性的值都被触发了一次 ngOnChanges 之后才会调用 ngOnInit ，
   * 此时所有输入属性都已经有了正确的初始绑定值 )
   * 获取params参数
   */
  ngOnInit() {
    let self = this;  //  避免this混乱，也可使用箭头函数
    this.activatedRoute.params.subscribe(
      params => {
        console.dir('ngOnInit activatedRoute', params);
        self.params = params || {};
    });
}
```

### DOM原生操作：添加、移除、移动、复制、创建和查找节点

 1）创建新节点
　　document.createDocumentFragment() //创建一个DOM片段
　　document.createElement() //创建一个具体的元素
　　document.createTextNode() //创建一个文本节点

2）添加、移除、替换、插入
       document.getElementById("testDiv").appendChild() //添加
　　document.getElementById("testDiv").removeChild() //移除
　　document.getElementById("testDiv").replaceChild() //替换
　　document.getElementById("testDiv").insertBefore() //插入

3）查找
　　getElementById("testDiv").getElementsByTagName() //通过标签名称
　　getElementById("testDiv").getElementsByName() //通过元素的Name属性的值
　　getElementById("testDiv").getElementById() //通过元素Id，唯一性
### DOM的JQuery操作：添加、移除、移动、复制、创建和查找节点
>http://www.runoob.com/jquery/jquery-dom-get.html
### 写出3个使用this的典型应用

1. 在html元素事件属性中使用，如：
```TypeScript
<input type=”button” onclick=”showInfo(this);” value=”点击一下”/>
```

2. 构造函数

```TypeScript
function Animal(name, color) {
　　this.name = name;
　　this.color = color;
}
```
3. input点击，获取值
```TypeScript
<input type="button" id="text" value="点击一下" />
<script type="text/javascript">
    var btn = document.getElementById("text");
    btn.onclick = function() {
        alert(this.value);    //此处的this是按钮元素
    }
</script>
```

4. apply()/call()求数组最值
```TypeScript
var  numbers = [5, 458 , 120 , -215 ]; 
var  maxInNumbers = Math.max.apply(this, numbers);  
console.log(maxInNumbers); // 458
var maxInNumbers = Math.max.call(this,5, 458 , 120 , -215); 
console.log(maxInNumbers); // 458
```
5. 使用箭头函数传递调用者的this

### **比较typeof与instanceof？**
相同点：JavaScript 中 typeof 和 instanceof 常用来判断一个变量是否为空，或者是什么类型的。
typeof的定义和用法：返回值是一个字符串，用来说明变量的数据类型。
细节：
1. typeof 一般只能返回如下几个结果：number,boolean,string,object,**undefined,function**。
2. typeof 来获取一个变量是否存在，如 if(typeof a!="undefined"){alert("ok")}，而不要去使用 if(a) 因为如果 a 未声明（null不会报错）则会出错。
3. 对于 Array,Null 等特殊对象使用 typeof 一律返回 object
Instanceof定义和用法：instanceof 用于判断一个变量是否属于某个对象的实例。
实例演示：
```
a instanceof b?alert("true"):alert("false"); //a是b的实例？真:假
var a = new Array(); 
alert(a instanceof Array);  // true
alert(a instanceof Object)  // true  子类也可判断
```
如上，会返回 true，同时 alert(a instanceof Object) 也会返回 true;这是因为 Array 是 object 的子类。
```
function test(){}; var a = new test();
alert(a instanceof test)   // true
```
细节：
1. 如下，得到的结果为‘N’,这里的 instanceof 测试的 object 是指 js 语法中的 object，不是指 dom 模型对象。
```
if (window instanceof Object){ alert('Y')} else {  alert('N');}  // 'N'
```
>https://www.jb51.net/article/106804.htm

###  如何理解闭包？
#### 定义和用法：当一个函数的返回值是另外一个函数，而返回的那个函数如果调用了其父函数内部的其它变量，如果返回的这个函数在外部被执行，就产生了闭包。
#### 表现形式：使函数外部能够调用函数内部定义的变量。
#### 实例如下：
(1)、根据作用域链的规则，底层作用域没有声明的变量，会向上一级找，找到就返回，没找到就一直找，直到window的变量，没有就返回undefined。这里明显count 是函数内部的flag2 的那个count 。
```TypeScript
var count=10;   //全局作用域 标记为flag1
function add(){ 
  var count=0;    //函数全局作用域 标记为flag2
  return function(){
        count+=1;   //函数的内部作用域
         alert(count);
    }
} 
var s = add()
s();//输出1
s();//输出2
```
```TypeScript
//  自调用闭包
(function(name){  
    alert('Hello ' + name);  
 })('world'); 
```
#### 变量的作用域
* 函数内部可以读取函数外部的全局变量；在函数外部无法读取函数内的局部变量。

* 函数内部声明变量的时候，一定要使用var命令。如果不用的话，你实际上声明了一个全局变量！
eg:
```TypeScript
 function test() {
     var a = b = 1; //  a是局部，b是全局，可改为 var a = 1, b = 1;
 }
```

* 使用闭包的注意点

1）滥用闭包，会造成内存泄漏：由于闭包会使得函数中的变量都被保存在内存中，内存消耗很大，所以不能滥用闭包，否则会造成网页的性能问题，在IE中可能导致内存泄露。解决方法是，在退出函数之前，将不使用的局部变量全部删除。

2）会改变父函数内部变量的值。所以，如果你把父函数当作对象（object）使用，把闭包当作它的公用方法（Public Method），把内部变量当作它的私有属性（private value），这时一定要小心，不要随便改变父函数内部变量的值。

###  什么是跨域？跨域请求资源的方法有哪些？

#### 1、什么是跨域？

发送请求的url协议、域名、端口三者之间任意一与当前页面地址不同即为跨域
*   网络协议不同，如http协议访问https协议。
*   端口不同，如80端口访问8080端口。
*   域名不同，如qianduanblog.com访问baidu.com。
*   子域名不同，如abc.qianduanblog.com访问def.qianduanblog.com。
*   域名和域名对应ip,如www.a.com访问20.205.28.90.
#### 2、跨域请求资源的方法：
* porxy代理
定义和用法：proxy代理用于将请求发送给后台服务器，通过服务器来发送请求，然后将请求的结果传递给前端。
实现方法：通过nginx代理；
注意点：1、如果你代理的是https协议的请求，那么你的proxy首先需要信任该证书（尤其是自定义证书）或者忽略证书检查，否则你的请求无法成功。
* CORS 【Cross-Origin Resource Sharing】**
定义和用法：是现代浏览器支持跨域资源请求的一种最常用的方式。
使用方法：一般需要后端人员在处理请求数据的时候，添加允许跨域的相关操作。如下：
```Java
res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8", "Access-Control-Allow-Origin":'http://localhost', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type' });
```
* jsonp
定义和用法：通过动态插入一个script标签。浏览器对script的资源引用没有同源限制，同时资源加载到页面后会立即执行（没有阻塞的情况下）。
特点：通过情况下，通过动态创建script来读取他域的动态资源，获取的数据一般为json格式。
实例如下：
```TypeScript
<script> 
function testjsonp(data) {
       console.log(data.name); // 获取返回的结果
 } 
</script>
<script>
    var _script = document.createElement('script');
    _script.type = "text/javascript";
    _script.src = "http://localhost:8888/jsonp?callback=testjsonp";
    document.head.appendChild(_script); 
</script>
```
缺点：
　　1、这种方式**无法发送post请求**
　　2、另外要确定jsonp的请求是否失败并不容易，大多数框架的实现都是结合超时时间来判定。
* 雅虎提供的跨域查询

* window.domain
  只能赋成当前的域名或者基础域名。
eg:
```javascript
//  当前域名：xxx.com
alert(document.domain = "xxx.com"); //xxx.com
alert(document.domain = "www.xxx.com");//www.xxx.com
```
* window.name
window对象有一个name属性，该属性有一个特征：即在一个窗口（同一tab）的生命周期内，窗口载入的所有的域名都是共享一个window.name的，每一个页面对window.name都有读写的权限，window.name是持久的存在于一个窗口载入的所有页面中的，并不会因为新的页面的载入而被重置。

#### YQL查询
yql服务, 可以把https://openapi.baidu.com/api的内容再次封装, 还可以把接口返回的内容, 再次使用sql语句查询, 然后再通过yql服务返回最终结果

### 垃圾回收机制(GC:Garbage Collection)方式及内存管理
#### 回收机制方式

1、定义和用法：垃圾回收机制(GC:Garbage Collection),执行环境负责管理代码执行过程中使用的内存。

3、实例如下：
```
function fn1() { 
  var obj = {name: 'hanzichi', age: 10};
}
function fn2() { 
  var obj = {name:'hanzichi', age: 10}; return obj;
} 
var a = fn1(); 
var b = fn2();
```

fn1中定义的obj为局部变量，而当调用结束后，出了fn1的环境，那么该块内存会被js引擎中的垃圾回收器自动释放；在fn2被调用的过程中，返回的对象被全局变量b所指向，所以该块内存并不会被释放。

 4、垃圾回收策略：标记清除(较为常用)和引用计数。

**标记清除：**

　　定义和用法：当变量进入环境时，将变量标记"进入环境"，当变量离开环境时，标记为："离开环境"。某一个时刻，垃圾回收器会过滤掉环境中的变量，以及被环境变量引用的变量，剩下的就是被视为准备回收的变量。

　　到目前为止，IE、Firefox、Opera、Chrome、Safari的js实现使用的都是标记清除的垃圾回收策略或类似的策略，只不过**垃圾收集的时间间隔互不相同**。

**引用计数：**

　　定义和用法：引用计数是跟踪记录每个值被引用的次数。

　　基本原理：就是变量的引用次数，被引用一次则加1，当这个引用计数为0时，被视为准备回收的对象。

####  内存管理

1、什么时候触发垃圾回收？

垃圾回收器周期性运行，如果分配的内存非常多，那么回收工作也会很艰巨，确定垃圾回收时间间隔就变成了一个值得思考的问题。

IE6的垃圾回收是根据内存分配量运行的，当环境中的变量，对象，字符串达到一定数量时触发垃圾回收。垃圾回收器一直处于工作状态，严重影响浏览器性能。

IE7中，垃圾回收器会根据内存分配量与程序占用内存的比例进行动态调整，开始回收工作。

2、合理的GC方案：(1)、遍历所有可访问的对象; (2)、回收已不可访问的对象。

3、GC缺陷：(1)、停止响应其他操作；

4、GC优化策略：(1)、分代回收（Generation GC）;(2)、增量GC

### 内存泄露？

1、定义和用法：

内存泄露是指一块被分配的内存既不能使用，又不能回收，直到浏览器进程结束。C#和Java等语言采用了自动垃圾回收方法管理内存，几乎不会发生内存泄露。我们知道，浏览器中也是采用自动垃圾回收方法管理内存，但由于浏览器垃圾回收方法有bug，会产生内存泄露。

2、内存泄露的几种情况:

* 当页面中元素被移除或替换时，若**元素绑定的事件**仍没被移除，在IE中不会作出恰当处理。

实例如下:
```TypeScript
<div id="myDiv">
    <input type="button" value="Click me" id="myBtn">
</div>
<script type="text/javascript">
    var btn = document.getElementById("myBtn");
    btn.onclick = function(){
        btn.onclick = null;  //  没用前删除事件
        document.getElementById("myDiv").innerHTML = "Processing...";
    } 
</script>
```
* 闭包可以维持函数内局部变量，使其得不到释放。
实例如下：
```TypeScript
function bindEvent(){ 
  var obj=document.createElement("XXX");
   obj.onclick=function(){ 
      //Even if it's a empty function
   }
    obj=null;
}
```

* 死循环创建大量数据
###  javascript面向对象中继承实现？

面向对象的基本特征有：封闭、继承、多态。

在JavaScript中实现继承的方法：

1\. 原型链（prototype chaining）

2\. call()/apply()

3\. 混合方式(prototype和call()/apply()结合)

4\. 对象冒充

继承的方法如下：

1、prototype原型链方式：
```TypeScript
function teacher(name){    
  this.name = name;
}
teacher.prototype.sayName = function(){    
  console.log("name is "+this.name);
}
var teacher1 = new teacher("xiaoming");
teacher1.sayName();
function student(name){    
    this.name = name;
}
student.prototype = new teacher();
var student1 = new student("xiaolan");
student1.sayName();//  name is xiaoming//  name is xiaolan
```

2、call()/apply()方法
```TypeScript
function teacher(name,age){

this.name = name;

this.age = age;

this.sayhi = function(){

alert('name:'+name+", age:"+age);

}

}

function student(){

var args = arguments;

teacher.call(this,args[0],args[1]);

// teacher.apply(this,arguments);

}

var teacher1 = new teacher('xiaoming',23);

teacher1.sayhi();

var student1 = new student('xiaolan',12);

student1.sayhi();

// alert: name:xiaoming, age:23

// alert: name:xiaolan, age:12
```
3、混合方法【prototype,call/apply】
```TypeScript
function teacher(name,age){
  this.name = name;
  this.age = age;
}
teacher.prototype.sayName = function(){
  console.log('name:'+this.name);
}
teacher.prototype.sayAge = function(){
  console.log('age:'+this.age);
}
function student(){
  var args = arguments;
  teacher.call(this,args[0],args[1]);
}

student.prototype = new teacher();

var student1 = new student('xiaolin',23);

student1.sayName();

student1.sayAge();

// name:xiaolin

// age:23
```
4、对象冒充
```TypeScript
function Person(name,age){

this.name = name;

this.age = age;

this.show = function(){

console.log(this.name+", "+this.age);

}

}

function Student(name,age){

this.student = Person; //将Person类的构造函数赋值给this.student

this.student(name,age); //js中实际上是通过对象冒充来实现继承的

delete this.student; //移除对Person的引用

}

var s = new Student("小明",17);

s.show();

var p = new Person("小花",18);

p.show();

// 小明, 17

// 小花, 18
```

##  jquery相关

### 1、 jQuery 库中的 $() 是什么？

　　$() 函数是 jQuery() 函数的别称。$() 函数用于将任何对象包裹成 jQuery 对象，接着你就被允许调用定义在 jQuery 对象上的多个不同方法。你可以将一个选择器字符串传入 $() 函数，它会返回一个包含所有匹配的 DOM 元素数组的 jQuery 对象。

### 2、如何找到所有 HTML select 标签的选中项？

<pre style="box-sizing: border-box; outline: 0px; padding: 8px; margin: 0px 0px 24px; position: relative; white-space: pre-wrap; overflow-wrap: break-word; overflow-x: auto; font-family: &quot;Courier New&quot;; font-size: 12px; line-height: 22px; color: rgb(0, 0, 0); word-break: break-all;">$('[name=selectname] :selected')</pre>

### 3、$(this) 和 this 关键字在 jQuery 中有何不同？
$(this) 返回一个 jQuery 对象，你可以对它调用多个 jQuery 方法，比如用 text() 获取文本，用val() 获取值等等。
而 this 代表当前元素，它是 JavaScript 关键词中的一个，表示上下文中的当前 DOM 元素。你不能对它调用 jQuery 方法，直到它被 $() 函数包裹，例如 $(this)。

### 4、jquery怎么移除标签onclick
获得a标签的onclick属性: $("a").attr("onclick")

删除onclick属性：$("a").removeAttr("onclick");

设置onclick属性：$("a").attr("onclick","test();");

### 5、jquery中addClass,removeClass,toggleClass的使用。
$(selector).addClass(class)：为每个匹配的元素添加指定的类名

$(selector).removeClass(class)：从所有匹配的元素中删除全部或者指定的类，删除class中某个值；

$(selector).toggleClass(class)：如果存在（不存在）就删除（添加）一个类

$(selector).removeAttr(class);删除class这个属性；

### 6、JQuery选择器

(1)、基本选择器：#id，class,element,*;

(2)、层次选择器：parent > child，prev + next ，prev ~ siblings

(3)、基本[过滤器](http://zhidao.baidu.com/search?word=%E8%BF%87%E6%BB%A4%E5%99%A8&fr=qb_search_exp&ie=utf8)选择器：:first，:last ，:not ，:even ，:odd ，:eq ，:gt ，:lt

(4)、内容[过滤器](http://zhidao.baidu.com/search?word=%E8%BF%87%E6%BB%A4%E5%99%A8&fr=qb_search_exp&ie=utf8)选择器： :contains ，:empty ，:has ，:parent

(5)、可见性[过滤器](http://zhidao.baidu.com/search?word=%E8%BF%87%E6%BB%A4%E5%99%A8&fr=qb_search_exp&ie=utf8)选择器：:hidden ，:visible

(6)、属性过滤器选择器：[attribute] ，[attribute=value] ，[attribute!=value] ，[attribute^=value] ，[attribute$=value] ，[attribute*=value]

(7)、子元素过滤器选择器：:nth-child ，:first-child ，:last-child ，:only-child
(8)、表单选择器： :input ，:text ，:password ，:radio ，:checkbox ，:submit 等；
(9)、表单过滤器选择器：:enabled ，:disabled ，:checked ，:selected

### 7、jQuery中的Delegate()
delegate()会在以下两个情况下使用到：
 1、如果你有一个父元素，需要给其下的子元素添加事件，这时你可以使用delegate()了，代码如下：
```TypeScript
$("ul").delegate("li", "click", function(){ $(this).hide(); });
```
 2、当元素在当前页面中不可用时，可以使用delegate()

### 8、$(document).ready()方法和window.onload有什么区别？
 (1)、window.onload方法是在网页中所有的元素(包括元素的所有关联文件)完全加载到浏览器后才执行的。
 (2)、$(document).ready() 方法可以在DOM载入就绪时就对其进行操纵，并调用执行绑定的函数。

### 9、如何用jQuery禁用浏览器的前进后退按钮？
实现代码如下：
```TypeScript
<script type="text/javascript" language="javascript"> $(document).ready(function() {
　　　　window.history.forward(1);
  　　　　//OR window.history.forward(-1);
}); </script>
```
### 10、 jquery中$.get()提交和$.post()提交有区别吗？
相同点：都是异步请求的方式来获取服务端的数据；

异同点：
1、请求方式不同：$.get() 方法使用GET方法来进行异步请求的。$.post() 方法使用POST方法来进行异步请求的。
2、参数传递方式不同：get请求会将参数跟在URL后进行传递，而POST请求则是作为HTTP消息的实体内容发送给Web服务器的，这种传递是对用户不可见的。
3、数据传输大小不同：get方式传输的数据大小不能超过2KB 而POST要大的多
4、安全问题： GET 方式请求的数据会被浏览器缓存起来，因此有安全问题。

### 11、写出一个简单的$.ajax()的请求方式？
```TypeScript
$.ajax({
    url:'http://www.baidu.com',
    type:'POST',
    data:data,
    cache:true,
    headers:{},
    beforeSend：function(){},
    success:function(){},
    error:function(){},
    complete:function(){}
}); 
```

### 12、jQuery的事件委托方法bind 、live、delegate、on
#### bind 【jQuery 1.3之前】

定义和用法：主要用于给选择到的元素上绑定特定事件类型的监听函数；

语法：bind(type,[data],function(eventObject))；

特点：

　　(1)、适用于页面元素静态绑定。只能给调用它的时候已经存在的元素绑定事件，不能给未来新增的元素绑定事件。

　　(2)、当页面加载完的时候，你才可以进行bind()，所以可能产生效率问题。

实例如下：$( "#members li a" ).bind( "click", function( e ) {} );

#### live 【jQuery 1.3之后】
定义和用法：主要用于给选择到的元素上绑定特定事件类型的监听函数；
语法：live(type, [data], fn);

特点：
　　(1)、live方法并没有将监听器绑定到自己(this)身上，而是绑定到了this.context上了。

　　(2)、live正是利用了事件委托机制来完成事件的监听处理，把节点的处理委托给了document，新添加的元素不必再绑定一次监听器。

　　(3)、使用live()方法但却只能放在直接选择的元素后面，不能在层级比较深，连缀的DOM遍历方法后面使用，即$(“ul”").live...可以，但$("body").find("ul").live...不行； 

实例如下：$( document ).on( "click", "#members li a", function( e ) {} );

#### (3)、delegate 【jQuery 1.4.2中引入】
定义和用法：将监听事件绑定在就近的父级元素上
语法：delegate(selector,type,[data],fn)
特点：
　　(1)、选择就近的父级元素，因为事件可以更快的冒泡上去，能够在第一时间进行处理。
　　(2)、更精确的小范围使用事件代理，性能优于.live()。可以用在动态添加的元素上。
实例如下：

$("#info_table").delegate("td","click",function(){/*显示更多信息*/});

$("table").find("#info").delegate("td","click",function(){/*显示更多信息*/});

#### 事件绑定机制
定义和用法：将监听事件绑定到指定元素上。
语法：on(type,[selector],[data],fn)
实例如下：$("#info_table").on("click","td",function(){/*显示更多信息*/});参数的位置写法与delegate不一样。
说明：on方法是当前JQuery推荐使用的事件绑定方法，附加只运行一次就删除函数的方法是one()。
 总结：.bind(), .live(), .delegate(),.on()分别对应的相反事件为：.unbind(),.die(), .undelegate(),.off()

[回到顶部](http://www.cnblogs.com/#_labelTop)

## 开发及性能优化
### **1、规避javascript多人开发函数重名问题**

*   命名空间
*   封闭空间
*   js模块化mvc（数据层、表现层、控制层）
*   JavaScript开发使用seajs
*   变量转换成对象的属性
*   对象化

### 减低页面加载时间的方法
*   压缩css、js文件
*   合并js、css文件，减少http请求
*   外部js、css文件放在最底下
*   加载久的js/css文件放在最底下
*   **减少dom操作**，尽可能用变量替代不必要的dom操作

### Web攻击技术
（1）XSS（Cross-Site Scripting，跨站脚本攻击）：指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或者JavaScript进行的一种攻击。
（2）SQL注入攻击
（3）CSRF（Cross-Site Request Forgeries，跨站点请求伪造）：指攻击者通过设置好的陷阱，强制对已完成的认证用户进行非预期的个人信息或设定信息等某些状态更新。
## Get和post的区别？
都是TCP请求，post发送的是两次请求，第一次返回100状态后才会再发送（火狐除外）
GET在浏览器回退时是无害的，而POST会再次提交请求。
GET产生的URL地址可以被Bookmark，而POST不可以。
GET请求会被浏览器主动cache，而POST不会，除非手动设置。
GET请求只能进行url编码，而POST支持多种编码方式。
GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
GET请求在URL中传送的参数是有长度限制的，而POST么有。
对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
GET比POST更不安全，因为参数直接暴露在URL上，所以不能用来传递敏感信息。
GET参数通过URL传递，POST放在Request body中。
145、Post一个file的时候file放在哪的？


## 3、http请求头，请求体，cookie、url
参考菜鸟教程HTTP专栏：[http://www.runoob.com/http/http-tutorial.html](http://www.runoob.com/http/http-tutorial.html) 
人人三面的时候问我http请求头都有哪些值，答不上来。。GG 
**客户端请求消息** 
![这里写图片描述](http://upload-images.jianshu.io/upload_images/5138592-2fb17ba2750a54eb.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

**服务器响应消息** 
HTTP响应也由四个部分组成，分别是：状态行、消息报头、空行和响应正文。 
![这里写图片描述](http://upload-images.jianshu.io/upload_images/5138592-ba60a495550c9763.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
实例 
下面实例是一点典型的使用GET来传递数据的实例： 
客户端请求：
```Json
GET /hello.txt HTTP/1.1
User-Agent: curl/7.16.3 libcurl/7.16.3 OpenSSL/0.9.7l zlib/1.2.3
Host: www.example.com
Accept-Language: en, mi
```
服务端响应:

```Json
HTTP/1.1 200 OK
Date: Mon, 27 Jul 2009 12:28:53 GMT
Server: Apache
Last-Modified: Wed, 22 Jul 2009 19:15:56 GMT
ETag: "34aa387-d-1568eb00"
Accept-Ranges: bytes
Content-Length: 51
Vary: Accept-Encoding
Content-Type: text/plain
```

输出结果：

```html
Hello World! My payload includes a trailing CRLF.
```

## 5、对闭包的理解，实现一个暴露内部变量，而且外部可以访问修改的函数
闭包的作用： 
匿名自执行函数、缓存、实现封装（主要作用）、实现面向对象中的对象
```TypeScript
var person = function(){    
    //变量作用域为函数内部，外部无法访问    
    var name = "default";       
    return {    
       getName : function(){    
           return name;    
       },    
       setName : function(newName){    
           name = newName;    
       }    
    }    
}();    
print(person.name);//直接访问，结果为undefined    
print(person.getName());    
person.setName("a");    
print(person.getName());    
//得到结果如下：  
undefined  
default  
a
```

## 6、基本的数据类型
5个简单数据类型（基本数据类型）+ 1个复杂数据类型 
undefiend, number string null boolean + object 
ES6 新增Symbol

## 7、基本的两列自适应布局
左定右适应：
```scss
#div1{
    width: 100px;
    display: inline-block;
    background-color: black;
}
#div2{
    display: inline-block;
    position: absolute;
    left: 100px;
    right: 0px;
    background-color: red;
}
```

## unix中常用的命令行

虽然上过linux课，但是命令忘得差不多了 尴尬。。。

## OSI模型，HTTP,TCP,UDP分别在哪些层

这个可以参考我另一个博客： 
[http://blog.csdn.net/qq_22944825/article/details/78160659](http://blog.csdn.net/qq_22944825/article/details/78160659) 
OSI：物理层-数据链路层-网络层-传输层-会话层-表现层-应用层 
[图片上传失败...(image-fd5e1a-1537104121491)]

## 11、快排的时间复杂度和空间复杂度

一个特别好的总结的博客： 
[http://web.jobbole.com/87968/](http://web.jobbole.com/87968/) 
![这里写图片描述](http://upload-images.jianshu.io/upload_images/5138592-e7f9d4d5b06058b8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
## 位运算
> https://blog.csdn.net/xiaopihaierletian/article/details/78162863

## setTimeout的方式(注册事件)
有两个参数，第一个参数是函数，第二参数是时间值。调用setTimeout时，把函数参数，放到事件队列中。等主程序运行完，再调用。
利用这个原理可以延迟处理大计算的代码，防止堆栈溢出:
```TypeScript
var list = readHugeList();
var nextListItem = function() {   
    var item = list.pop();    
    if (item) {        // process the list item...
        setTimeout( nextListItem, 0);
    }
};
```
## jQuery插件手写
1、$.extend(src) 
　　该方法就是将src合并到jquery的全局对象中去，如：
```TypeScript
 $.extend({
      hello:function(){alert('hello');}
      });
```

2、$.fn.extend(src) 
　　该方法将src合并到jquery的实例对象中去，如:
```TypeScript
 $.fn.extend({
  hello:function(){alert('hello');}
 });
```
```TypeScript
attr(key,value)
<img id="myphoto" alt="my photo" src=""/>
$("#myphoto").attr("src","/pic/1.jpg");

```
jQuery对象是一个特殊的集合对象。即使只有一个元素，jQuery对象仍然是一个集合。说其特殊是因为实际上jQuery对象是包含一个集合对象和各种函数的类。

## 递归函数
注意：
1. 地址传递和值传递
1. 各级递归时同步的，未递归完成时不会return
```TypeScript
function fact(num) {
    if (num <= 1) {
        console.log(1)            
    } else {
      console.log(num * fact(num - 1))          
    }
}
fact(3)
// 1  //  等最底层执行完后再执行上一层
// NaN
// NaN
```
以下代码可导致出错：
```TypeScript
var anotherFact = fact; 
 fact = null; 
 alert(antherFact(4)); //出错 
```
由于fact已经不是函数了，所以出错。 
用arguments.callee可解决问题，这是一个指向正在执行的函数的指针,**arguments.callee**返回正在被执行的对现象。 
新的函数为：
```TypeScript
function fact(num) {
            if (num <= 1) {
                return 1;
            } else {
                return num * arguments.callee(num - 1); //此处更改了。 
            }
}
var anotherFact = fact;
fact = null;
alert(antherFact(4)); //结果为24.
```

## 对前端路由
前端的路由和后端的路由在实现技术上不一样，但是原理都是一样的。在 HTML5 的 history API 出现之前，前端的路由都是通过 hash 来实现的，hash 能兼容低版本的浏览器。
```TypeScript
http://10.0.0.1/
http://10.0.0.1/#/about
http://10.0.0.1/#/concat
```
**服务端路由**：每跳转到不同的URL，都是重新访问服务端，然后服务端返回页面，页面也可以是服务端获取数据，然后和模板组合，返回HTML，也可以是直接返回模板HTML，然后由前端JS再去请求数据，使用前端模板和数据进行组合，生成想要的HTML。

**前端路由**：每跳转到不同的URL都是使用前端的锚点路由，实际上只是JS根据URL来操作DOM元素，根据每个页面需要的去服务端请求数据，返回数据后和模板进行组合，当然模板有可能是请求服务端返回的，这就是 SPA 单页程序。
在js可以通过window.location.hash读取到路径加以解析之后就可以响应不同路径的逻辑处理。
history 是 HTML5 才有的新 API，可以用来操作浏览器的 session history (会话历史)。基于 history 来实现的路由可以和最初的例子中提到的路径规则一样。
H5还新增了一个 **hashchange事件**，也是很有用途的一个新事件：
当页面hash(#)变化时，即会触发hashchange。锚点Hash起到引导浏览器将这次记录推入历史记录栈顶的作用，window.location对象处理“#”的改变并不会重新加载页面，而是将之当成新页面，放入历史栈里。并且，当前进或者后退或者触发hashchange事件时，我们可以在对应的事件处理函数中注册ajax等操作！ 
但是hashchange这个事件不是每个浏览器都有，低级浏览器需要用轮询检测URL是否在变化，来检测锚点的变化。当锚点内容(location.hash)被操作时，如果锚点内容发生改变浏览器才会将其放入历史栈中，如果锚点内容没发生变化，历史栈并不会增加，并且也不会触发hashchange事件。


## 平衡二叉树

平衡二叉搜索树（Self-balancing binary search tree）又被称为AVL树（有别于AVL算法），且具有以下性质：它是一 棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树，同时，平衡二叉树必定是二叉搜索树，反之则不一定。平衡二叉树的常用实现方法有红黑树、AVL、替罪羊树、Treap、伸展树等。 最小二叉平衡树的节点的公式如下 F(n)=F(n-1)+F(n-2)+1 这个类似于一个递归的数列，可以参考Fibonacci(斐波那契)数列，1是根节点，F(n-1)是左子树的节点数量，F(n-2)是右子树的节点数量。

### 清除字符串前后的空格。（兼容所有浏览器）
```TypeScript
function trim(str) { 
    if (str && typeof str === "string") { 
        return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
 }
}
```
###  2、使用正则表达式验证邮箱格式
```TypeScript
var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/; 
var email = "example@qq.com";
 console.log(reg.test(email)); // true
```
## 类的继承
继承的形式有很多中，js高程里面归纳了其中，我简单说一下前三种。 
1.原型继承
```TypeScript
function Parent(){
    this.name = "parent";
}
Parent.prototype.getName = function(){
    return this.name;
}

function Child(){
    this.name = "child";
}

//继承parent
Child.prototype = new Parent();
```
2.构造函数继承
```TypeScript
function Animal(name){
    this.name = name;
    this.eat = function(){
        consoel.log(this.name + "吃饭");
    }
}
var cat = new Animal("maomi");
cat.name;
cat.eat();
```
缺点是： 
3.组合继承

## call函数和apply函数的作用，以及用法
改变this的指向。 
this的指向问题，在你不知道的js这本书中（神书）做了四点归纳： 
1.默认绑定 （指 直接调用 foo(), this指向window） 
2.隐式绑定（obj.foo(), this指向obj 这里会出现很多坑，下面的问题应该会有解答） 
3.显示绑定（利用call、apply、bind改变this） 
4.new（var cat = new Animal() , this指向cat对象）

### js对象的可枚举性(enumerable)
可枚举性（enumerable）用来控制所描述的属性，是否将被包括在for...in循环之中。具体来说，如果一个属性的enumerable为false，下面三个操作不会取到该属性。
* for..in循环
* Object.keys方法
* JSON.stringify方法
```javascript
var o = {a:1, b:2};
 
o.c = 3;
Object.defineProperty(o, 'd', {
  value: 4,
  enumerable: false
});
 
o.d
// 4
 
for( var key in o ) console.log( o[key] ); 
// 1
// 2
// 3
 
Object.keys(o)  // ["a", "b", "c"]
 
JSON.stringify(o // => "{a:1,b:2,c:3}"
```
遍历操作都无法获取该属性，使得它有点像“秘密”属性，但还是可以直接获取它的值。

### 1、使用typeof bar ===“object”来确定bar是否是一个对象时有什么潜在的缺陷？这个陷阱如何避免？

尽管typeof bar ===“object”是检查bar是否是对象的可靠方法，但JavaScript中令人惊讶的问题是*null*也被认为是一个对象！

因此，对于大多数开发人员来说，下面的代码会将真实（而不是错误）记录到控制台：
```TypeScript
var  bar  =  null;

console.log(typeof bar  ===  "object");  // logs true!
```
只要知道这一点，就可以通过检查bar是否为空来轻松避免该问题：
```TypeScript

console.log((bar  !==  null)  &&  (typeof bar  ===  "object"));  // logs false

```
为了在我们的答案更加的完整，还有两件事值得注意：

首先，如果bar是一个函数，上面的解决方案将返回false。在大多数情况下，这是所期望的行为，但是在您希望函数返回true的情况下，您可以将
```TypeScript
console.log((bar  !==  null)  &&  ((typeof bar  ===  "object")  ||  (typeof bar  ===  "function")));
```
其次，如果bar是数组，则上述解决方案将返回true（例如，如果var bar = [];）。在大多数情况下，这是所希望的行为，因为数组确实是对象，但是在您想要对数组也是false的情况下，可以将上述解决方案修改为：

```TypeScript
console.log((bar  !==  null)  &&  (typeof bar  ===  "object")  &&  (toString.call(bar)  !==  "[object Array]"));
```
但是，还有一个替代方法对空值，数组和函数返回false，但对于对象则为true：

```TypeScript
console.log((bar  !==  null)  &&  (bar.constructor  ===  Object));

```
或者，如果您使用jQuery：
```TypeScript
console.log((bar  !==  null)  &&  (typeof bar  ===  "object")  &&  (!  $.isArray(bar)));
```

ES5使得数组的情况非常简单，包括它自己的空检查：
```TypeScript
console.log(Array.isArray(bar));
```

### 2、下面的代码将输出到控制台的是什么，为什么？
```TypeScript
(function(){
  var  a  =  b  =  3;
})();
console.log("a defined? "  +  (typeof  a  !==  'undefined'));
console.log("b defined? "  +  (typeof  b  !==  'undefined'));

```

由于a和b都在函数的封闭范围内定义，并且由于它们所在的行以var关键字开头，因此大多数JavaScript开发人员会希望typeof a和typeof b在上面的示例中都未定义。

但是，情况并非如此。这里的问题是大多数开发人员错误地理解语句var a = b = 3;以下简写为：
```TypeScript

var  b  =  3;

var  a  =  b;
```
但实际上，var a = b = 3;其实是速记：
```TypeScript
b  =  3;
var  a  =  b;
```

因此（如果您不使用严格模式），代码片段的输出将为：
```TypeScript

a  defined?  false

b  defined?  true
```
但是如何在封闭函数的范围之外定义b？那么，因为声明var a = b = 3;是语句b = 3的简写;并且var a = b; b最终成为一个全局变量（因为它不在var关键字后面），因此它仍然在作用域内，即使在封闭函数之外。

注意，在严格模式下（即，使用[strict](http://www.w3schools.com/js/js_strict.asp)），语句var a = b = 3;会产生一个ReferenceError的运行时错误：b没有定义，从而避免了可能导致的任何头headfakes/bugs。 （这就是为什么你应该在你的代码中使用strict，一个重要的例子！）



### 4、在功能块中封装JavaScript源文件的全部内容的重要性和原因是什么？

这是一种日益普遍的做法，被许多流行的JavaScript库（jQuery，Node.js等）所采用。这种技术在文件的全部内容周围创建一个闭包，这可能最重要的是创建一个私有名称空间，从而有助于避免不同JavaScript模块和库之间的潜在名称冲突。

这种技术的另一个特点是为全局变量提供一个容易引用（可能更短）的别名。例如，这通常用于jQuery插件。 jQuery允许您使用jQuery.noConflict()来禁用对jQuery名称空间的$引用。如果这样做了，你的代码仍然可以使用$使用闭包技术，如下所示：
```TypeScript
(function($)  {  /* jQuery plugin code referencing $ */  }  )(jQuery);
```
### 5、在JavaScript源文件的开头包含’use strict’的意义和有什么好处？

这里最简单也是最重要的答案是use strict是*一种在运行时自动执行更严格的JavaScript代码解析和错误处理的方法*。如果代码错误被忽略或失败，将会产生错误或抛出异常。总的来说，这是一个很好的做法。
严格模式的一些主要优点包括：

*   **使调试更容易。** 如果代码错误本来会被忽略或失败，那么现在将会产生错误或抛出异常，从而更快地发现代码中的问题，并更快地指引它们的源代码。
*   **防止意外全局。** 如果没有严格模式，将值赋给未声明的变量会自动创建一个具有该名称的全局变量。这是JavaScript中最常见的错误之一。在严格模式下，尝试这样做会引发错误。
*   **消除隐藏威胁。**在没有严格模式的情况下，对null或undefined的这个值的引用会自动强制到全局。这可能会导致许多*headfakes*和*pull-out-your-hair*类型的错误。在严格模式下，引用null或undefined的这个值会引发错误。
*   **不允许重复的参数值。** 严格模式在检测到函数的重复命名参数（例如，函数foo（val1，val2，val1）{}）时会引发错误，从而捕获代码中几乎可以肯定存在的错误，否则您可能会浪费大量的时间追踪。
    *   注意：它曾经是（在ECMAScript 5中）strict模式将禁止重复的属性名称（例如var object = {foo：“bar”，foo：“baz”};）但是从[ECMAScript 2015](https://stackoverflow.com/questions/30617139/whats-the-purpose-of-allowing-duplicate-property-names) 开始，就不再有这种情况了。
*   **使eval()更安全。** eval()在严格模式和非严格模式下的行为方式有些不同。最重要的是，在严格模式下，在eval()语句内部声明的变量和函数不会在包含范围中创建（它们是以非严格模式在包含范围中创建的，这也可能是问题的常见来源）。
*   **抛出无效的使用错误的删除符。** 删除操作符（用于从对象中删除属性）不能用于对象的不可配置属性。当试图删除一个不可配置的属性时，非严格代码将自动失败，而在这种情况下，严格模式会引发错误。

#### js异步加载的方式

1.  渲染引擎遇到 script 标签会停下来，等到执行完脚本，继续向下渲染
2.  defer 是“渲染完再执行”，async 是“下载完就执行”，defer 如果有多个脚本，会按照在页面中出现的顺序加载，多个async 脚本不能保证加载顺序
3.  加载 es6模块的时候设置 type=module，异步加载不会造成阻塞浏览器，页面渲染完再执行，可以同时加上async属性，异步执行脚本（利用顶层的this等于undefined这个语法点，可以侦测当前代码是否在 ES6 模块之中）

#### css 动画和 js 动画的差异
1.  代码复杂度，js 动画代码相对复杂一些
2.  动画运行时，对动画的控制程度上，js 能够让动画，暂停，取消，终止，css动画不能添加事件
3.  动画性能看，js 动画多了一个js 解析的过程，性能不如 css 动画好

#### XSS 与 CSRF 两种跨站攻击

1.  xss 跨站脚本攻击，主要是前端层面的，用户在输入层面插入攻击脚本，改变页面的显示，或则窃取网站 cookie，预防方法：不相信用户的所有操作，对用户输入进行一个转义，不允许 js 对 cookie 的读写
2.  csrf 跨站请求伪造，以你的名义，发送恶意请求，通过 cookie 加参数等形式过滤
3.  我们没法彻底杜绝攻击，只能提高攻击门槛

#### 事件委托，目的，功能，写法

1.  把一个或者一组元素的事件委托到它的父层或者更外层元素上
2.  优点，减少内存消耗，动态绑定事件
3.  target 是触发事件的最具体的元素，currenttarget是绑定事件的元素(在函数中一般等于this)
4.  [JavaScript 事件委托详解](https://zhuanlan.zhihu.com/p/26536815)

#### 线程，进程

1.  线程是最小的执行单元，进程是最小的资源管理单元
2.  一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程

#### 负载均衡

1.  当系统面临大量用户访问，负载过高的时候，通常会使用增加服务器数量来进行横向扩展，使用集群和负载均衡提高整个系统的处理能力
2.  [服务器集群负载均衡原理？](https://www.zhihu.com/question/22610352)

#### 什么是CDN缓存
1.  CDN 是一种部署策略，根据不同的地区部署类似nginx 这种服务服务，会缓存静态资源。前端在项目优化的时候，习惯在讲台资源上加上一个 hash 值，每次更新的时候去改变这个 hash，hash 值变化的时候，服务会去重新取资源
2.  (CDN)是一个经策略性部署的整体系统，包括分布式存储、负载均衡、网络请求的重定向和内容管理4个要件
3.  [CDN_百度百科](https://baike.baidu.com/item/CDN)

#### 闭包的写法，闭包的作用，闭包的缺点
1.  使用闭包的目的——隐藏变量，间接访问一个变量,在定义函数的词法作用域外，调用函数
2.  闭包的内存泄露，是IE的一个 bug，闭包使用完成之后，收回不了闭包的引用，导致内存泄露
3.  [「每日一题」JS 中的闭包是什么？](https://zhuanlan.zhihu.com/p/22486908?refer=study-fe)
4.  [闭包造成内存泄露的实验](http://www.cnblogs.com/rubylouvre/p/3345294.html)

#### 跨域问题，谁限制的跨域，怎么解决

1.  浏览器的同源策略导致了跨域
2.  用于隔离潜在恶意文件的重要安全机制
3.  [jsonp ，允许 script 加载第三方资源][https://segmentfault.com/a/11…](https://segmentfault.com/a/1190000008445998)
4.  nginx 反向代理（nginx 服务内部配置 Access-Control-Allow-Origin *）
5.  cors 前后端协作设置请求头部，Access-Control-Allow-Origin 等头部信息
6.  iframe 嵌套通讯，postmessage

#### javascript 中常见的内存泄露陷阱
1.  内存泄露会导致一系列问题，比如：运行缓慢，崩溃，高延迟
2.  内存泄露是指你用不到（访问不到）的变量，依然占居着内存空间，不能被再次利用起来
3.  意外的全局变量，这些都是不会被回收的变量（除非设置 null 或者被重新赋值），特别是那些用来临时存储大量信息的变量
4.  周期函数一直在运行，处理函数并不会被回收，jq 在移除节点前都会，将事件监听移除
5.  js 代码中有对 DOM 节点的引用，dom 节点被移除的时候，引用还维持
6.  [JavaScript 中 4 种常见的内存泄露陷阱](http://web.jobbole.com/88463/)

#### babel把ES6转成ES5或者ES3之类的原理是什么

1.  它就是个编译器，输入语言是ES6+，编译目标语言是ES5
2.  babel 官方工作原理
3.  解析：将代码字符串解析成抽象语法树
4.  变换：对抽象语法树进行变换操作
5.  再建：根据变换后的抽象语法树再生成代码字符串

#### Promise 模拟终止

1.  当新对象保持“pending”状态时，原Promise链将会中止执行。
2.  return new Promise(()=>{}); // 返回“pending”状态的Promise对象
3.  [从如何停掉 Promise 链说起(promise内存泄漏问题)](https://github.com/xieranmaya/blog/issues/5)

#### promise 放在try catch里面有什么结果

1.  Promise 对象的错误具有冒泡性质，会一直向后传递，直到被捕获为止，也即是说，错误总会被下一个catch语句捕获
2.  当Promise链中抛出一个错误时，错误信息沿着链路向后传递，直至被捕获

#### 网站性能优化

1.  http 请求方面，减少请求数量，请求体积，对应的做法是，对项目资源进行压缩，控制项目资源的 dns 解析在2到4个域名，提取公告的样式，公共的组件，雪碧图，缓存资源，
2.  压缩资源，提取公共资源压缩，提取 css ，js 公共方法
3.  不要缩放图片，使用雪碧图，使用字体图表（阿里矢量图库）
4.  使用 CDN，抛开无用的 cookie
5.  减少重绘重排，CSS属性读写分离，最好不要用js 修改样式，dom 离线更新，渲染前指定图片的大小
6.  js 代码层面的优化，减少对字符串的计算，合理使用闭包，首屏的js 资源加载放在最底部

#### js 自定义事件实现

1.  原生提供了3个方法实现自定义事件
2.  createEvent，设置事件类型，是 html 事件还是 鼠标事件
3.  initEvent 初始化事件，事件名称，是否允许冒泡，是否阻止自定义事件
4.  dispatchEvent 触发事件


#### get与post 通讯的区别

1.  Get 请求能缓存，Post 不能
2.  Post 相对 Get 安全一点点，因为Get 请求都包含在 URL 里，且会被浏览器保存历史纪录，Post 不会，但是在抓包的情况下都是一样的。
3.  Post 可以通过 request body来传输比 Get 更多的数据，Get 没有这个技术
4.  URL有长度限制，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的
5.  Post 支持更多的编码类型且不对数据类型限制

#### 有没有去研究webpack的一些原理和机制，怎么实现的

1.  解析webpack配置参数，合并从shell传入和webpack.config.js文件里配置的参数，生产最后的配置结果。
2.  注册所有配置的插件，好让插件监听webpack构建生命周期的事件节点，以做出对应的反应。
3.  从配置的entry入口文件开始解析文件构建AST语法树，找出每个文件所依赖的文件，递归下去。
4.  在解析文件递归的过程中根据文件类型和loader配置找出合适的loader用来对文件进行转换。
5.  递归完后得到每个文件的最终结果，根据entry配置生成代码块chunk。
6.  输出所有chunk到文件系统。

#### ES6模块与CommonJS模块的差异

1.  CommonJs 模块输出的是一个值的拷贝，ES6模块输出的是一个值的引用
2.  CommonJS 模块是运行时加载，ES6模块是编译时输出接口
3.  ES6输入的模块变量，只是一个符号链接，所以这个变量是只读的，对它进行重新赋值就会报错

#### 模块加载AMD，CMD，CommonJS Modules/2.0 规范

1.  这些规范的目的都是为了 JavaScript 的模块化开发，特别是在浏览器端的
2.  对于依赖的模块，AMD 是提前执行，CMD 是延迟执行
3.  CMD 推崇依赖就近，AMD 推崇依赖前置

#### Node 事件循环，js 事件循环差异

1.  Node.js 的事件循环分为6个阶段
2.  浏览器和Node 环境下，microtask 任务队列的执行时机不同
    *   Node.js中，microtask 在事件循环的各个阶段之间执行
    *   浏览器端，microtask 在事件循环的 macrotask 执行完之后执行
3.  递归的调用process.nextTick()会导致I/O starving，官方推荐使用setImmediate()

#### 浅拷贝和深拷贝的问题

1.  深拷贝和浅拷贝是只针对Object和Array这样的复杂类型的
2.  也就是说a和b指向了同一块内存，所以修改其中任意的值，另一个值都会随之变化，这就是浅拷贝
3.  浅拷贝， ”Object.assign() 方法用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象。它将返回目标对象
4.  深拷贝，JSON.parse()和JSON.stringify()给了我们一个基本的解决办法。但是函数不能被正确处理

