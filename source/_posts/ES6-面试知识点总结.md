---
title: ES6 面试知识点总结
date: 2018-04-08 19:12:59
tags: 前端学习总结
---

[参考资料：阮一峰：ES6 入门](http://es6.ruanyifeng.com/#docs/promise)

# Promise

1. Promise 是 es6 异步编程的一种解决方案。简单来说，Promise相当于一个容器，里面保存着某种未来才会结束的事件，通常是一个异步操作。

2. 三个状态：pending，resolved，rejected

3. promise有三个常用的方法分别是then、catch、finally；then方法传入resolve状态的回调函数，在异步操作执行成功时执行（第二个参数也可以抛错）；catch相反；finally指定无论何种状态都会执行的操作；

4. 可以链式调用

5. Promise 新建后立即执行

   ```js
   let promise = new Promise(function(resolve, reject) {
     console.log('Promise');
     resolve();//异步代码，执行完所有的同步代码才会回到这里
     console.log('end')// 该句仍是 同步逻辑
   });

   promise.then(function() {
     console.log('resolved.');
   });

   console.log('Hi!');
   //输出顺序如下：
   // Promise
   // end
   // Hi!
   // resolved

   //promise 新建后立即执行，先输出promise，然后resolve将promise对象状态改变为”成功“ ，在异步操作成功时调用，并将异步操作的结果作为参数传递进去，执行resolve之前会把当前所有同步任务都执行完毕，即会先输出Hi！
   // 但是状态一旦改变后面出现不同的状态就不变了
   ```

6. Promise.all() 用于将多个Promise实例包装成一个新的Promise实例，以数组'[ ]'形式转入，只有当p1,p2,p3都执行成功，p的状态才会成功，有一个被reject，p的状态也会被reject

   ```js
   const p = Promise.all([p1,p2,p3]);//p1,p2,p3 都是Promise的实例，如果参数不是promise实例，就会先调用Promise.resolve()将其转换成promise对象
   ```

7. Promise.race()

```js
	const racep = Promise.race([p1,p2,p3])
 	//只要 p1,p2,p3 中有一个率先改变状态，就传给racep
```

7. Promise应用举例：比如图像的加载

```js
/**
 * 图像的加载是一个异步的过程
 * new Image()创建一个图片对象，
 * 指定加载完成后执行resolve
 * 加载失败时执行reject
 * 传入的url参数赋值给image.url
 */	
	const preLoadImage = function(url){
      return new Promise((resolve,reject)=>{
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src=url;
      })
	}
```

# let 和const

1. let 声明的变量具有块级作用域
2. let 声明的变量不是全局变量，不会绑定到 window 上
3. var 声明的变量会产生变量提升，let 不会
4. const 定义常量值，声明必须初始，不能重复定义和修改，如果值是一个对象，可以改变对象里面的属性值

```js
var a =[];
for(var i =0;i<10;i++){
    a[i] = function(){
        console.log(i)
    }
}
// 执行a[i]() 将会全部输出10，因为此时var定义的 i 是全局变量，没有块级作用域

// 想要输出 0-9
// 方法一： for 循环里 var 改成 let ，此时i在块级作用域中，函数定义的时候就被确定了作用域，与它在什么地方被调用无关；当前作用域没有定义的变量（称为自由变量），要到父级作用域中找，和执行的作用域无关
var a =[];
for(let i =0;i<10;i++){
    a[i] = function(){
        console.log(i)
    }
}

//方法二：立即执行

var a = [];
for(var i=0;i<10;i++){
  a[i]= (function(num){
    return function(num){
      console.log(num)
    }
  })(i)
}


//方法三：采用闭包

function showNum(num){
  return function (){
	console.log(num)	
  }
}

for(var i=0;i<10;i++){
	a[i] = show(i)
}

```

# 箭头函数

1. 简化了函数的定义，使代码更简洁
2. 箭头函数在定义时，this 就已经绑定外层对象（定义时所在的对象），尝试用call 方法改变this值无效
3. 不能用作构造函数（不能使用new 命令），不能使用arguments 对象

# Set 

1. 类似于数组，没有重复的值，用`for... of`循环遍历它
2. `Array.from()`可以将set结构转换为array  [...set]  将类数组对象转换为数组
3. set 没有键名，只有键值，或者说 key 和 value 即键名和键值是同一个值

```js
const set = new Set();
set.add(1);
set.add(2);//set.add({}) 空对象不相等，重复添加视作两个值
// set : {1,2}
[...set]// [1,2] 把set转换为数组；把类数组对象转换为数组

//数组去重
[...new Set(array)]
// 等价于
Array.from(new Set(array))
```

3. set结构四个方法

- `add(value)`：添加某个值，返回 Set 结构本身。
- `delete(value)`：删除某个值，返回一个布尔值，表示删除是否成功。
- `has(value)`：返回一个布尔值，表示该值是否为`Set`的成员。
- `clear()`：清除所有成员，没有返回值。

4. Set 结构的实例有四个遍历方法，可以用于遍历成员。
- `keys()`：返回键名的遍历器

- `values()`：返回键值的遍历器

- `entries()`：返回键值对的遍历器

- `forEach()`：使用回调函数遍历每个成员


5. set 应用
```js
// 使用set 实现数组交集并集；
let a = new Set([1, 2, 3]);
let b = new Set([2, 3, 4]);

//并集
let union = new Set([...a, ...b]);

//交集
let intersection = new Set([...a].filter(x => b.has(x)));

//差集
let difference = new Set([...a].filter(x => !b.has(x)));
```
6. WeakSet 和 Set 有两个区别
  - WeakSet 成员只能是对象，不能是其他值
  - WeakSet 中的对象都是弱引用，垃圾回收机制不考虑 weakset 对该对象的引用

# Map

1. Object 是键值对的集合，但是其只能用字符串当作键值

2. Map 数据结构类似于对象，其‘键’可以是各种类型的值，包括对象。是一种更完善的hash结构的实现

3. 定义方式&代码实现

   ```js
   const map = new Map();
   const obj = {name:'Hello Map'}
   map.set(obj,'content');

   map.get(obj)//'content'
   map.has(obj)//true
   map.delete(obj)//true
   map.has(obj)//false
   map.clear()// 清除所有成员，没有返回值
   ```

4. 作为构造函数，Map可以接受一个数组作为参数,参数是一个二维数组，每个子数组存放key-value
   ```js
   const map = new Map([['name','张三'],['title','前端面试总结']]);
   map.size //2
   map//{"name" => "张三", "title" => "前端面试总结"}
   ```

5. 如果对于同一个键多次赋值，后面的值会覆盖前面的值

6. 注意，只有对一个键的引用，Map结构才会视为同一个键
    ```js
    const map = new Map();

    map.set(['a'], 555);
    map.get(['a']) // undefined
    ```

7. Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

    ```js
    const map = new Map();

    const k1 = ['a'];
    const k2 = ['a'];

    map
    .set(k1, 111)
    .set(k2, 222);

    map.get(k1) // 111
    map.get(k2) // 222
    ```

8. map的遍历顺序就是插入顺序

    ```js
    const map = new Map([['name','stanny'],['age',18]]);
    for(let [key,value] of map){
      console.log(key,value)
    }
    // map 转化为 object，如果有key值是非字符串会先转成字符串

    function mapToObj(map){
        var obj = {};//var obj = Object.create(null)

        for(let [k,v] of map){
            obj[k] = v;
        }
        return obj;
    }
    // obj 转换为 map

    function objToMap(obj){
        let map = new Map();
        for(let key in obj){
            map.set(key,obj[key])
        }
        return map
    }
    ```

9. Map 结构转为数组结构，比较快速的方法是使用扩展运算符（`...`）。

    ```js
    const map = new Map([
      [1, 'one'],
      [2, 'two'],
      [3, 'three'],
    ]);

    [...map.keys()]
    // [1, 2, 3]

    [...map.values()]
    // ['one', 'two', 'three']

    [...map.entries()]
    // [[1,'one'], [2, 'two'], [3, 'three']]

    [...map]
    // [[1,'one'], [2, 'two'], [3, 'three']]

    ```

10. WeakMap一个典型应用场景是，在网页的 DOM 元素上添加数据，就可以使用WeakMap结构。当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除。和 Map 有两点区别
  -  只接收对象作为键名
  -  WeakMap 键名所引用的对象都是弱引用，引用计数垃圾回收机制不考虑它的引用

# 解构赋值

1. 从数组和对象中提取值，对变量进行赋值，这被称为解构

2. 如果解构不成功，变量的值就会是`undefined`

   ```js
   let [foo, [[bar], baz]] = [1, [[2], 3]];
   foo // 1
   bar // 2
   baz // 3

   let [ , , third] = ["foo", "bar", "baz"];
   third // "baz"

   let [x, , y] = [1, 2, 3];
   x // 1
   y // 3

   let [head, ...tail] = [1, 2, 3, 4];
   head // 1
   tail // [2, 3, 4]

   let [x, y, ...z] = ['a'];
   x // "a"
   y // undefined
   z // []
   ```

3. 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

   ```js
   let { bar, foo } = { foo: "aaa", bar: "bbb" };
   foo // "aaa"
   bar // "bbb"

   let { baz } = { foo: "aaa", bar: "bbb" };
   baz // undefined

   //对象的解构赋值的内部机制，是先找到同名属性，然后再赋给对应的变量。真正被赋值的是后者，而不是前者。
   let { foo: baz } = { foo: "aaa", bar: "bbb" };
   baz // "aaa"
   foo // error: foo is not defined
   ```

4. 默认值生效的条件是对象的属性值严格等于 `undefined`；数组也是

5. 数组是特殊的对象，可以对数组进行对象属性的解构赋值

   ```js
   let arr = [1, 2, 3];
   let {0 : first, [arr.length - 1] : last} = arr;
   first // 1
   last // 3
   ```

6. null 和 undefined 无法转换为对象，对他们进行解构赋值会报错

7. 用途：交换 x和y 的值

   ```js
   let x = 1;
   let y = 2;

   [x, y] = [y, x];
   ```

   函数有多个返回值时（放在数组或者对象里），利用解构赋值特别方便取出值

   ```js
   // 返回一个数组

   function example() {
     return [1, 2, 3];
   }
   let [a, b, c] = example();

   // 返回一个对象

   function example() {
     return {
       foo: 1,
       bar: 2
     };
   }
   let { foo, bar } = example();
   ```

   快速提取JSON对象数据的值

   ```js
   let jsonData = {
     id: 42,
     status: "OK",
     data: [867, 5309]
   };

   let { id, status, data: number } = jsonData;

   console.log(id, status, number);
   // 42, "OK", [867, 5309]
   ```

   ​
# 模板字符串

`${}`
