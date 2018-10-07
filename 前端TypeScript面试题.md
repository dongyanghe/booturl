## Observable

## jsx

## TypeScript
TypeScript是强类型，实行静态类型检查

## TypeScript和ECMAScript6
* TypeScript是javaScript的超集，ECMAScript6是javaScript的一套标准有自己的语法实现
* TypeScript是强类型，它的类定义属性要先声明，ECMAScript6不用
  
##  TS中使用js定义类型或微信等浏览器的特有类

1.第三方库一般带有它的`.d.ts` 文件，查看其中的类型定义直接使用。
2.自己写.d.ts文件，关键字有type、declare（declare可直接在使用处声明）
这样可以避免TypeScript找不到类得警告。
> https://www.cnblogs.com/silin6/p/7793753.html

## Observables Promises 差别
从堆栈溢出就是一个差别： 
当异步操作完毕或失败时。Promise会处理一个单个事件。
Observable相似于（在很多语言中的）Stream，当每一个事件调用回调函数时。同意传递零个或多个事件。通常Observable比Promise更受欢迎。由于它不但提供了Promise特性，还提供了其他特性。

使用Observable能够处理**0,1或多个事件**。你能够在每种情况下使用同样的API。Observable是**可取消**的，这相比于Promise也具有优势。
假设server的HTTP请求结果或其他一些异步操作不再须要，则Observable的订阅者能够取消订阅，而Promise将终于调用成功或失败的回调，即使你不须要通知或其提供的结果。
Observable提供像map、filter、forEach、reduce之类的相似于数组的**运算符**，还有强大的运算符，如retry()或replay()等，使用起来是相当方便的。
## 数据类型
### 字符串操作函数
*   concat() – 将两个或多个字符的文本组合起来，返回一个新的字符串。
*   indexOf() – 返回字符串中一个子串第一处出现的索引。如果没有匹配项，返回 -1 。
*   charAt() – 返回指定位置的字符。
*   lastIndexOf() – 返回字符串中一个子串最后一处出现的索引，如果没有匹配项，返回 -1 。
*   match() – 检查一个字符串是否匹配一个正则表达式。
*   substr() 函数 -- 返回从string的startPos位置，长度为length的字符串
*   substring() – 返回字符串的一个子串。传入参数是起始位置和结束位置。
*   slice() – 提取字符串的一部分，并返回一个新字符串。
*   replace() – 用来查找匹配一个正则表达式的字符串，然后使用新字符串代替匹配的字符串。
*   search() – 执行一个正则表达式匹配查找。如果查找成功，返回字符串中匹配的索引值。否则返回 -1 。
*   split() – 通过将字符串划分成子串，将一个字符串做成一个字符串数组。
*   length – 返回字符串的长度，所谓字符串的长度是指其包含的字符的个数。
*   toLowerCase() – 将整个字符串转成小写字母。
*   toUpperCase() – 将整个字符串转成大写字母。
* 增
* 删
* 改
* 查
* 存
* 传
* 转
* 量
* 态
* 
***记：增删改查***
> http://www.w3school.com.cn/jsref/jsref_obj_string.asp
### 数组(Array)对象
#### Array 对象属性
constructor 返回对创建此对象的数组函数的引用。
length 设置或返回数组中元素的数目。
prototype 使您有能力向对象添加属性和方法。
#### Array 对象方法
concat() 连接两个或更多的数组，并返回结果。
join() 把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。
pop() 删除并返回数组的最后一个元素。  
shift() 删除并返回数组的第一个元素
push() 向数组的末尾添加一个或更多元素，并返回新的长度。
unshift() 向数组的开头添加一个或更多元素，并返回新的长度。
reverse() 颠倒数组中元素的顺序。
slice() 从某个已有的数组返回选定的元素
sort() 对数组的元素进行排序
splice() 删除元素，并向数组添加新元素。
toSource() 返回该对象的源代码。
toString() 把数组转换为字符串，并返回结果。
toLocaleString() 把数组转换为本地数组，并返回结果。
valueOf() 返回数组对象的原始值
* 增
    * 【Array.concat(...array1: Array): Array】：不改变原数组，返回数组与多个数组合并出的新数组
    * 【Array.slice(start: Number,end: Number): Array】：不改变原数组，返回start到end范围的新数组，第一个下标是0
    * 【Array.from(object, mapFunction, thisValue): Array】：通过拥有 length 属性的对象或可迭代的对象来返回一个数组。
* 删
    * 【array.unshift(item1,item2, ..., itemX): Number】：改变原数组，向数组的开头添加一个或更多元素，并返回新的长度。
    * 【Array.shift(): any】：改变原数组，移除第一个元素并将其返回
    * 【Array.pop(): any】：改变原数组，移除最后一个元素并将其返回
* 改
    * 【array.splice(index,howmany,item1?,.....,itemX?):】：改变原数组，返回的是含有被删除的元素的数组，从index（从0开始数，包括index）下标开始，删除howmany（0为删除全部）个元素，并在index位置插入item1及其之后的元素
    * 【Array.reverse():Array】：改变原数组，将数组反转，并返回反转后的数组
    * 【array.push(item1, item2, ..., itemX)】：改变原数组，再数组后面插入元素
    * 【Array.sort(callBackFun?: Function(now: any, next: any)): Array】：改变原数组，返回排序后的数组，无回调参数时默认为按照字符编码的顺序进行排序。
    * 【array.fill(value, start, end)】：改变原数组，将一个固定值替换数组的元素。
    * 【array.copyWithin(target, start, end)】：改变原数组，从数组的指定位置拷贝元素到数组的另一个指定位置中。
* 查
    * 【Array.indexOf(value: String,start: Number): Number】：不改变原数组，返回value出现的第一个位置，start为开始查询的位置，下标从0开始，找不到返回-1
    * 【Array.includes(value, start): Boolean】：不改变原数组，如果value在数组start位置后有出现内返回true（NaN也能判断为true）
    * 【Array.LastIndexOf(value: String,start: Number): Number】：不改变原数组，返回value出现的最后一个位置，start为开始查询的位置，下标从0开始，找不到返回-1
    * 【Array.forEach((val: any, index: Number, array: Array), thisValue)】：不改变原数组，循环遍历，特点是array是地址传递，其他是值传递,空数组是不会执行回调函数
    * 【Array.map(function(currentValue,index,arr), thisValue): Array】：不改变原数组，返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值，回调函数需return。跟forEach一样array是地址传递，其他是值传递,空数组是不会执行回调函数
    * 【array.filter(function(currentValue,index,arr), thisValue): Array】：不改变原数组，返回过滤后的数组
    *  【array.find(function(currentValue,index,arr), thisValue): any】：不改变原数组，返回通过测试（函数内判断）的数组的第一个元素的值，找到后就不在回调。
    *  【array.findIndex(function(currentValue,index,arr), thisValue): any】：不改变原数组，返回通过测试（函数内判断）的数组的第一个元素的索引，找到后就不在回调。
* 存
* 传
* 转
    * 【Array.join(String): String】：不改变原数组，返回以string为间隔合并起来的字符串
    * 【Array.toString(): String】：不改变原数组，返回以“,”为间隔合并起来的字符串
* 量
    * length属性：返回数组长度
* 态
    * 【Array.isArray(obj): Boolean】：判断obj是否是数组
* 计
    * 【array.reduce(function(total, currentValue, currentIndex, arr), initialValue)】：接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。
    * 
> http://www.runoob.com/jsref/jsref-obj-array.html
> http://www.w3school.com.cn/jsref/jsref_obj_array.asp

### Set集合类:
值是不可重复的
```TypeScript
let s = new Set([1,2,3,4,5,2,2,3,5]);   //  会自动实现数组去重哦
```
add(value)：添加某个值，返回Set结构本身。
delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
has(value)：返回一个布尔值，表示该值是否为Set的成员。
clear()：清除所有成员，没有返回值。

keys()：返回键名的遍历器
values()：返回键值的遍历器
entries()：返回键值对的遍历器
forEach()：使用回调函数遍历每个成员

### map
set(key，val)：添加某个值，返回Map结构本身。
get(key)： 读取某个键，如果该键未知，则返回undefined
delete(key)： 删除某个键，返回一个布尔值，表示删除是否成功。
has(key)： 返回一个布尔值，表示该值是否为Map的键。
clear() : 清除所有成员，没有返回值。

keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器。
forEach()：遍历 Map 的所有成员。

[...map]：转换成二维数组

> 记：Map是set多一个get，其他和Set一样
### Number

### Math
* Math.sqrt(number: Number): Number：返回number的平方根
* Math.pow(x: Number,y: Number): Number：返回x的y次方
## 元组 Tuple
声明一个带有多个指定类型的数组
```
// Declare a tuple type
let x: [string, number];
```
## 类的声明
### Interface：接口类（抽象类的抽象类）
    使用implements实现。可重写和添加新方法；
    接口不能被继承，但可以继承多个其他接口类；
    无实体方法。
    无成员变量。
    无“class”声明
    应用：
        多态的实现
        代码的规范
        多个继承
    记忆：都是i开头
### Abstract：抽象类（用来描绘某一类对象的共有本质）
    使用extend继承抽象类。抽象方法**不能有实现代码**且实现后必须写完整所有抽象方法；
    使用只能重写，不能创建实例对象
    abstract方法的类必须是abstract，但abstract类的方法可以不为absract；
    实现多个用“,”隔开；
    有成员变量
### Final（最终的，不可更改的）:
    用在类上：不可继承，成员方法都会被隐式地指定为final方法；
    用在方法上：标明方法不可覆盖重写；
    用在变量上：变量指向的对象不可变但所指对象的值可变；
> 没有Interface和Abstract声明的类也可以implements和extend
## void 和 undefined 有什么区别？
void作为类在函数声明中使用表示不需要返回;void作为运算符使用if (undefined === void 0)等于true
undefined是一个基本类型；和null一样是所有类型(代码使用strictNullChecks标记，或者是never类不能赋值null)的子类，可以赋值给各种类型；表示不存在，未实现；
## 什么是 never 类型？
表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 
## 下面代码会不会报错？怎么解决？
```TypeScript
const obj = {
    a: 1,
    b: 'string',
};
  
obj.c = null;
```
改为：
```TypeScript
const obj = {
    a: 1,
    b: 'string',
    c: 1
};
  
obj.c = null;
```
## readonly 和 const 有什么区别？
readonly是只读不能写，const是地址不能变，比如const声明的数组值就可以变，但不能对整个数组重新赋值

## 什么是 class mixins类型混入, 如何实现？
主要是通过implements和属性拷贝合并多个类，拷贝函数如下：
```TypeScript
function applyMixins(mergeClass: any, baseClassList: any[]) {
    baseClassList.forEach(baseClass => {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(name => {
            mergeClass.prototype[name] = baseClass.prototype[name];
        })
    });
}
```
## typeof 关键词有什么用？
```TypeScript
let strClass: typeof String = String;
//  strClass.name = "String";   //  报错?提示只读
let str1 = strClass;
let str: String = new strClass();
console.log(str.name);   //  报错?
```
## keyof 关键词有什么用？
解析出一个类的属性 keyof {a:string;b:number}得出【'a' | 'b'】
> https://www.jianshu.com/p/ee2e90a45a67

## 类型声明里 「&」和「|」有什么作用？
&：用以交叉类型，声明出一个集合类
|：用以联合类型，声明变量可能为多种类型
## 类型转换
```TypeScript
let pet: any = new Parent();
function(pet: any) {
    if ((<Fish>pet).swim) {
        (<Fish>pet).swim();
    } else {
        (<Bird>pet).fly();
    }
}
```
## 下面代码里「date is Date」有什么作用？
类型断言,用以告知函数是一个类型判断函数
```TypeScript
//  返回一个类型断言
function isDate(date: any): date is Date {
  if (!date) return false;
  return Object.prototype.toString.call(date) === '[object Date]';
}
```
> https://www.cnblogs.com/qqandfqr/p/6804214.html

## tsconfig.json 里 --strictNullChecks 参数的作用是什么？
## interface 和 type 声明有什么区别？
interface是定义接口
type是类型起一个别名，不会创建出一个类
typ还可以限制字符串的值,例如：
```TypeScript
type num = "111" | "222" | "333";   //  字符串字面量类型，num只能赋值这三个
```

## declare 关键字有什么用？
声明要使用的类是js定义类型或微信等浏览器的特有类
## module 关键字有什么用？
分离功能隔离变量名
> https://www.jianshu.com/p/3d69d4ac2dfe
## 如何处理才能在 TS 中引用 CSS 或者 图片使之不报错？
```TypeScript
import "./index.scss";
import imgPath from "./home.png";
```

## 编写 d.ts 来声明下面的 js 文件
```TypeScript
class Foo {
}
module.exports = Foo;
module.exports.Bar = 1;
```

## namespace 和 module 有什么区别
內部模組 - namespace
模組之间是相近的功能，使用namespace集中功能。
外部模組 - module
模組之间是不同功能，两个模块之间的关系是通过在文件级别上使用imports和exports建立的。
区别：namespace是跨文件的，JS里的module是以文件为单位一个文件一个module

> https://www.tslang.cn/docs/handbook/namespaces-and-modules.html
> https://www.jianshu.com/p/051cfaa967de
## 如何实现 module alias?编译成 JS 能否直接运行？
配置module.exports.resolve.alias
```TypeScript
module.exports = options => ({
  cache: options.env !== 'production',
  resolve: {
    extensions: [
      '.js', '.jsx', '.ts', '.tsx', '.json'
    ],
    modules: ['node_modules'],
    alias: {
      '@src': resolve('路径')
    }
  }
})
//  使用
import Bar as SRCBar from "@src/Bar";
```

## 哪些声明类型既可以当做 type 也可以当做 value？
```TypeScript
let strClass: typeof String = String;
let str: String = new strClass();
let str1 = strClass;
```
## 装饰器


## type中文详细文档：
> http://www.runoob.com/manual/gitbook/TypeScript/_book/index.html
> https://www.tslang.cn/index.html