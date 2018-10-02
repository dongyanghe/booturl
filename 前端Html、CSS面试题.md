## 1、什么是盒子模型？

在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border），元素的外边距（margin）四个部分。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。

## html5新标签：
http://www.cnblogs.com/yuzhongwusan/archive/2011/11/17/2252208.html
## 2、行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img

## display:none和visibility:hidden的区别？
    display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，
    就当他从来不存在。
    visibility:hidden  隐藏对应的元素，但是在文档布局中仍保留原来的空间。

### CSS中 link 和@import 的区别是？
    (1) link属于HTML标签，而@import是CSS提供的; 
    (2) 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
    (3) import只在IE5以上才能识别，而link是HTML标签，无兼容问题; 
    (4) link方式的样式的权重 高于@import的权重.
## Position定位:
绝对定位（**脱离文档流**）：
Fixed：相对于窗口进行定位；可以通过z-index进行层次分级。可层叠
Absolute：相对于第一个不是static定位的父元素定位。可以通过z-index进行层次分级。可层叠
相对定位（**不脱离文档流**）：
Relative：相对于**原来的位置**定位。不可层叠
没有定位（不能使用top、left、rigth、bottom、z-index）：
Static：出现在正常流中。
从父元素继承：
Inherit
> 记：相对自己定位的Relative舍不得离开位置，自然也不愿意脱离文档流,和float一样也不愿层叠
> https://blog.csdn.net/fivedoumi/article/details/50850327
### position:absolute和float属性的异同  
    A：共同点：
    对内联元素设置`float`和`absolute`属性，可以让元素脱离文档流，并且可以设置其宽高。
    B：不同点：
    **float仍会占据位置，position会覆盖文档流中的其他元素,可层叠**。
    float使用clear:both，position使用position:static清除
### 介绍一下box-sizing属性？

`box-sizing`属性主要用来控制元素的盒模型的解析模式。默认值是`content-box`。

- `content-box`：让元素维持W3C的标准盒模型。元素的宽度/高度由border + padding + content的宽度/高度决定，**设置width/height属性指的是content部分的宽/高**

- `border-box`：让元素维持IE传统盒模型（IE6以下版本和IE6~7的怪异模式）。**设置width/height属性指的是border + padding + content*

### CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？ CSS3新增伪类有那些？
   
    1.id选择器（ # myid）
    2.类选择器（.myclassname）
    3.标签选择器（div, h1, p）
    4.相邻选择器（h1 + p）
    5.子选择器（ul > li）
    6.后代选择器（li a）
    7.**通配符选择器（ * ）**
    8.**属性选择器（a[rel = "external"]）**
    9.**伪类选择器（a: hover, li:nth-child）**

继承
---
  *   可继承的样式： font-size font-family color, text-indent。。。;
  *   **不可继承的样式：border padding margin width height** ;
  *   优先级**就近原则**，同权重情况下样式定义最近者为准;
  *   载入样式以**最后载入**的定位为准;

优先级为:
---
    !important >  id > class > tag  
    important 比 内联优先级高,但内联比 id 要高

CSS3新增伪类举例：
---
    p:first-of-type 选择**属于其父元素**的首个 <p> 元素的 <p> 元素。
    p:last-of-type  选择属于其父元素的最后 <p> 元素的 <p> 元素。
    p:only-of-type  选择属于其父元素唯一的 <p> 元素的 <p> 元素。
    p:only-child    选择属于其父元素的唯一子元素的每个 <p> 元素。
    p:nth-child(2)  选择属于其父元素的第二个子元素的每个 <p> 元素。
    :enabled  :disabled 控制表单控件的禁用状态。
    :checked 单选框或复选框被选中。
### position的值， relative和absolute分别是相对于谁进行定位的？

    absolute 
            生成绝对定位的元素，相对于最近一级的定位**不是 static**的父元素来进行定位。

    fixed （老IE不支持）
        生成绝对定位的元素，相对于浏览器窗口进行定位。 

    relative 
        生成相对定位的元素，相对于其在普通流中的位置进行定位。 

    static  默认值。没有定位，元素出现在正常的流中

### CSS3有哪些新特性？

    CSS3实现圆角（border-radius），阴影（box-shadow），
    对文字加特效（text-shadow、），线性渐变（gradient），旋转（transform）
    transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜
    增加了更多的CSS选择器  多背景 rgba 
    在CSS3中唯一引入的伪元素是::selection.
    媒体查询，多栏布局
    border-image

### XML和JSON的区别？
    (1).数据体积方面。
    JSON相对于XML来讲，数据的体积小，传递的速度更快些。
    (2).数据交互方面。
    JSON与JavaScript的交互更加方便，更容易解析处理，更好的数据交互。
    (3).数据描述方面。
    JSON对数据的描述性比XML较差。
    (4).传输速度方面。
    JSON的速度要远远快于XML。
### 解释下 CSS sprites，以及你要如何在页面或网站中使用它。

    CSS Sprites其实就是把网页中一些背景图片整合到一张图片文件中，再利用CSS的“background-image”，“background- repeat”，“background-position”的组合进行背景定位，background-position可以用数字能精确的定位出背景图片的位置。这样可以减少很多图片请求的开销，因为请求耗时比较长；请求虽然可以并发，但是也有限制，一般浏览器都是6个。对于未来而言，就不需要这样做了，因为有了`http2`。


### 3、CSS实现垂直水平居中

一道经典的问题，实现方法有很多种，以下是其中一种实现：
HTML结构：
```
<div class="wrapper">
     <div class="content"></div>
</div>
```

CSS：
```
.wrapper {
    position: relative;
    width: 500px;
    height: 500px;
    border: 1px solid red; 
 }
.content{
    position: absolute;
    width: 200px;
    height: 200px; /*top、bottom、left和right 均设置为0*/ top: 0;
    bottom: 0;
    left: 0;
    right: 0; 
    /*margin设置为auto*/ 
    margin:auto;
    border: 1px solid green;    
} 
```

效果如下：

![image](http://upload-images.jianshu.io/upload_images/5138592-ad027661da040b57.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

### 4、简述一下src与href的区别

href 是指向网络资源所在位置，建立和当前元素（锚点）或当前文档（链接）之间的**链接**，用于超链接。

src是指向**外部资源的位置**，指向的内容将会嵌入到文档中当前标签所在位置；在请求src资源时会将其指向的资源下载并应用到文档内，例如js脚本，img图片和frame等元素。

当浏览器解析到该元素时，会暂停其他资源的下载和处理，直到将该资源加载、编译、执行完毕，图片和框架等元素也如此，类似于将所指向资源嵌入当前标签内。这也是为什么将js脚本放在底部而不是头部。

### 5、简述同步和异步的区别

同步是**阻塞模式**，异步是**非阻塞模式**。
同步就是指一个进程在执行某个请求的时候，若该请求需要一段时间才能返回信息，那么这个进程将会一直等待下去，直到收到返回信息才继续执行下去；
异步是指进程不需要一直等下去，而是继续执行下面的操作，不管其他进程的状态。当有消息返回时系统会通知进程进行处理，这样可以提高执行的效率。

###  6、px和em的区别

相同点：px和em都是长度单位；

异同点：px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字体大小。
浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em。

### 7、浏览器的内核分别是什么?

IE: trident内核

Firefox：gecko内核

Safari：webkit内核

Opera：以前是presto内核，Opera现已改用Google Chrome的Blink内核

Chrome：Blink(基于webkit，Google与Opera Software共同开发)

###  8、什么叫优雅降级和渐进增强？

渐进增强 progressive enhancement：
针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。

优雅降级 graceful degradation：
一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

区别：

a. 优雅降级是从复杂的现状开始，并试图减少用户体验的供给

b. 渐进增强则是从一个非常基础的，能够起作用的版本开始，并不断扩充，以适应未来环境的需要

c. 降级（功能衰减）意味着往回看；而渐进增强则意味着朝前看，同时保证其根基处于安全地带

###  9、sessionStorage 、localStorage 和 cookie 之间的区别

 共同点：用于浏览器端存储的缓存数据

不同点：

(1)、存储内容是否发送到服务器端：当设置了Cookie后，数据会发送到服务器端，造成一定的宽带浪费；

        web storage,会将数据保存到本地，不会造成宽带浪费；

(2)、数据存储大小不同：Cookie数据不能超过4K,适用于会话标识；web storage数据存储可以达到5M;

(3)、数据存储的有效期限不同：cookie只在设置了Cookid过期时间之前一直有效，即使关闭窗口或者浏览器；

        sessionStorage,仅在关闭浏览器之前有效；localStorage,数据存储永久有效；

(4)、作用域不同：cookie和localStorage是在同源同窗口中都是共享的；sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面；

###  10、Web Storage与Cookie相比存在的优势：

(1)、存储空间更大：IE8下每个独立的存储空间为10M，其他浏览器实现略有不同，但都比Cookie要大很多。

(2)、存储内容不会发送到服务器：当设置了Cookie后，Cookie的内容会随着请求一并发送的服务器，这对于本地存储的数据是一种带宽浪费。而Web Storage中的数据则仅仅是存在本地，不会与服务器发生任何交互。

(3)、更多丰富易用的接口：Web Storage提供了一套更为丰富的接口，如setItem,getItem,removeItem,clear等,使得数据操作更为简便。cookie需要自己封装。

(4)、独立的存储空间：每个域（包括子域）有独立的存储空间，各个存储空间是完全独立的，因此不会造成数据混乱。

###  11、Ajax的优缺点及工作原理？

#### 定义和用法:

AJAX = Asynchronous JavaScript and XML（异步的 JavaScript 和 XML）。Ajax 是一种用于创建快速动态网页的技术。Ajax 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。

#### 优点：

1.减轻服务器的负担,按需取数据,最大程度的减少冗余请求

2.局部刷新页面,减少用户心理和实际的等待时间,带来更好的用户体验

3.基于xml标准化,并被广泛支持,不需安装插件等,进一步促进页面和数据的分离

#### 缺点：

1.AJAX大量的使用了javascript和ajax引擎,这些取决于浏览器的支持.在编写的时候考虑对浏览器的兼容性.

2.AJAX只是局部刷新,所以页面的后退按钮是没有用的.

3.对流媒体还有移动设备的支持不是太好等

#### AJAX的工作原理：

1.创建ajax对象（XMLHttpRequest/ActiveXObject(Microsoft.XMLHttp)）

2.判断数据传输方式(GET/POST)

3.打开链接 open()

4.发送 send()

5.当ajax对象完成第四步（onreadystatechange）数据接收完成，判断http响应状态（status）200-300之间或者304（缓存）执行回调函数

### 12、请指出document load和document ready的区别？

共同点：这两种事件都代表的是页面文档加载时触发。

异同点：

ready 事件的触发，表示文档结构已经加载完成（不包含图片等非文字媒体文件）。

onload 事件的触发，表示页面包含图片等文件在内的所有元素都加载完成。

[回到顶部](http://www.cnblogs.com/#_labelTop)

##  正则表达式

###  1、写一个function，清除字符串前后的空格。（兼容所有浏览器）
```function trim(str) { 
    if (str && typeof str === "string") { 
        return str.replace(/(^\s*)|(\s*)$/g,""); //去除前后空白符
 }
}
```

###  2、使用正则表达式验证邮箱格式
```
var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/; 
var email = "example@qq.com";
 console.log(reg.test(email)); // true
```

[回到顶部](http://www.cnblogs.com/#_labelTop)