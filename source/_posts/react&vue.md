## react 组件生命周期

### 三个状态

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
- 同级组件之间传值 通过父组件作为桥梁 先把值传给父组件，再通过 props 传给另一个子组件

### react 16.3 的变化

项目中用的还是 16.2  

### this.setState

- [reference](https://zhuanlan.zhihu.com/p/25954470)

1. this.setState() 会引发重新渲染
2. 直接用 this.state. 赋值是可以改变 state 对象的值，但是却不能引发重新渲染，所以是没有意义的
3. 多次调用 this.setState 只会引发一次更新生命周期，react 会将他们放在一个队列里，攒在一起，到了某个时刻 merge 一下 再去更新（为的是减少 dom 树更新操作提高性能 ）。如果每次都会引发更新生命周期就太浪费性能了。
4. this.setState() 批量处理，调用完成不能拿到新的 state 值； 两种方式可以拿到上次 this.setState()更新的值 1. 第二个参数传入一个回调（实际上是重新渲染之后的回调相当 didupdate）  2. 直接传入一个函数，函数接受两个参数，第一个是state， 每次调用时，都时合并了之前的结果。

