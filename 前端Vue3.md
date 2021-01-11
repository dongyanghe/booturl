
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
       * 组件销毁之前(原beforeDestroy)
       * 1. 解绑自己添加的事件监听($on|addEventListener|setInterval|addListener)
       * 2. 关闭定时器
       * 可以使用data和method
       */
      beforeUnmount() {
        console.info('beforeDestroy 实例销毁之前调用', this)
        console.count()
      },
      /**
       * 组件销毁时（原destroyed）
       * 可以使用data和method
       */
      unmounted() {
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
### 新功能包括
#### 合成API
#### 传送
#### 碎片
#### 发出组件选项
#### createRenderer@vue/runtime-core用于创建自定义渲染器的API
#### SFC成分API语法糖（<script setup>） 实验性的
#### SFC状态驱动的CSS变量（<style vars>） 实验性的
#### SFC<style scoped>现在可以包括全局规则或仅针对广告位内容的规则
### 指令
