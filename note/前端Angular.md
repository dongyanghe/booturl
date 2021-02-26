## AngularX、Angular1、react的dom渲染和数据绑定机制
### AngularJS1:
 采用“脏值检测”的方式，数据发生变更后，对于所有的数据和视图的绑定关系进行一次检测，识别是否有数据发生了改变，有变化进行处理，可能进一步引发其他数据的改变，所以这个过程可能会循环几次，一直到不再有数据变化发生后，将变更的数据发送到视图，更新页面展现。如果是手动对 ViewModel 的数据进行变更，为确保变更同步到视图，需要手动触发一次“脏值检测”。
### angularX
angularX的双向绑定就是数据绑定+事件绑定，模板语法是 [()] 。
引入ZoneJS对异步事件进行监听，有数据改动后触发angular的脏检测机制，对新旧数据进行对比，每个组件都有它的检测器ChangeDetector，对节点从上到下进行深层次的遍历检测。
#### 提供两种检测策略：
OnPush策略：我知道我没变，别查我。
手动控制刷新：我变了，只查我。
```TypeScript
export enum ChangeDetectionStrategy { 
  OnPush, // 表示变化检测对象的状态为`CheckOnce` 
  Default, // 表示变化检测对象的状态为`CheckAlways`
}
@Component({
  template: `
    <h2>{{vData.name}}</h2>
    <span>{{vData.email}}</span>
  `,
  // 在只接受输入的子组件中采用onPush策略。
  changeDetection: ChangeDetectionStrategy.OnPush
})
```
#### 手动控制：
变化检测对象引用ChangeDetectorRef给开发者提供的方法有以下几种：
* markForCheck()：将检查组件的所有父组件所有子组件，即使设置了变化检测策略为onPush。
* detach()：将变化检测对象脱离检测对象树，不再进行变化检查；结合detectChanges可实现局部变化检测。（采用onPush策略之后的组件detach()无效）
* detectChanges()：将检测该组件及其子组件，结合detach可实现局部检测。
* checkNoChanges(): 检测该组件及其子组件，如果有变化存在则报错，用于开发阶段二次验证变化已经完成。
* reattach()：将脱离的变化检测对象重新链接到变化检测树上。
#### 与angular1差别：
AngularX与Angularjs都采用变化检测机制，前者优于后者主要体现在：
* 单项数据流动
* 以组件为单位维度独立进行检测
* 生产环境只进行一次检查
* 可自定义的变化检测策略：Default和onPush
* 可自定义的变化检测操作：markForcheck()、detectChanges()、detach()、reattach()、checkNoChanges()
* 代码实现上的优化，据说采用了VM friendly的代码。
* 
> https://blog.csdn.net/try_try_try/article/details/80111985
### react16

## AngularX生命周期
指令生命周期由**@angular/core**管理的,通过继承得到hook方法，构造函数在全部生命周期事件之前执行。
### 属性指令、结构指令、组件指令生命周期：
*   ngOnChanges：当 Angular（重新）**设置数据绑定输入属性时**响应。 该方法接受当前和上一属性值的 SimpleChanges 对象当被绑定的输入属性的值发生变化时调用，首次调用一定会发生在 ngOnInit() 之前。
*   ngOnInit：在 Angular **第一次显示数据绑定和设置指令/组件的输入属性之后**，初始化指令/组件。在第一轮 ngOnChanges() 完成之后调用，只调用一次。
*   ngDoCheck：检測并在Angular上下文发生变化时执行。在每个 Angular 变更检测周期中调用，**ngOnChanges() 和 ngOnInit() 之后**。
*   ngOnDestroy：在Angular销毁指令/组件**之前**清除。可在这里取消订阅可观察的对象并脱离事件处理程序，以避免内存泄漏。或者做离页提示
### 组件特有（模版的生命周期）：
*   ngAfterContentInit：组件内容已初始化完毕后，**第一次 ngDoCheck() 之后调用**，只调用一次。
*   ngAfterContentChecked：在Angular检查投影到其视图中的绑定的外部内容之后。**ngAfterContentInit() 和每次 ngDoCheck() 之后**调用
*   ngAfterViewInit：Angular创建组件的视图后。**第一次 ngAfterContentChecked() 之后**调用，只调用一次。
*   ngAfterViewChecked：在Angular检查组件视图的绑定之后。ngAfterViewInit() 和**每次 ngAfterContentChecked() 之后**调用。
## RXJS
### v6版最新变化：
1. 导入方式的变化
原来的这种导入方式：
import { Observable } from "rxjs/Observable";
import { concat } from "rxjs/observable/concat";
import { map } from "rxjs/operators/map";
import { take } from "rxjs/operators/take";

被如下导入方式所替代：
import { concat, Observable } from "rxjs";
import { map, take } from "rxjs/operators";
2. 具体操作符的使用变化
原来使用方式是：
data$.map(x => x + 1)
现在使用方式变为：
data$.pipe(map(x => x + 1))

##  使用AngularX，和使用Angular 1相比。有什么优势？
1.  AngularX是一个平台，不仅是一种语言
2.  更好的速度和性能
3.  更简单的依赖注入
4.  模块化。跨平台
5.  具备ES6和Typescript的优点。
6.  灵活的路由，自带延迟载入功能，采用react的路由配置方式
7.  官网友好，更容易学习

#### angular1 双向数据绑定与vue数据的双向数据绑定
1.  二者都是 MVVM 模式开发的典型代表
2.  angular 是通过脏检测实现，angular1 会将 UI 事件，请求事件，settimeout 这类延迟，的对象放入到事件监测的脏队列，当数据变化的时候，触发 $diget 方法进行数据的更新，视图的渲染
3.  vue 通过数据属性的数据劫持和发布订阅的模式实现，大致可以理解成由3个模块组成，observer 完成对数据的劫持，compile 完成对模板片段的渲染，watcher 作为桥梁连接二者，订阅数据变化及更新视图
## angularX常用注解（装饰器）：
* @NgModule：模块定义装饰器
* @Component：组件定义装饰器
* @Directive：指令定义装饰器
* @Pipe：管道定义装饰器
* @Injectable：服务定义装饰器，声明该类是单例使用依赖注入
* @Output：输出数据/事件
* @Input：输入数据/事件
* @ViewChild：绑定第一个查询到的dom节点或指令
* @ViewChildren：绑定多个dom节点或指令
## angularX代码库：
* @angular/core：这里包含了很多常用的模块
  * NgModule：模块定义装饰器
  * Component：组件定义装饰器
  * Directive：指令定义装饰器
  * Pipe ：管道定义装饰器
  * PipeTransform：管道接口
  * Injectable：服务定义装饰器
  * ElmentRef：元素引用
  * ViewChild：获取子元素
  * Render：渲染
  * Input：接受参数输入
  * Output：事件输出
  * EventEmitter：触发自定义事件
* @angular/common
  * CommonModule：通用模块，包含内置指令ngIf，ngFor
* @angular/forms
  * FormsModule：定义模版驱动表单
  * ReactiveFormsModule：定义响应式表单
  * FormGroup, FormArray, FormControl, FormBuilder：响应式表单元素
  * Validators：表单校验
* @angular/http
  * HttpModule：http请求模块
* @angular/router
  * RouterModule 路由模块
  * Routes 路由数据结构
* @angular/platform-browser
  * platformBrowser：AoT编译
  * BrowserModule：浏览器支持，注意该模块导入了CommonModule，然后导出去，所以引用了这个模块也就引用了CommonModule
* @angular/platform-browser-dynamic
  * platformBrowserDynamic：JIT编译
* @angular/animations
  * trigger:创建一个动画
## AngularX路由
### 基本功能：
1. 延迟加载
2. 各个模块可独立配置
3. 类似react的配置方式
4. 支持组件缓存配置
5. 支持权限控制
6. 可配置必传参数
### 权限控制：
Route Guard仅仅是路由器执行来检查路由授权的接口方法。
* canActivate： 控制是否允许进入路由。
* canActivateChild： 等同 canActivate，只不过针对是所有子路由。
* canDeactivate： 控制是否允许离开路由。

保护执行后，它将解析路由数据并通过将所需的组件实例化到<router-outlet> </ router-outlet>中来激活路由器状态。

>[angular4.0 路由守卫详解](http://www.mamicode.com/info-detail-2121549.html)
### 延迟载入
在AppModule主模块配置路由数组时使用loadChildren按模块加载
canLoad： 控制是否允许延迟加载整个模块。
```
const appRoutes = [
  {
    path: '*',  //  找不到的路径一律跳到login
    <!-- component：,组件 -->
    redirectTo: 'login',  //  跳转路径
    pathMatch: 'full', //  默认为前缀匹配 "prefix"; "full" 为完全匹配
    <!-- outlet：字符串，路由目标，面对多个路由的情况 -->
    <!-- children：Routes 子路由相关 -->
  },
  {
    path: 'workspace',
    loadChildren: './workspace/workspace.module#WorkspaceModule',  //  ...路径/文件名#模块类名
    data: {}
  }
];
> 有些网络环境差的后台管理系统一次性载入（建议GZIP压缩传输）所有页面离线存储起来，这样跳页面和二次访问也会更快，所以使用延迟加载也得看需求
```

## 事件发射器

EventEmitter是在@ angular/core模块中定义的类。由组件和指令内部声明。
```
@Output()
onValueChange: EventEmitter<any>  = new EventEmitter();
```
使用onValueChange.emit（value）方法来发出事件。
在父级标签上直接绑定(onValueChange)="formControl.onValueChange(value)"

## 怎样在Angular2应用程序中使用codelyzer？

全部企业应用程序都会遵循一组编码惯例和准则。以更好的方式维护代码。Codelyzer是一个开源工具。用于执行和检查是否遵循了提前定义的编码准则。Codelyzer仅对Angular和TypeScript项目进行静态代码分析。

Codelyzer执行在tslint的顶部，其编码约定通常在tslint.json文件里定义。Codelyzer能够直接通过Angularcli或npm执行。

使用tslint，在配置文件配置：
```TypeScript
"rulesDirectory": [
    "node_modules/codelyzer"
  ],
//  通过cli执行的代码：ng lint。

//  通过npm执行的代码： npm run lint
```

## AngularX应用的安全处理
1.  避免动态操作HTML内容。
2.  模板中的 HTML、Attribute 和绑定表达式（还没有绑定到值的时候）会被当做可信任的。所以绑定的值不能是用户输入的， Angular 将对这些值进行无害化处理（Sanitize），对不可信的值进行编码。
3.  如果使用外部HTML，也就是来自数据库或应用程序之外的地方。那么就须要清理它。
4.  不要将外部网址放在应用程序中，除非它是受信任的。避免网址重定向。除非它是可信的。
5.  考虑使用AOT（**运行前**）编译或离线编译。
6.  通过限制api。选择使用已知或安全环境/浏览器的app来防止XSRF攻击。

## AOT编译：
有效提升运行速度
使用限制：

*   不要对模板或样式使用require语句，使用styleUrls和templateUrls，angular2-template-loader插件会在构建时将其更改为require。
*   不要使用默认导出。
*   不要使用form.controls.controlName，使用form.get（'controlName'）
*   不要使用control.errors？.someError，使用control.hasError（'someError'）
*   不要在提供者，路由或声明中使用函数，导出函数然后引用该函数名称
*   输入，输出，视图或内容子（ren），Hostbindings以及您在模板中使用的任何字段或Angular的注释都应该是公共的

>https://yq.aliyun.com/articles/67203

##  优化AngularX
但一般来说，在优化AngularX应用程序时。我会考虑下面几点：
1. 使用AOT编译。
2. 确保应用程序已经经过了捆绑。uglify和tree shaking。
3. 确保应用程序不存在不必要的import语句。
4. 确保应用中已经移除了不使用的第三方库。
5. package.json分开dependencies 和dev-dependencies的包配置。
6. 假设应用程序较大时，我会考虑延迟载入而不是全然捆绑的应用程序。
7. 使用gzip压缩传输。
8. 生命周期函数里面不要写太久的计算代码
## Shadow DOM
* 使用document.querySelector("#div").createShadowRoot()创建，使用.shadowRoot()读取
* html由js显示，不会显示body里面的节点
* 缓存的DOM将在浏览器中呈现得更快，并提供更好的性能。
* shi使代码结构分离，互不影响

>[https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
>[https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/](https://glazkov.com/2011/01/14/what-the-heck-is-shadow-dom/)
>[https://code.tutsplus.com/tutorials/intro-to-shadow-dom--net-34966](https://code.tutsplus.com/tutorials/intro-to-shadow-dom--net-34966)

## AOT编译 优缺点
AOT编译代表的是Ahead Of Time编译，当中Angular编译器在构建时，会将Angular组件和模板编译为本机JavaScript和HTML。编译好的HTML和JavaScript将会部署到Webserver，以便浏览器能够节省编译和渲染时间。
### 优点：
1.  更快的下载：由于应用程序已经编译。很多Angular编译器相关库就不再须要捆绑，应用程序包变得更小，所以该应用程序能够更快地下载。
2.  更少的Http请求数：假设应用程序没有捆绑来支持延迟载入（或不论什么原因），对于每一个关联的HTML和CSS，都会有一个单独的server请求。可是预编译的应用程序会将全部模板和样式与组件对齐，因此到server的Http请求数量会更少。
3.  更快的渲染：假设应用程序不是AOT编译，那么应用程序全然载入时，编译过程会发生在浏览器中。这须要等待下载全部必需的组件。然后等待编译器花费时间来编译应用程序。

    使用AOT编译，就能实现优化。 
4.  在构建时检測错误：由于预先编译，能够检測到很多编译时错误，能够为应用程序提供更好的稳定性。

### 缺点：

1.  仅适用于HTML和CSS，其他文件类型须要前面的构建步骤
2.  没有watch模式。必须手动完毕（bin / ngc-watch.js）并编译全部文件
3.  须要维护AOT版本号的bootstrap文件（使用cli等工具时不须要）
4.  在编译之前，须要清理步骤

> [angular官网AOT](https://angular.cn/guide/aot-compiler)

## angularX高压打包部分命令
```
ng build --aot
ionic build --prod
```

## 组件通信
### 父组件到子组件:
  * 父组件@outOut输出，子组件@Input输入
  * 使用@ViewChild或@ViewChildren
### 子组件到父组件：
  * 子组件自定义事件用@Output传出，父组件用事件绑定获取。
  * 使用EventEmitter事件发射器
### 兄弟组件
  * 将他们要共享的数据都在父组件注入后分别传递给它们
  * 使用EventEmitter事件发射器
  * 使用Observable观察者模式

## 数据绑定
* 属性绑定必须加attr：
```TypeScript
<tr><td [attr.colspan]="1 + 1">One-Two</td></tr>
// 或者
<tr><td attr.colspan="{{1 + 1}}">One-Two</td></tr>
```
* 双向绑定语法：
```TypeScript
//  将click单向绑定给clickFun
<input (click)='clickFun($event)' >
// 将valueStr单向绑定给ngModel
// <input [ngModel]={{valueStr}} >
//  将valueStr双向绑定给ngModel
<input [(ngModel)]="valueStr" >
```
* 模版引用绑定：
模版引用变量（# ／ ref-）
可以在元素上用#或者ref-前缀来标记这个元素，然后在其他地方引用。
```TypeScript
<input #fax placeholder="fax number">
// 或者
// <input ref-fax placeholder="fax number">
<button (click)="callFax(fax.value)">Fax</button>
```

## 响应式表单
### 表单对象：
* ReactiveFormsModule：响应式表单的 NgModule。
* FormControl:管理单体表单控件的值和有效性状态。它对应于 HTML 的表单控件，比如input或 select。
* FormGroup:管理一组 AbstractControl 实例的值和有效性状态。该组的属性中包括了它的子控件。组件中的顶级表单就是 FormGroup。
* FormArray:管理一些 AbstractControl 实例数组的值和有效性状态。
* AbstractControl:所有三种表单控件类（FormControl、FormGroup 和 FormArray）的抽象基类。它提供了一些公共的行为和属性。
* FormBuilder:一个可注入的服务，提供一些用于提供创建控件实例的工厂方法。
### 指令：
* FormControlDirective：把一个独立的 FormControl 实例绑定到表单控件元素。
* FormControlName：把一个现有 FormGroup 中的 FormControl 根据名字绑定到表单控件元素。
* FormGroupDirective：把一个现有的 FormGroup 绑定到 DOM 元素。
* FormGroupName：把一个内嵌的 FormGroup 绑定到一个 DOM 元素。
* FormArrayName：把一个内嵌的 FormArray 绑定到一个 DOM 元素。
### 与模版驱动表单区别：
* 响应式表单是同步的，而模板驱动表单是异步的，模板驱动表单必须使用 setTimeout 等待一个变更检测周期才能从控件中提取值、测试有效性，或把它设置为新值。
* Angular 指令会根据你提供的数据绑定信息（ngModel 等指令）替你创建表单控件对象。Angular 会自动更新这个可变的数据模型。
### 表单校验：
  
## 模版驱动表单：

## 服务与依赖注入：

## 指令：

## 管道：

## 模块：
这是一个典型的模块声明：
```TypeScript
import { NgModule} from '@angular/core';
import { Http, HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, RouteReuseStrategy } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import {HttpClient, HttpClientModule , HttpResponse} from '@angular/common/http';
export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}
@NgModule({
  //  当前 NgModule 在 getModuleFactory 中的名字或唯一标识符。 如果为 undefined，则该模块不会被注册进 getModuleFactory 中。
  id: 'UUID',
  //  如果为 true，则该模块将会被 AOT 编译器忽略，因此永远不会用 JIT 编译它。
  jit: true,
  /*导入需要的模块*/
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpModule,
    JsonpModule,
    HttpClientModule,
    NgZorroAntdModule.forRoot(),
    //  多语言模块，
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    }),
    //  路由器会接受第一个匹配上导航所要求的路径那个路由。
    RouterModule.forRoot(appRoutes,
      {
        enableTracing: false //  打印路由
      }),
  ],
  //  声明该模块拥有的一组组件、指令和管道（统称可声明对象），子集可共用
  declarations: [
    AppComponent
  ],
  //  导出此模块拥有的一组组件、指令和管道可以在导入了本模块的模块下任何组件的模板中使用。 导出的这些可声明对象就是该模块的公共 API。
  exports: [
    
  ],
  // 当该模块引导时需要进行引导的组件。列在这里的所有组件都会自动添加到 entryComponents 中。
  bootstrap: [
     AppComponent
  ],
  // 编译此 NgModule 中的组件集，这样它们才可以动态加载到视图中，让其他模块直接使用
  entryComponents: [],
  /*导入需要的服务提供者*/
  providers: [
    HttpClient,
    { provide: RouteReuseStrategy, useClass: SimpleReuseStrategy }
  ],
  //  该 NgModule 中允许使用的声明元素的 schema（HTML 架构）。 元素和属性（无论是 Angular 组件还是指令）都必须声明在 schema 中
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
```