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
      beforeCreate() {
          console.log(this.$el, 'beforeCreate');
      },
      created() {
          console.log(this.$el, 'created');
      },
      beforeMount() {
          console.log(this.$el, 'beforeMount');
      },
      mounted() {
          console.log(this.$el, 'mounted');
      },
      beforeUpdate() {
          console.log(this.$el, 'beforeUpdate');
      },
      updated() {
          console.log(this.$el, 'updated');
      },
      activated() {
          console.log(this.$el, 'activated');
      },
      deactivated() {
          console.log(this.$el, 'deactivated');
      },
      beforeDestroy() {
          console.log(this.$el, 'beforeDestroy');
      },
      destroyed() {
          console.log(this.$el, 'destroyed');
      },
      errorCaptured() {
          console.log(this.$el, 'errorCaptured');
      }
  });
```