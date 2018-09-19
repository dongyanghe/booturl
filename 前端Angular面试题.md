
## AngularX生命周期

指令生命周期由**@angular/core**管理的,通过继承得到hook方法，构造函数在全部生命周期事件之前执行。
***
### 属性指令、结构指令、组件指令：
*   ngOnChanges：当Angular设置其接收当前和上一个对象值的数据绑定属性时响应。
*   ngOnInit：在第一个ngOnChange触发器之后，初始化组件/指令。可用于从后端服务检索模板的数据。 
*   ngDoCheck：检測并在Angular上下文发生变化时执行。
*   ngOnDestroy：在Angular销毁指令/组件之前清除。取消订阅可观察的对象并脱离事件处理程序，以避免内存泄漏。

### 组件特有（模版的生命周期）：
*   ngAfterContentInit：组件内容已初始化完毕
*   ngAfterContentChecked：在Angular检查投影到其视图中的绑定的外部内容之后。
*   ngAfterViewInit：Angular创建组件的视图后。
*   ngAfterViewChecked：在Angular检查组件视图的绑定之后。

##  使用Angular 2，和使用Angular 1相比。有什么优势？
1.  Angular 2是一个平台，不仅是一种语言
2.  更好的速度和性能
3.  更简单的依赖注入
4.  模块化。跨平台
5.  具备ES6和Typescript的优点。
6.  灵活的路由，自带延迟载入功能，采用react的路由配置方式
7.  官网友好，更容易学习

##   AngularX路由？
1.延迟加载
2.各个模块可独立配置
3.类似react的配置方式
4.支持组件缓存配置
5.支持权限控制

Route Guard仅仅是路由器执行来检查路由授权的接口方法。

保护执行后，它将解析路由数据并通过将所需的组件实例化到<router-outlet> </ router-outlet>中来激活路由器状态。

**扩展阅读：**

1.  [https://www.codeproject.com/Articles/1164813/Angular-Routing ](https://www.codeproject.com/Articles/1164813/Angular-Routing%C2%A0)
2.  [https://vsavkin.com/angular-2-router-d9e30599f9ea#.kt4z1v957](https://vsavkin.com/angular-2-router-d9e30599f9ea#.kt4z1v957)

### 什么是事件发射器？它是怎样在Angular 2中工作的？

EventEmitter是在@ angular/core模块中定义的类。由组件和指令内部声明。
```
@Output()
onValueChange: EventEmitter<any>  = new EventEmitter();
```
使用onValueChange.emit（value）方法来发出事件。
在标签上直接绑定(onValueChange)="formControl.onValueChange(value)"

### 怎样在Angular 2应用程序中使用codelyzer？

全部企业应用程序都会遵循一组编码惯例和准则。以更好的方式维护代码。Codelyzer是一个开源工具。用于执行和检查是否遵循了提前定义的编码准则。Codelyzer仅对Angular和TypeScript项目进行静态代码分析。

Codelyzer执行在tslint的顶部，其编码约定通常在tslint.json文件里定义。Codelyzer能够直接通过Angularcli或npm执行。

使用tslint，在配置文件配置：
```
"rulesDirectory": [
    "node_modules/codelyzer"
  ],
//  通过cli执行的代码：ng lint。

//  通过npm执行的代码： npm run lint
```
###  什么是延迟载入？怎样在Angular 2中启用延迟载入？

在AppModule主模块配置路由数组时使用loadChildren按模块加载
```
const appRoutes = [
  {
    path: '*',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule',  //  ...路径/文件名#模块类名
    data: {}
  }
];
> 后台管理系统一次性载入（建议GZIP压缩传输）所有页面离线存储起来，这样跳页面和二次访问会更快，所以使用延迟加载也得看需求
```
###   在Angular 2应用中，我们应该注意哪些安全威胁？

1.  避免为你的组件使用/注入动态HTML内容。
2.  假设使用外部HTML，也就是来自数据库或应用程序之外的地方。那么就须要清理它。
3.  不要将外部网址放在应用程序中，除非它是受信任的。避免网址重定向。除非它是可信的。
4.  考虑使用AOT（**运行前**）编译或离线编译。
5.  通过限制api。选择使用已知或安全环境/浏览器的app来防止XSRF攻击。

### AOT编译：
有效提升运行速度
使用限制：

*   不要对模板或样式使用require语句，使用styleUrls和templateUrls，angular2-template-loader插件会在构建时将其更改为require。
*   不要使用默认导出。
*   不要使用form.controls.controlName，使用form.get（'controlName'）
*   不要使用control.errors？.someError，使用control.hasError（'someError'）
*   不要在提供者，路由或声明中使用函数，导出函数然后引用该函数名称
*   输入，输出，视图或内容子（ren），Hostbindings以及您在模板中使用的任何字段或Angular的注释都应该是公共的

>https://yq.aliyun.com/articles/67203
###  优化Angular 2

优化取决于应用程序的类型和大小以及更多因素。

但一般来说，在优化Angular 2应用程序时。我会考虑下面几点：

1.  考虑AOT编译。
2.  确保应用程序已经经过了捆绑。uglify和tree shaking。
3.  确保应用程序不存在不必要的import语句。
4.  确保应用中已经移除了不使用的第三方库。
5.  package.json分开dependencies 和dev-dependencies的包配置。
6.  假设应用程序较大时，我会考虑延迟载入而不是全然捆绑的应用程序。
6.  使用gzip压缩传输。

##  TS中使用js定义类型或微信浏览器特有类

1.第三方库一般带有它的`.d.ts` 文件，查看其中的类型定义直接使用。
2.自己写.d.ts文件，关键字有type、declare（declare可直接在使用处声明）

在某些情况下，我们须要通过向现有类型提供一些更多的属性来扩展现有类型，或者假设我们须要定义其他类型以避免TypeScript警告。

假设我们须要扩展外部库的类型定义，一个好的做法是，我们并不是对node_modules或现有的typings目录进行修改，而是创建一个命名为“自己定义类型”的新目录。来存储全部的自己定义类型。

要定义应用程序（JavaScript / Typescript）对象的类型。我们应该在应用程序对应模块的models目录中，定义接口和实体类。

对于这些情况，我们能够通过创建我们自己的“ .d.ts”文件来实现定义或扩展类型。

**扩展阅读：**

> https://www.cnblogs.com/silin6/p/7793753.html

### Shadow DOM
* 使用document.querySelector("#div").createShadowRoot()创建，使用.shadowRoot()读取
* html由js显示，不会显示body里面的节点
* 缓存的DOM将在浏览器中呈现得更快，并提供更好的性能。
* shi使代码结构分离，互不影响
**扩展阅读：**

>1.  [https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
>2.  [https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/](https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/)
>3.  [https://code.tutsplus.com/tutorials/intro-to-shadow-dom--net-34966](https://code.tutsplus.com/tutorials/intro-to-shadow-dom--net-34966)

### 11\. 什么是AOT编译？它有什么优缺点？

AOT编译代表的是Ahead Of Time编译，当中Angular编译器在构建时，会将Angular组件和模板编译为本机JavaScript和HTML。编译好的HTML和JavaScript将会部署到Webserver，以便浏览器能够节省编译和渲染时间。

**优点：**

1.  更快的下载：由于应用程序已经编译。很多Angular编译器相关库就不再须要捆绑，应用程序包变得更小，所以该应用程序能够更快地下载。
2.  更少的Http请求数：假设应用程序没有捆绑来支持延迟载入（或不论什么原因），对于每一个关联的HTML和CSS，都会有一个单独的server请求。可是预编译的应用程序会将全部模板和样式与组件对齐，因此到server的Http请求数量会更少。
3.  更快的渲染：假设应用程序不是AOT编译，那么应用程序全然载入时，编译过程会发生在浏览器中。这须要等待下载全部必需的组件。然后等待编译器花费时间来编译应用程序。

    使用AOT编译，就能实现优化。 
4.  在构建时检測错误：由于预先编译，能够检測到很多编译时错误，能够为应用程序提供更好的稳定性。

**缺点：**

1.  仅适用于HTML和CSS，其他文件类型须要前面的构建步骤
2.  没有watch模式。必须手动完毕（bin / ngc-watch.js）并编译全部文件
3.  须要维护AOT版本号的bootstrap文件（使用cli等工具时不须要）
4.  在编译之前，须要清理步骤

**扩展阅读**：[https://angular.io/docs/ts/latest/cookbook/aot-compiler.HTML](https://angular.io/docs/ts/latest/cookbook/aot-compiler.html)

### 12\. Observables和Promises的核心差别是什么？

从堆栈溢出就是一个差别： 

当异步操作完毕或失败时。Promise会处理一个单个事件。

Observable相似于（在很多语言中的）Stream，当每一个事件调用回调函数时。同意传递零个或多个事件。通常Observable比Promise更受欢迎。由于它不但提供了Promise特性，还提供了其他特性。

使用Observable能够处理0,1或多个事件。你能够在每种情况下使用同样的API。Observable是可取消的，这相比于Promise也具有优势。

假设server的HTTP请求结果或其他一些异步操作不再须要，则Observable的订阅者能够取消订阅，而Promise将终于调用成功或失败的回调，即使你不须要通知或其提供的结果。

Observable提供像map。forEach，reduce之类的相似于数组的**运算符**，还有强大的运算符，如retry（）或replay（）等，使用起来是相当方便的。

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

***
#部分内容来源：
>https://www.cnblogs.com/mfmdaoyou/p/7389012.html