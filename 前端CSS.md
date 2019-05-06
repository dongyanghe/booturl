
## 使用css实现一个三角形

## 1、什么是盒子模型？

在网页中，一个元素占有空间的大小由几个部分构成，其中包括元素的内容（content），元素的内边距（padding），元素的边框（border），元素的外边距（margin）**四个部分**。这四个部分占有的空间中，有的部分可以显示相应的内容，而有的部分只用来分隔相邻的区域或区域。4个部分一起构成了css中元素的盒模型。
### 介绍一下box-sizing属性？
* content-box  是默认值。如果你设置一个元素的宽为100px，那么这个元素的内容区会有100px宽，并且任何边框和内边距的宽度都会被增加到最后绘制出来的元素宽度中。
* border-box 告诉浏览器去理解你设置的边框和内边距的值是包含在width内的。也就是说，如果你将一个元素的width设为100px,那么这100px会包含其它的border和padding，内容区的实际宽度会是width减去border + padding的计算值。大多数情况下这使得我们更容易的去设定一个元素的宽高。
  
## Position定位:
### 绝对定位（**脱离文档流**）：
Fixed：相对于窗口进行定位；可以通过z-index进行层次分级。可层叠
Absolute：相对于第一个不是static定位的父元素定位。可以通过z-index进行层次分级。可层叠
### 相对定位（**不脱离文档流**）：
Relative：相对于**原来的位置**定位。不可层叠
### 没有定位（不能使用top、left、rigth、bottom、z-index）：
Static：出现在正常流中。
从父元素继承：
Inherit
> 记：相对自己定位的Relative舍不得离开位置，自然也不愿意脱离文档流,和float一样也不愿层叠,脱离文档流的才能层叠
> https://blog.csdn.net/fivedoumi/article/details/50850327
### position:absolute和float属性的异同  
    A：共同点：
    对内联元素设置`float`和`absolute`属性，可以让元素脱离文档流，并且可以设置其宽高。
    B：不同点：
    **float仍会占据位置，position会覆盖文档流中的其他元素,可层叠**。
    float使用clear:both，position使用position:static清除

## 清除浮动
* clear:both
* position使用position:static
* display:table
* overflow:auto
* 全部一起浮动。。。
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
    ## display属性的Flex布局
> http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
### 3、CSS实现垂直水平居中
```html
<div class="wrapper">
     <div class="content"></div>
</div>
```
```css
.wrapper {
    position: relative;
    width: 500px;
    height: 500px;
    border: 1px solid red; 
 }
.content{
    position: absolute;
    width: 200px;
    height: 200px; /*top、bottom、left和right 均设置为0*/ 
    top: 0;
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

## 去除input的历史输入记录
```html
    <!-- 再form或者input标签加入以下属性 -->
    autocomplete="off"
```
## 去除input的选中历史记录或者其他方式聚焦时的浏览器默认背景色
```css
    input:-webkit-autofill,input:-internal-autofill-previewed, input:-internal-autofill-selected, textarea:-internal-autofill-previewed, textarea:-internal-autofill-selected, select:-internal-autofill-previewed, select:-internal-autofill-selected {
    background-color: #ffffff !important;
    background-image: none !important;
    color: #333333 !important;
    /* 重点,是box-shadow不是背景色 */
    -webkit-box-shadow:0 0 0px 1000px #fff inset;
}
```