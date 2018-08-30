# react 面试点总结

## 技术选型原因

1. 公司前端大部分的 pc 端都是用 react 去实现的，所以第一个原因是和其他项目技术栈保持统一，这样便于管理和维护。
2. 不用像jquery时代对dom节点进行操作，转化为对数据的操作，状态更新则重新渲染；（react 把每个组件当作一个状态机，状态变化会触发重新 render。）
3. react 性能很好，react 虚拟 DOM 和 diff 算法是提高 react 性能的关键。


## react redux 工作机制、原理

### react 工作原理 

1. 组件生命周期流程
2. react diff 会帮我们计算出虚拟 DOM 中真正变化的部分，并且只针对变化的部分进行dom操作，而不是重新渲染整个页面，这是性能提升的关键。 
3. 对于虚拟 dom diff 算法的理解可以分为四个步骤：1 生成虚拟dom 2. 通过虚拟dom构建真实dom（appendChild） 3. 生成新的虚拟dom 4. 比较两颗虚拟dom 的不同  5. 只对变更的 dom 进行操作 

### react 特色

两大特色：

1. 状态化管理和组件化开发、引入虚拟 DOM ，性能很好
2. 特有语法： jsx 语法：可以把 html 语法直接写在 js 中。可以将 html 和 js 写在一起。常用的是在 html 中插入 js 变量，如果变量是一个数组，则会展开所有的成员。

### react 组件生命周期

组件内部维护了一套虚拟 dom 的状态，会映射到真实 dom  节点上，当状态变化时，对比计算 diff。

三个状态：

1. Mounting 已插入真实 DOM
2. Updating 更新（重新渲染）
3. Unmounting 已移除真实 DOM

### 生命周期函数

- [执行顺序](https://www.jianshu.com/p/4784216b8194)

![image](https://upload-images.jianshu.io/upload_images/1814354-4bf62e54553a32b7.png?imageMogr2/auto-orient/)

初始render：
1. 组件创建时 调用构造函数 constructor
2. componentWillMount
3. render
4. componentDidMount

父组件重新渲染时或者 props 发生变化：
1. componentWillReceiveProps
2. componentShouldUpdate
3. if true ->componentWillUpdate render-> componentDidUpdate ;if false-> end

this.setState()
1. componentShouldUpdate 假设都是 true
2. componentWillUpdate
3. render
4. componentDidUpdate

forceUpdate时
1. componentWillUpdate
2. render
3. componentDidUpdate

### 父子组件传值

- 子组件向父组件传值 通过 调用 props 传过来的函数，event.target.value
- 父组件向子组件传值 通过 props
- 同级组件之间传值 1.通过父组件作为桥梁 先把值传给父组件，再通过 props 传给另一个子组件 2.引入 redux 作为媒介 

### react 16.3 的变化

不重要

项目中用的还是 16.2  

### this.setState

- [reference](https://zhuanlan.zhihu.com/p/25954470)

1. this.setState() 会引发重新渲染
2. 直接用 this.state. 赋值是可以改变 state 对象的值，但是却不能引发重新渲染，所以是没有意义的
3. 多次调用 this.setState 只会引发一次更新生命周期，react 会将他们放在一个队列里，攒在一起，到了某个时刻 merge 一下 再去更新（为的是减少 dom 树更新操作提高性能 ）。如果每次都会引发更新生命周期就太浪费性能了。
4. this.setState() 批量处理，调用完成不能拿到新的 state 值； 两种方式可以拿到上次 this.setState()更新的值 1. 第二个参数传入一个回调（实际上是重新渲染之后的回调相当 didupdate）  2. 直接传入一个函数，函数接受两个参数，第一个是state， 每次调用时，都时合并了之前的结果。

### redux 工作原理

1. react 引入 redux 主要为了解决 组件传值的问题。
2. redux 把应用看成一个状态机，视图和状态是一一对应的，当状态变化的时候，会自动触发监听函数
3. redux 把所有的状态放在 store 这个对象里
4. 它的工作机制可以举一个栗子，当用户点击了某个按钮，触发 dispatch 了一个 action，这个 action 被 store 接收到，调用内部的 reducer，reducer 接受之前的状态值和action，返回一个新的状态值，然后一旦状态改变了，由 store.subscribe() 设置的监听函数就会自动执行。在react里面通常是 render ，于是页面就更新了
5. 开发复杂的大型采用 redux 是非常合适的，redux 单向数据流

- [redux 工作原理](https://segmentfault.com/a/1190000004236064)
- [阮一峰 redux](http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html)
