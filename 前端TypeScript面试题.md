###  TS中使用js定义类型或微信等浏览器的特有类

1.第三方库一般带有它的`.d.ts` 文件，查看其中的类型定义直接使用。
2.自己写.d.ts文件，关键字有type、declare（declare可直接在使用处声明）

在某些情况下，我们须要通过向现有类型提供一些更多的属性来扩展现有类型，或者假设我们须要定义其他类型以避免TypeScript警告。

假设我们须要扩展外部库的类型定义，一个好的做法是，我们并不是对node_modules或现有的typings目录进行修改，而是创建一个命名为“自己定义类型”的新目录。来存储全部的自己定义类型。

要定义应用程序（JavaScript / Typescript）对象的类型。我们应该在应用程序对应模块的models目录中，定义接口和实体类。

对于这些情况，我们能够通过创建我们自己的“ .d.ts”文件来实现定义或扩展类型。

**扩展阅读：**

> https://www.cnblogs.com/silin6/p/7793753.html
## Observables Promises 差别

从堆栈溢出就是一个差别： 

当异步操作完毕或失败时。Promise会处理一个单个事件。

Observable相似于（在很多语言中的）Stream，当每一个事件调用回调函数时。同意传递零个或多个事件。通常Observable比Promise更受欢迎。由于它不但提供了Promise特性，还提供了其他特性。

使用Observable能够处理**0,1或多个事件**。你能够在每种情况下使用同样的API。Observable是**可取消**的，这相比于Promise也具有优势。

假设server的HTTP请求结果或其他一些异步操作不再须要，则Observable的订阅者能够取消订阅，而Promise将终于调用成功或失败的回调，即使你不须要通知或其提供的结果。

Observable提供像map。forEach，reduce之类的相似于数组的**运算符**，还有强大的运算符，如retry()或replay()等，使用起来是相当方便的。

**Promises vs Observables**

*   **Promises：**

1.  返回单个值
2.  不可取消

*   **Observables：**

1.  能够使用多个值
2.  可取消
3.  支持map，filter，reduce和相似的操作符
4.  ES 2016提议的功能
5.  使用反应式扩展（RxJS）
6.  依据时间的变化，数组成员能够异步获取