## keep-alive
包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。和 <transition> 相似，<keep-alive> 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。

## 模板引擎
 Vue 不是基于字符串的模板引擎

 ## 数据绑定
数据得先声明才能实现双向绑定

## 支持TypeScript
参考：
https://juejin.im/post/5c662a7de51d4562e71c4277
https://cn.vuejs.org/v2/guide/typescript.html

## 生命周期
```TypeScript
  new Vue({
      data: {
          message: 0
      },
      template: '<div>{{ message }}</div>',
     /**
      * 监控单一state实例变化
      */
      watch: {},
     /**
      * 监控自定义变量
      * 对多个变量或者对象进行处理后返回一个结果值
      */
      computed: {
      },
      /**
       * 实例组件创建，元素DOM和数据、事件还没初始化
       */
      beforeCreate() {
        console.log(this.$el, 'beforeCreate');
      },
      /**
       * this指向vue实例
       * 在实例创建之后同步调用
       * 实例已经结束解析选项，此时数据绑定，计算属性，方法，watcher/事件回调已建立
       * DOM未编译$el不存在,所以在这里请求过多或者占用时间过长会导致页面空白，但是实例存在,this.xxx可修改并渲染
       * 急用的请求在这调用
       */
      created() {
        console.log(this.$el, 'created');
      },
      /**
       * DOM挂载完成之前
       * 此时界面数据显示为{{}}
       */
      beforeMount() {
        console.log(this.$el, 'beforeMount');
      },
      /**
       * DOM挂载完成
       * 请求一般在这调用
       */
      mounted() {
        console.log(this.$el, 'mounted');
      },
      /**
       * 每次数据更新之前
       * 此处更改状态，不会触发附加的重渲染过程
       */
      beforeUpdate() {
        console.log(this.$el, 'beforeUpdate');
      },
      /**
       * 每次数据更新完成
       * 在此更改状态，可能会导致更新无限循环
       */
      updated() {
        console.log(this.$el, 'updated');
      },
      /**
       * keep-alive组件激活时
       */
      activated() {
        console.info('========= activated keep-alive 组件激活时调用', this)
        console.count()
      },
      /**
       * keep-alive组件停用时
       */
      deactivated() {
        console.info('deactivated keep-alive 组件停用时调用', this)
        console.count()
      },
      /**
       * 组件销毁之前
       * 1. 解绑自己添加的事件监听($on|addEventListener|setInterval|addListener)
       * 2. 关闭定时器
       * 可以使用data和method
       */
      beforeDestroy() {
        console.info('beforeDestroy 实例销毁之前调用', this)
        console.count()
      },
      /**
       * 组件销毁时
       * 可以使用data和method
       */
      destroyed() {
        console.info('========= destroyed Vue 实例销毁后调用', this)
        console.count()
      },
      /**
       * 捕获一个来自子孙组件的错误时被调用
       */
      errorCaptured(err, vm, info) {
        console.log(this.$el, 'errorCaptured');
      },
      /**
       * 组件的渲染和观察期间未捕获错误的处理函数
       */
      errorHandler(err, vm, info) {
        console.log(this.$el, 'errorCaptured');
      }
  });
```


### 指令

#### v-if/v-show
    v-if在element-ui的form使用，会使this.$refs['formRef'].validate()失效