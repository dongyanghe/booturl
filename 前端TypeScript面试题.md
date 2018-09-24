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
### Set集合类:
值是不可重复的
```TypeScript
let s = new Set([1,2,3,4,5,2,2,3,5]);   //  会自动实现数组去重哦
```
### map

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

## 什么是 class mixins, 如何实现？
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



## type中文详细文档：
> http://www.runoob.com/manual/gitbook/TypeScript/_book/index.html
> https://www.tslang.cn/index.html