
## 当你调用setState的时候，发生了什么事？
当调用 setState 时，React会做的第一件事情是将传递给 setState 的对象合并到组件的当前状态。这将启动一个称为 **和解（reconciliation）**的过程。和解（reconciliation）的最终目标是以最有效的方式，根据这个新的状态来更新UI。 为此，React将构建一个新的 React 元素树（您可以将其视为 UI 的对象表示）。
一旦有了这个树，为了弄清 UI 如何响应新的状态而改变，React 会将这个新树与上一个元素树相比较（ diff ）。
通过这样做， React 将会知道发生的确切变化，并且通过了解发生什么变化，只需在绝对必要的情况下进行更新即可最小化 UI 的占用空间。
## React 的 setState 为何是异步渲染？
为了防止一次性执行多次setState而带来的渲染性能问题。即，你如果连续不断执行 100 次setState的话，那么 React 是否有必要渲染 100 次？—— 肯定没必要。第一，浏览器会卡死；第二，用户只需要看到最后的结果即可，不用关心前 99 次的过程。
## vue、react、angularX 如何解析模板？
第一步是将非结构化的模板字符串，转变成结构化的 JS 对象，**抽象语法树（AST）**。其实就是一个 JS 对象，这样就结构化了。
第二步，将 AST 转换成一个 render 函数，步骤是先转换为一段函数体的字符串，然后再用new Function(...)生成函数。
第三部，渲染时执行 render 函数，返回 **虚拟 DOM 对象**，然后执行虚拟 DOM 的 **patch方法**，渲染成真正的 html 。

## 在 React 当中 Element 和 Component 有何区别？
简单地说，一个 React element 描述了你想在屏幕上看到什么。换个说法就是，一个 React element 是一些 UI 的对象表示。

一个 React Component 是一个函数或一个类，它可以接受输入并返回一个 React element t（通常是通过 JSX ，它被转化成一个 createElement 调用）。

> [React Elements vs React Components](https://segmentfault.com/a/1190000008447693)

## react生命周期函数

这个问题要考察的是组件的生命周期

一、初始化阶段(装载周期)：

getDefaultProps:配置默认的props,也可以用dufaultProps设置组件的默认属性.

getInitialState:初始化state

**componentWillMount**：组件即将装载前，组件将渲染到页面上,整个生命周期只调用一次，此时可以修改state。

render:组件在这里生成虚拟的DOM节点，进行diff算法，更新dom树，此时就不能更改state。

**componentDidMount**:组件装载后

二、运行中状态(变更周期)：

**componentWillReceiveProps(nextProps)**: 组件接收到下一个属性的时，一次更新中被调用多次。（旧版用来根据 props 来更新 state，或者触发一些回调，如动画或页面跳转等,reactV16.3后建议使用getDerivedStateFromProps）
***getDerivedStateFromProps***: 需要通过下一个属性获取state时，新版react推出的，只能访问nextProps不能读取this.porps
**shouldComponentUpdate**:  在组件更新前，（可以返回false，接收数据后不更新，阻止render调用，后面的函数不会被继续执行了）一次更新中可能被调用多次。
**componentWillUpdate**:  组件即将更新，不能修改属性和状态,此时读取render的dom可能未commit
render: 组件重新描绘
***getSnapshotBeforeUpdate(prevProps, prevState)***:  新版react推出的，在最终的render之前被调用，读取到的DOM元素状态是可以保证与 componentDidUpdate中一致的。一般用来判断dom后返回snapshot给componentWillUpdate用以更新state
**componentDidUpdate(prevProps, prevState, snapshot)**:组件已经更新

三、销毁阶段：

**componentWillUnmount**:组件即将销毁
> 记：获取数据的是是get开头，控制组件更新的是should开头，以props和component为线索的是component,props/component的之前是Will之后是Did
> https://blog.csdn.net/c_kite/article/details/80303341
## react diff算法
### diff策略
* Web UI 中DOM节点跨层级的移动操作特别少，可以忽略不计
* 拥有相同类的两个组件将会生成相似的树形结构，拥有不同类的两个组件将会生成不同的树形结构。
* 对于同一层级的一组子节点，它们可以通过唯一id进行区分。

把树形结构按照层级分解，只比较同级元素。
给列表结构的每个单元添加唯一的key属性，方便比较。
React 只会匹配相同 class（组件名）的 component（这里面的class指的是）
合并操作，调用 component 的 setState 方法的时候, React 将其标记为 dirty.到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.

选择性子树渲染。开发人员可以重写shouldComponentUpdate提高diff的性能。

参考链接：

https//segmentfault.com/a/1190000000606216
> https://blog.csdn.net/qq_26708777/article/details/78107577?utm_source=copy 
## 什么时候在功能组件( Class Component )上使用类组件( Functional Component )？
如果您的组件具有状态( state )或生命周期方法，请使用 Class 组件。否则，使用功能组件

## 什么是 React 的 refs ，为什么它们很重要？
refs就像是一个逃生舱口，允许您直接访问DOM元素或组件实例。为了使用它们，您可以向组件添加一个 ref 属性，该属性的值是一个回调函数，它将接收底层的 DOM 元素或组件的已挂接实例，作为其第一个参数。
```TypeScript
class UnControlledForm extends Component {
  handleSubmit = () => {
    console.log("Input Value: ", this.input.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          ref={(input) => this.input = input} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
```
以上注意到我们的输入字段有一个 ref 属性，其值是一个函数。该函数接收我们然后放在实例上的实际的 DOM 元素，以便在 handleSubmit 函数内部访问它。经常误解的是，您需要使用类组件才能使用 ref ，但 ref 也可以通过利用 JavaScript 中的 闭包 与 功能组件( functional components )一起使用。
```TypeScript
function CustomForm ({handleSubmit}) {
  let inputElement
  return (
    <form onSubmit={() => handleSubmit(inputElement.value)}>
      <input
        type='text'
        ref={(input) => inputElement = input} />
      <button type='submit'>Submit</button>
    </form>
  )
}
```
## React 中的keys是什么，为什么它们很重要？
keys是什么帮助 React 跟踪哪些项目已更改、添加或从列表中删除。
```TypeScript
  return (
    <ul>
      {this.state.todoItems.map(({task, uid}) => {
        return <li key={uid}>{task}</li>
      })}
    </ul>
  )
}
```
每个 keys 在兄弟元素之间是独一无二的。我们已经谈过几次关于和解（reconciliation）的过程，而且这个和解过程（reconciliation）中的一部分正在执行一个新的元素树与最前一个的差异。keys 使处理列表时更加高效，因为 React 可以使用子元素上的 keys 快速知道元素是新的还是在比较树时才被移动。

而且 keys 不仅使这个过程更有效率，而且没有 keys ，React 不知道哪个本地状态对应于移动中的哪个项目。所以当你 map 的时候，不要忽略了 keys 。

## 看下面的代码: 如果您在 下创建了一个 React 元素， 的组件定义将如何？
```TypeScript
<Twitter username='tylermcginnis33'>
  {(user) => user === null
    ? <Loading />
    : <Badge info={user} />}
</Twitter>
import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'
// fetchUser接收用户名返回 promise
// 当得到 用户的数据的时候 ，返回resolve 状态

class Twitter extends Component {
  // 在这里写下你的代码
}
```
如果你不熟悉渲染回调模式（render callback pattern），这将看起来有点奇怪。在这种模式中，一个组件接收一个函数作为它的 child。注意上面包含在 标签内的内容。 Twitter 组件的 child 是一个函数，而不是你曾经习以为常的一个组件。 这意味着在实现 Twitter 组件时，我们需要将 props.children 作为一个函数来处理。

以下是我的答案。
```TypeScript
import React, { Component, PropTypes } from 'react'
import fetchUser from 'twitter'

class Twitter extends Component {
  state = {
    user: null,
  }
  static propTypes = {
    username: PropTypes.string.isRequired,
  }
  componentDidMount () {
    fetchUser(this.props.username)
      .then((user) => this.setState({user}))
  }
  render () {
    return this.props.children(this.state.user) //  
  }
}
```
值得注意的是，正如我上面提到的，我通过调用它并传递给 user 来把 props.children 处理为为一个函数。

这种模式的好处是我们已经将我们的父组件与我们的子组件分离了。父组件管理状态，父组件的消费者可以决定以何种方式将从父级接收的参数应用于他们的 UI。

为了演示这一点，我们假设在另一个文件中，我们要渲染一个 Profile 而不是一个 Badge, 因为我们使用渲染回调模式，所以我们可以轻松地交换 UI ，而不用改变我们对父（Twitter）组件的实现。
```TypeScript
<Twitter username='tylermcginnis33'>
  {(user) => user === null
    ? <Loading />
    : <Profile info={user} />}
</Twitter>
```
## 受控组件( controlled component )与不受控制的组件( uncontrolled component )有什么区别？
React 的很大一部分是这样的想法，即组件负责控制和管理自己的状态。

当我们将 native HTML 表单元素（ input, select, textarea 等）投入到组合中时会发生什么？我们是否应该使用 React 作为“单一的真理来源”，就像我们习惯使用React一样？ 或者我们是否允许表单数据存在 DOM 中，就像我们习惯使用HTML表单元素一样？ 这两个问题是受控（controlled） VS 不受控制（uncontrolled）组件的核心。

受控组件是React控制的组件，也是表单数据的唯一真理来源。

如下所示， username 不存在于 DOM 中，而是以我们的组件状态存在。每当我们想要更新 username 时，我们就像以前一样调用setState。
```TypeScript
class ControlledForm extends Component {
  state = {
    username: ''
  }
  updateUsername = (e) => {
    this.setState({
      username: e.target.value,
    })
  }
  handleSubmit = () => {}
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.username}
          onChange={this.updateUsername} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
```
不受控制( uncontrolled component )的组件是您的表单数据由 DOM 处理，而不是您的 React 组件。

我们使用 refs 来完成这个。
```TypeScript
class UnControlledForm extends Component {
  handleSubmit = () => {
    console.log("Input Value: ", this.input.value)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          ref={(input) => this.input = input} />
        <button type='submit'>Submit</button>
      </form>
    )
  }
}
```
虽然不受控制的组件通常更容易实现，因为您只需使用引用从DOM获取值，但是通常建议您通过不受控制的组件来支持受控组件。

主要原因是受控组件 支持即时字段验证 ，允许您有条件地禁用/启用按钮，强制输入格式，并且更多的是 『the React way』。

## 在哪个生命周期事件中你会发出 AJAX 请求，为什么？
AJAX 请求应该在 componentDidMount 生命周期事件中。 有几个原因:

Fiber，是下一次实施React的和解算法，将有能力根据需要启动和停止渲染，以获得性能优势。其中一个取舍之一是 componentWillMount ，而在其他的生命周期事件中出发 AJAX 请求，将是具有 “非确定性的”。 这意味着 React 可以在需要时感觉到不同的时间开始调用 componentWillMount。这显然是AJAX请求的不好的方式。
-您不能保证在组件挂载之前，AJAX请求将无法 resolve。如果这样做，那意味着你会尝试在一个未挂载的组件上设置 StState，这不仅不会起作用，反而会对你大喊大叫。 在 componentDidMount 中执行 AJAX 将保证至少有一个要更新的组件。

## shouldComponentUpdate 应该做什么，为什么它很重要？
上面我们讨论了 reconciliation ，什么是 React 在 setState 被调用时所做的。在生命周期方法 shouldComponentUpdate 中，允许我们选择退出某些组件（和他们的子组件）的 reconciliation 过程。

我们为什么要这样做？

如上所述，“和解（ reconciliation ）的最终目标是以最有效的方式，根据新的状态更新用户界面”。如果我们知道我们的用户界面（UI）的某一部分不会改变，那么没有理由让 React 很麻烦地试图去弄清楚它是否应该渲染。通过从 shouldComponentUpdate 返回 false，React 将假定当前组件及其所有子组件将保持与当前组件相同。

您如何告诉React 构建（build）生产模式，该做什么？
通常，您将使用Webpack的 DefinePlugin 方法将 NODE_ENV 设置为 production。这将剥离像 propType 验证和额外的警告。除此之外，还有一个好主意，可以减少你的代码，因为React使用 Uglify 的 dead-code 来消除开发代码和注释，这将大大减少你的包的大小。

## 为什么要使用 React.Children.map（props.children，（）=>） 而不是 props.children.map（（）=>）

因为不能保证props.children将是一个数组。

以此代码为例，
```TypeScript
<Parent>
  <h1>Welcome.</h1>
</Parent>
```
在父组件内部，如果我们尝试使用 props.children.map 映射孩子，则会抛出错误，因为 props.children 是一个对象，而不是一个数组。

如果有多个子元素，React 只会使props.children成为一个数组。就像下面这样：
```TypeScript
<Parent>
  <h1>Welcome.</h1>
  <h2>props.children will now be an array</h2>
</Parent>
```
这就是为什么你喜欢 React.Children.map ，因为它的实现考虑到 props.children 可能是一个数组或一个对象。

描述事件在React中的处理方式。
为了解决跨浏览器兼容性问题，您的 React 中的事件处理程序将传递 SyntheticEvent 的实例，它是 React 的浏览器本机事件的跨浏览器包装器。

这些 SyntheticEvent 与您习惯的原生事件具有相同的接口，除了它们在所有浏览器中都兼容。有趣的是，React 实际上并没有将事件附加到子节点本身。React 将使用单个事件监听器监听顶层的所有事件。这对于性能是有好处的，这也意味着在更新DOM时，React 不需要担心跟踪事件监听器。

## createElement 和 cloneElement 有什么区别？
createElement 是 JSX 被转载到的，是 React 用来创建 React Elements 的内容(一些 UI 的对象表示)cloneElement用于克隆元素并传递新的 props。他们钉住了这两个��的命名。

可以选择性地传递给 setState 的第二个参数是什么，它的目的是什么？
一个回调函数，当setState结束并 re-rendered 该组件时将被调用。一些没有说出来的东西是 setState 是 异步 的，这就是为什么它需要一个第二个回调函数。通常最好使用另一个生命周期方法，而不是依赖这个回调函数，但是很高兴知道它存在。
```TypeScript
this.setState(
  { username: 'tylermcginnis33' },
  () => console.log('setState has finished and the component has re-rendered.')
)
```
## 这段代码有什么问题？
```TypeScript
this.setState((prevState, props) => {
  return {
    streak: prevState.streak + props.count
  }
})
```
没毛病。但是这种写法很少被使用，并不是众所周知的，就是你也可以传递一个函数给setState，它接收到先前的状态和道具并返回一个新的状态，正如我们在上面所做的那样。它不仅没有什么问题，而且如果您根据以前的状态（state）设置状态，推荐使用这种写法。

## redux中间件

中间件提供第三方插件的模式，自定义拦截 action -> reducer 的过程。变为 action -> middlewares -> reducer 。这种机制可以让我们改变数据流，实现如异步 action ，action 过滤，日志输出，异常报告等功能。

常见的中间件：

redux-logger：提供日志输出

redux-thunk：处理异步操作

redux-promise：处理异步操作，actionCreator的返回值是promise

 

## redux有什么缺点

1.一个组件所需要的数据，必须由父组件传过来，而不能像flux中直接从store取。

2.当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还是会重新render，可能会有效率影响，或者需要写复杂的shouldComponentUpdate进行判断。
## react组件的划分业务组件技术组件？

根据组件的职责通常把组件分为UI组件和容器组件。

UI 组件负责 UI 的呈现，容器组件负责管理数据和逻辑。

两者通过React-Redux 提供connect方法联系起来。

> http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

 

## react性能优化是哪个周期函数？

shouldComponentUpdate 这个方法用来判断是否需要调用render方法重新描绘dom。因为dom的描绘非常消耗性能，如果我们能在shouldComponentUpdate方法中能够写出更优化的dom diff算法，可以极大的提高性能。
> https//segmentfault.com/a/1190000006254212
## 为什么虚拟dom会提高性能?

虚拟dom相当于在js和真实dom中间加了一个缓存，利用dom diff算法避免了没有必要的dom操作，从而提高性能。

具体实现步骤如下：

用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的 DOM 树，插到文档当中

当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异

把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。

> https://www.zhihu.com/question/29504639?sort=created
 

## react性能优化方案

（1）重写shouldComponentUpdate来避免不必要的dom操作。

（2）使用 production 版本的react.js。

（3）使用key来帮助React识别列表中所有子组件的最小变化。

> https://segmentfault.com/a/1190000006254212
 
 ## react打包
 rollup：

## 简述flux 思想

Flux 的最大特点，就是数据的"单向流动"。

1.用户访问 View

2.View 发出用户的 Action

3.Dispatcher 收到 Action，要求 Store 进行相应的更新

4.Store 更新后，发出一个"change"事件

5.View 收到"change"事件后，更新页面

## React组件通讯：
### 父组件向子组件通信
React是单向数据流，父组件自接在子组件节点上绑定属性,子组件props获取，使用ES6的…运算符更简洁的方式把props传递给孙子组件。
要注意的一点是，setProps,replaceProps两个API已经被废弃了，React建议我们在顶层使用ReactDOM.reader()进行props更新。
### 子组件向父组件
* 还是使用props，只不过绑定的是父组件给的回调函数（子组件传参）
* 使用eventProxy事件发射器
### 兄弟组件
* 将他们要共享的数据都在父组件注入后分别传递给它们
* 使用eventProxy事件发射器
##redux的工作原理

##  怎么理解 react 传达组件的概念，react 是 view 么，怎么看 state 的设计

## 兄弟组件的状态怎么互传，有哪些方法

## state 的设计为什么是异步的，同步设计有没有问题

##  ssr 会有什么性能问题，哪些会引起内存泄露，引入 redux 后怎么处理请求的逻辑正式：

##  怎么抽象一个带搜索，单多选复合，有请求的 Selector，区分 smart 和 dumped。如果我再往上加功能，比如 autocomplete  等

##  怎么实现对表单的抽象，数据验证怎么统一处理

##  用 react 来实现一个可视化编辑器的引擎，怎么设计，怎么抽象与 model 的交互，再引入 redux 呢，怎么支持第三方组件热插拔

##   用 react 和 redux 模拟多人协作的 Todo，node 作为后端，怎么设计


作者：流形
链接：https://www.zhihu.com/question/60548673/answer/177682784
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。