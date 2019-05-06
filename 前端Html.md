## web前端开发，如何提高页面性能优化？

#### 内容方面：
1.减少 HTTP 请求 (Make Fewer HTTP Requests)
2.减少 DOM 元素数量 (Reduce the Number of DOM Elements)
3.使得 Ajax 可缓存 (Make Ajax Cacheable)
#### 针对CSS：
1.把 CSS 放到代码页上端 (Put Stylesheets at the Top)
2.从页面中剥离 JavaScript 与 CSS (Make JavaScript and CSS External)
3.精简 JavaScript 与 CSS (Minify JavaScript and CSS)
4.避免 CSS 表达式 (Avoid CSS Expressions)

#### 针对JavaScript ：
1. 脚本放到 HTML 代码页底部 (Put Scripts at the Bottom)
2. 从页面中剥离 JavaScript 与 CSS (Make JavaScript and CSS External)
3. 精简 JavaScript 与 CSS (Minify JavaScript and CSS)
4. 移除重复脚本 (Remove Duplicate Scripts)

#### 面向图片(Image)：
1. 优化图片
2. 不要在 HTML 中使用缩放图片
3. 使用恰当的图片格式
4. 使用 CSS Sprites 技巧对图片优化

### 5、前端开发中，如何优化图像？图像格式的区别？

#### 优化图像：
1. 不用图片，尽量用css3代替。 比如说要实现修饰效果，如半透明、边框、圆角、阴影、渐变等，在当前主流浏览器中都可以用CSS达成。
2. 使用矢量图SVG替代位图。对于绝大多数图案、图标等，矢量图更小(@doubt)，且可缩放而无需生成多套图。现在主流浏览器都支持SVG了，所以可放心使用！
3. 使用恰当的图片格式。我们常见的图片格式有JPEG、GIF、PNG。
基本上，内容图片多为照片之类的，适用于JPEG。
而修饰图片通常更适合用无损压缩的PNG。

GIF基本上除了GIF动画外不要使用。且动画的话，也更建议用video元素和视频格式，或用SVG动画取代。
4. 按照HTTP协议设置合理的缓存。
5. 使用字体图标webfont、CSS Sprites等。
6. 用CSS或JavaScript实现预加载。
7. WebP图片格式能给前端带来的优化。WebP支持无损、有损压缩，动态、静态图片，压缩比率优于GIF、JPEG、JPEG2000、PG等格式，非常适合用于网络等图片传输。

####  图像格式的区别：
    矢量图：图标字体，如 font-awesome；svg 
    位图：gif,jpg(jpeg),png
    区别：
        1.gif:是一种无损，8位图片格式。具有支持动画，索引透明，压缩等特性。适用于做色彩简单(色调少)的图片，如logo,各种小图标icons等。
        2.JPEG格式是一种大小与质量相平衡的压缩图片格式。适用于允许轻微失真的色彩丰富的照片，不适合做色彩简单(色调少)的图片，如logo,各种小图标icons等。
        3.png:PNG可以细分为三种格式:PNG8，PNG24，PNG32。后面的数字代表这种PNG格式最多可以索引和存储的颜色值。
        4.svg图片相对会 **偏大**
关于透明：PNG8支持索引透明和alpha透明;PNG24不支持透明;而PNG32在24位的PNG基础上增加了8位（256阶）的alpha通道透明;

    优缺点：
    　　1、能在保证最不失真的情况下尽可能压缩图像文件的大小。
    　　2、对于需要高保真的较复杂的图像，PNG虽然能无损压缩，但图片文件较大，不适合应用在Web页面上。 

### 6、浏览器是如何渲染页面的？

#### 渲染的流程如下：

1.解析HTML文件，创建DOM树。
自上而下，遇到任何样式（link、style）与脚本（script）都会 **阻塞（外部样式不阻塞后续外部脚本的加载）**。
2.解析CSS。优先级：浏览器默认设置<用户设置<外部样式<内联样式<HTML中的style样式；
3.将CSS与DOM合并，构建渲染树（Render Tree）
4.布局和绘制，重绘（repaint）和重排（reflow）

## html5新标签：
http://www.cnblogs.com/yuzhongwusan/archive/2011/11/17/2252208.html
## 2、行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

行内元素：a、b、span、img、input、strong、select、label、em、button、textarea
块级元素：div、ul、li、dl、dt、dd、p、h1-h6、blockquote
空元素：即系没有内容的HTML元素，例如：br、meta、hr、link、input、img

## display:none和visibility:hidden的区别？
    display:none  隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，
    就当他从来不存在。
    visibility:hidden  隐藏对应的元素，但是在文档布局中**仍保留原来的空间**。

### CSS中 link 和@import 的区别是？
    (1) link属于HTML标签，而@import是CSS提供的; 
    (2) 页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;
    (3) import只在IE5以上才能识别，而link是HTML标签，无兼容问题; 
    (4) link方式的样式的权重 高于@import的权重.




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
