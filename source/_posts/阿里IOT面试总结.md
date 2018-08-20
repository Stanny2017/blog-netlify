## 介绍项目以及自己的所做的工作

## 技术选型原因

1. 公司前端大部分的 pc 端都是用 react 去实现的，所以第一个原因是和其他项目技术栈保持统一，这样便于管理和维护。
2. react 性能很好，不用像jquery时代对dom节点进行操作，采用状态化管理的机制
3. react 把每个组件当作一个状态机，状态变化会触发重新render。
4. react 虚拟 DOM 和 diff 算法是提高 react 性能的关键。
5. react diff 会帮我们计算出虚拟 DOM 中真正变化的部分，并且只针对变化的部分进行dom操作，而不是重新渲染整个页面，这是性能提升的关键。
6. 对于虚拟 dom diff 算法的理解可以分为四个步骤：1 生成虚拟dom 2. 通过虚拟dom构建真实dom（appendChild） 3. 生成新的虚拟dom 4. 比较两颗虚拟dom 的不同  5. 只对变更的 dom 进行操作 

## react redux 工作机制、原理

### react 工作原理 

两大特色： 状态化管理和组件化开发 、虚拟 DOM 速度很快

工作原理：当内部的状态值发生变化时会自动

特有语法： jsx 语法：可以把 html 语法直接写在 js 中。可以将 html 和 js 写在一起。常用的是在 html 中插入 js 变量，如果变量是一个数组，则会展开所有的成员。

生命周期三个状态：
生命周期函数运行顺序：

同级组件之间的通信方式：除了通过父组件和 store 还有哪种方法可以实现

### redux 工作原理

- redux 把应用看成一个状态机，视图和状态是一一对应的，当状态变化的时候，会自动触发监听函数
- redux 把所有的状态放在 store 这个对象里
- 它的工作机制可以举一个栗子，当用户点击了某个按钮，触发 dispatch 了一个 action，这个 action 被 store 接收到，调用内部的 reducer，reducer 接受之前的状态值和action，返回一个新的状态值，然后一旦状态改变了，由 store.subscribe() 设置的监听函数就会自动执行。在react里面通常是 render ，于是页面就更新了
- 开发复杂的大型采用 redux 是非常合适的，redux 单向数据流

- [redux 工作原理](https://segmentfault.com/a/1190000004236064)

### dva 框架

## cookie session localstorage sessionStorage

1. 4kb
2. 5M
3. localStorage 永久存储
4. sessionStorage 关闭浏览器就删除