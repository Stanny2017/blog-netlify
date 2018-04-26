---
title: ' 前端js面试技巧慕课笔记'
date: 2018-03-03 23:34:45
tags: 前端总结
---

[网友笔记供参考](http://blog.csdn.net/water_v/article/details/78261364?locationNum=2&fps=1)

> 课程讲解思路：先列题目引发思考，再详细讲解知识点，最后解答

[TOC]

# 前言

## 关于面试

> 前端水平的三个层次

- 基层工程师-基础知识
- 高级工程师-项目经验
- 架构师- 解决方案

## 几个面试题

> 题目很多，做具有代表的题目，举一反三

1. js 中使用 typeof 能得到哪些类型 （==js 变量类型==）
2. 何时使用 === 何时使用 == ？  （==强制类型转换==）
3. window.onload 和 DOMContentLoaded 的区别  （==浏览器渲染过程==）
4. 用 js 连续创建 10 个 <a> 标签，点击的时候弹出来对应的序号 (==作用域==)
5. 简述如何实现一个模块加载器，实现类似 require.js 的基本功能  （==js 模块化==）
6. 实现数组的随机排序  （==JS 基础算法==）

## 思考

- 拿到面试题第一时间看到的是什么 （==考点==）
- 如何看待永远做不完的题海 （==以不变应万变==）
- 如何对待接下来遇到的面试题？  （==总结考点并扩展再反思题目==）

# 基础知识

## js 基础三座大山

- 原型 原型链
- 作用域 闭包
- 异步 单线程

## 面试题

#### 1. js 中使用 typeof 能得到哪些类型

#### 2. 何时使用 === 何时使用 ==

```js
if (obj.a == null){
    // 这里相当于 obj.a === null || obj.a ===undefined ，因为 undefined == null 值为true
    // 这是 JQuery 中推荐的写法， 其余情况全部用 === （避免代码风险有代码洁癖）
}
```

#### 3. JS 中有哪些内置函数

#### 4. JS 变量按照存储方式区分为哪些类型，并描述其特点

#### 5. 如何理解 JSON

## 知识点

1. 变量类型：值类型 和 引用类型（指针）
- 引用类型包括： 数组 函数 对象;引用类型公共空间，是指针

```js
        var a=100;
        var b=a;
        a=200;
        console.log(b) //100

        var a={age:20};
        var b=a;
        b.age=21;
        console.log(a.age) //21
```

2. typeof只能区分值类型的详细类型，对引用类型无能为力，但可以区分出函数来

```js
        typeof undefined;//undefined
        typeof 'abc';//string
        typeof 123;//number
        typeof true;//boolean
        typeof {};//object
        typeof [];//object
        typeof null;//object
        typeof console.log//function
```
3. 强制类型转换(值类型的计算)

     - ①字符串拼接
     - ②==运算符
     - ③if语句
     - ④逻辑运算 （布尔操作符 逻辑非、逻辑与、逻辑或） 
        - 逻辑非 ！ (结果总是 true/fasle )
            - 如果操作数是一个对象，返回 false
        - 逻辑与 &&  
            - ==**如果第一个操作是对象则返回第二个操作数**==
            - 如果第二个操作数是对象，则只有在第一个操作数的求值结果为 true 的情况下才会返回该对象
            - 如果两个操作数都是对象，则返回第二个操作数
            - 如果第一个操作数是 null，则返回 null
            - 如果第一个操作数是 NaN，则返回 NaN
            - 如果第一个操作数是 undefined ，则返回 undefined。
            - 逻辑与操作符属于断路操作，如果第一个操作符能够决定结果，那么就不会再对第二个操作数求值。
        - **==逻辑或 ||==**
            - 如果第一个操作数是对象，则返回第一个操作数
            - 如果两个操作数都是对象，则返回第一个操作数
            - 如果第一个操作数的求值结果为 false ，则返回第二个操作数
            - 如果两个操作数都是 NaN/null/undefined ，则返回 NaN/null/undefined

**上面四种操作可能导致强制类型转换**

```js
       var a=100+10;//110
       var b=100+'10'//'10010'

       100 =='100'//true
       0==''//true
       null==undefined//true

       var a=true;
       if(a){
          //...
       }
       var b=100;
       if(b){
          //...
       }
       var c='';
       if(c){
          //...
       } 

       console.log(10&&0)//0
       console.log(''||'abc')//abc
       console.log(!window.abc)//true
       
       var a=100;
       console.log(!!a)//true
```
### 面试题解答 1
```js
    面试题1、JS中使用typeof能得到的哪些类型？
            typeof undefined;//undefined
            typeof 'abc';//string
            typeof 123;//number
            typeof true;//boolean
            typeof {};//object
            typeof [];//object
            typeof null;//object
            typeof console.log//function

            typeof只能区分值类型的详细类型，对引用类型无能为力，但可以区分出函数来
     面试题2、何时使用===何时使用==？
            if(obj.a==null){
                //这里相当于obj.a===null||obj.a===undefined,简写形式
                //这是jquery源码中推荐的方法，其他的都用===
            }
     面试题3、JS中有哪些*内置函数*--数据封装类对象？
          //JS作为单纯语言的内置函数
            Object
            Array
            Boolean
            Number
            String
            Function
            Date
            RegExp
            Error
            //Global浏览器内置对象
            //Math是对象，不是函数
     面试题4、JS变量按照存储方式区分为哪些类型，并描述其特点
            //分为值类型和引用类型
            //值类型
            var a=10
            var b=a
            a=11
            console.log(b)//10

            //引用类型
            var obj1={x:100}
            var obj2=obj1
            obj1.x=200
            console.log(obj2.x)//200
            值类型直接存储的是值
            引用类型存储的是指向值的指针，这样做是为了节省内存
            值类型的值赋值后不会相互干预
            引用类型的赋值是变量指针的赋值，不是真的值的拷贝，他们的赋值是相互干预的。
     面试题5、如何理解JSON?
            //JSON只不过是一个JS对像而已，和MATH一样
            JSON.stringfy({a:10,b:20})
            JSON.parse('{"a":10,"b":20}')
            //注意:JS中为false的为 0 NaN null undefined '' false
```
### 原型和原型链

```js
  *构造函数*
     function Foo(name,age){
        this.name=name;
        this.age=age;
        this.class="class-1";
        //return this;//默认有这一行
     }
     var f=new Foo('zhangsan',20)
     var f1=new Foo('lisi',22)//创建多个对象
     //new对象时函数中的this初始化为空对象，参数赋值完后返回this给f和f1
  *构造函数--扩展*
     var a={}其实是var a=new Object()的语法糖
     var a=[]其实是var a=new Array()的语法糖
     function Foo(){...}其实是var Foo=new Function(...)
     //使用instanceof判断一个函数是否是一个变量的构造函数
     //对象，数组，函数的构造函数其实是Object,Array,Function
     //判断一个变量是否是'数组'  变量 instanceof Array   

```



#### 原型规则(是学习原型链的基础)

- 所有的引用类型(数组，对象，函数)，都具有对像特性，即可自由扩展属性（除了null）
- 所有的引用类型（数组，函数，对象），都有一个 \_proto_ 属性，属性值是一个普通对象
- 所有的函数，都有一个 prototype 属性，属性值也是一个普通的对象
- 函数的 prototype 称显式原型，引用类型的 \_proto 成为隐式原型
- 所有的引用类型（数组，函数，对象），其 \_proto_ 属性值都指向其构造函数的  prototype 属性值
- 当试图获取一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的\_prot__(即它的构造函数的prototype)

![image](http://img.blog.csdn.net/20171017192529480?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvd2F0ZXJfdg==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)


```js
         var obj={};obj.a=100;
         var arr=[];arr.a=100;
         function fn(){}
         fn.a=100;

         console.log(obj.__proto__);
         console.log(arr.__proto__);
         console.log(fn.__proto__);

         console.log(fn.prototype)

         console.log(obj.__proto__===Object.prototype)


        function Foo(name,age){
            this.name=name;
        }             
        Foo.prototype.alertName=function(){
             alert(this.name)
        }
        var f=new Foo('zhangsan');
        f.printName=function(){
            console.log(this.name);
        }
        f.printName();
        f.alertName();

        //循环对象自身的属性
        var item;
        for(item in f){
          //高级浏览器已经在for in中屏蔽了来自原型的属性
          //但是这里建议大家还是加上这个判断，保证程序的健壮性
          if(f.hasOwnProperty(item))
              console.log(item);
        }

  *原型链*
     f.toString()//要去f.__proto__.__proto__中去找
  *instanseof*
     **注意:** //用于判断引用类型属于哪个构造函数的方法
      f instanceof Foo的判断逻辑是:
         f的__proto__一层一层向上找，能否对应到Foo.prototype
      f instanceof Object也是正确的

```
### 面试题解答 2


```js
面试题1、如何准确判断一个变量时数组类型？
           var arr=[]
           arr instanceof Array //true
           typeof arr//object,typeof是无法判断是否是数组的
    面试题2、写一个原型链继承的例子
       ①function Animal(){
          this.eat=function(){
             console.log('animal eat');
          }
       }
       function Dog(){
          this.bark=function(){
             console.log('dog bark')
          }
       }
       Dog.prototype=new Animal();
       var hashiqi=new Dog()

       ②function Elem(id){
           this.elem=document.getElementById(id);
       }
       Elem.prototype.html=function(val){
          var elem=this.elem;
          if(val){
              elem.innerHTML=val;
              return this;//链式操作
          }else{
             return elem.innerHTML;
          }
       }
      Elem.prototype.on=function(type,fn){
         var elem=this.elem;
         elem.addEventListener(type,fn);
         return this;
      }
      var elem=new Elem("div1");
      elem.html("<p>hello world</p>").on("click",function(){alert("clicked")}).html("<p>javascript</p>");
    面试题3、描述new一个对象的过程
       ①创建一个新对象
       ②this指向这个新对象
       ③执行代码，即对this赋值
       ④返回this
    面试题4、zepto(或其他框架)源码中如何使用原型链
       ①阅读源码是高效提高技能的方式
       ②但不能“埋头苦钻”有技巧在其中
       ③慕课网搜索“zepto设计和源码分析”

```




## 执行上下文

js 是解释型语言不是编译型语言，所以有些错误在编写程序时不会报错，什么时候执行什么时候报错
- 范围：一段<script>或者一个函数之内都会生成一个上下文
- 全局：变量定义，函数声明   //执行之前，一段<script>会生成全局上下文
- 函数：变量定义，函数声明，this，arguments //函数执行之前会生成函数上下文
- 注意：‘函数声明’和‘函数表达式’的区别

```js
    console.log(a);//undefined
    var a=100

    fn('zhangsan') //'zhangsan' 20
    function fn(name){
       age=20;
       console.log(name,age);
       var age;
    }
```

## this

- this要在执行时才能确认值，定义时无法确认

```js
    var a={
       name:"A",
       fn:function(){
           console.log(this.name)
       }
    }
    a.fn()  //this===a
    a.fn.call({name:B}) //this==={name:'B'}
    var fn1=a.fn;
    fn1() //this===window

    使用场景
    ①作为构造函数执行
       function Foo(name){
          //this={};
          this.name=name;
          //return this
       }
       var f=new Foo('zhangsan')
    ②作为对象属性执行
        var obj={
            name:'A',
            printName:function(){
                console.log(this.name)
            }
        }
        obj.printName();
    ③作为普通函数执行
       function fn(){
          console.log(this)  //this===window
       }
       fn()
    ④call apply bind
       function fn1(name,age){
          alert(name);
          console.log(this)  //this===window
       }
       fn1.call({x:100},'zhangsan',20)
       fn1.apply({x:100},['zhangsan',20])
       var fn2=function(name,age){
          alert(name);
          console.log(this)  //this==={x:100}
       }.bind({x:100})//bind只能用函数表达式，函数声明不可用，会报错
       fn2('zhangsan',200)
```

## 作用域

```js
       ①没有块级作用域
            if(true){
                var name='zhangsan'
            }
            console.log(name)//'zhangsan'
       ②只有全局和函数作用域
            var a=100;
            function fn(){
                var a=200；
                console.log('fn',a)
            }
            console.log('global',a)
            fn()

```

## 作用域链


```js
       var a=100
       function fn(){
               var b=200
               //当前作用域没有定义的变量，即'自由变量'
               console.log(a)

               console.log(b)
       }
       fn()


       var a=100;
       function F1(){
          var b=200;
          function F2(){
              var c=300;
              console.log(a);//a是自由变量
              console.log(b);//b是自由变量
              console.log(c);
          }
          F2()
       }
       F1();

```
- ==注意==：函数的父级作用域是函数定义时候的作用域，不是函数执行时候的作用域,也就是说那个作用域定义了这个函数，这个函数的父级作用域就是谁，跟函数执行没有关系，函数自由变量要到父级作用域中找，就形成了作用域链

## 闭包

1. 实际开发中闭包的应用：封装变量，收敛权限

```js
     function F1(){
          var a=100;
          //返回一个函数(函数作为返回值)
          return function(){
              console.log(a);//自由变量，父作用域寻找
          }
     }
     //f1得到一个函数
     var f1=F1();
     var a=200;
     f1();//100


     闭包使用场景
     ①函数作为返回值
     ②函数作为参数传递(函数自由变量要到父级作用域中找)
       function F1(){
          var a=100;
          return  function(){
              console.log(a);
          }
       }
       var f1=F1();
       function F2(fn){
           var a=200
           fn();(自由变量要到声明定义时的父作用域中找，和执行的作用域没有关系)
       }
       F2(f1);//100

```

### 面试题解答 3


```js
问题1、说一下对变量提升的理解
            ①变量的定义
            ②函数的声明（注意和函数表达式的区别）
      问题2、说明this几种不同的使用场景
             参考上文**this**
      问题3、创建10个`<a>`标签，点击的时候弹出来对应的序号
            var i;
            for(i=0;i<10;i++){
            (function(i){
               var a=document.createElement('a');
               a.innerHTML=i+'<br>';
               a.addEventListener('click',function(e){
               e.preventDefault();
               alert(i);
              })
              document.body.appendChild(a);
              })(i);//相当于创建了10个函数
            }

      问题4、如何理解作用域
         ①自由变量
         ②作用域链，即自由变量的查找
         ③闭包的两个场景
      问题5、实际开发中闭包的应用
      //闭包实际应用中主要用于封装变量，收敛权限
      function isFirstLoad(){
             var _list=[];
              return function(id){
                 if(_list.indexOf(id)>=0){
                     return false;
                 }else{
                    _list.push(id);
                    return true;
                 }
              }
      }
      //使用
      var firstLoad=isFirstLoad();
      firstLoad(10);
      firstLoad(10);
      firstLoad(20);
    //你在 isFirstLoad 函数外面，根本不可能修改掉_list的值

```

## 异步

**何时需要异步** 
- ①在可能发生等待的情况下 
- ②等待过程中不能像alert一样阻塞程序运行 
- ③因此，所以的”等待的情况”都需要异步

**前端使用异步的场景** 
- ①定时任务：setTimeout，setInterval 
- ②网络请求：ajax请求，动态加载 
- ③事件绑定

```js
console.log(100) 
setTimeout(function(){ 
console.log(200) 
},1000) 
console.log(300) //100 300 200

```

### 异步示例

```js
console.log('start');
$.get('./data1.json',function(data1){
       console.log(data1);
})
console.log('end')//'start'  'end'   data1



console.log(start);
var img=document.createElement('img')
img.onload=function(){
        console.log('loaded')
}//图片加载完执行
img.src='/xx.png';
console.log('end');//start end loaded


console.log('start')
document.getElementById('btn1').addEventListener('click',function(){
       alert('clicked');
})//点击时才会执行
console.log('end');//start clicked end
```

## 同步

```js
console.log(100)
alert(200);
console.log(300)  //100 200 300

```

## 异步和单线程

js 是单线程的语言，所以需要异步

```js
console.log(100) 
setTimeout(function(){ 
console.log(200) 
}) 
console.log(300) //100 300 200 

```

上述异步代码的**执行过程**如下
1. 执行第一行打印100
2. setTimeout 异步执行，先暂存起来
3. 打印 300
4. 待所有程序执行完，处于空闲状态时，拿到暂存的函数在指定的时间后执行

### 面试解答 4


```js
问题1、同步和异步的区别是什么？分别举一个同步和异步的例子 
①同步会阻塞代码执行，而异步不会 
②alert是同步，setTimeout是异步

问题2、一个关于setTimeout的笔试题 
console.log(1) 
setTimeout(function(){ 
console.log(2) 
},0) 
console.log(3) 
setTimeout(function(){ 
console.log(4) 
},1000) 
console.log(5) 
//1 3 5 2 4

问题3、前端使用异步的场景有哪些 
①定时任务：setTimeout，setInterval 
②网络请求：ajax请求，动态加载 
③事件绑定
```

## 其他（日期、Math、各种常用API）


```js
①日期 
Date.now()  //获取当前时间毫秒数 
var dt=new Date() 
dt.getTime()   //获取毫秒数 
dt.getFullYear()   //年
 dt.getMonth()  //月
(0-31) dt.getHours()   //小时(0-23) 
dt.getMinutes() //分钟(0-59) 
dt.getSeconds() //(0-59)

②Math 
Math.random()
random 在实际中的应用有清除缓存的作用，是每次访问到的都不是缓存

③数组API
forEach  遍历所有元素
  var arr=[1,2,3]
     arr.forEach(function(item,index){
     //遍历数组的所有元素
     console.log(index,item)
  })

 every  判断所有元素是否都符合条件
   var arr=[1,2,3]
   var result=arr.every(function(item,index){
      //用来判断所有的数组元素，都满足一个条件
        if(item<4){
           return true;
        }
    })
   console.log(result);

some  判断是否至少一个元素符合条件
    var arr=[1,2,3]
    var result=arr.some(function(item,index){
      //用来判断所有的数组元素，只要有一个满足条件即可
        if(item<2){
            return true;
       }
    })
    console.log(result);

sort  排序
   var arr=[1,4,2,3,5]
   var arr2=arr.sort(function(a,b){
         //从小到大排序
         return a-b
         //从大到小排序
         //return b-a
   })
   console.log(arr2)

map  对元素重新组装，生成新数组
   var arr=[1,2,3,4]
   var arr2=arr.map(function(item,index){
        //将元素重新组装，并返回
        return '<b>'+item+'</b>'
   })
   console.log(arr2)
filter过滤符合条件的元素
   var arr=[1,2,3]
   var arr2=arr.filter(function(item,index){
       //通过某一个条件过滤数组
       if(item>=2){
          return true;
       }
   })
   console.log(arr2)
④对象API
   var obj={
      x:100,
      y:200,
      z:300
   }
   var key
   for(key in obj){
      //注意这里的hasOwnProperty,再讲原型链时讲过了
      if(obj.hasOwnProperty(key)){
             console.log(key,obj[key])
      }

    }

```

### 面试题解答 5

```js
问题1、获取2017-06-10格式的日期 
     function formatDate(dt){
          if(!dt){
              dt=new Date()
          }
          var year=dt.getFullYear();
          var month=dt.getMonth()+1;
          var date=dt.getDate();
          if(month<10){
             //强制类型转换
             month="0"+month;
          }
          if(date<10){
              //强制类型转换
              date="0"+month;
          }
          return year+"-"+month+"-"+date
     }
     var dt=new Date()
     var formatDate=formatDate(dt)
     console.log(formatDate)
问题2、获取随机数，要求是长度一直的字符串格式 
      var random=Math.random()
      var random=random+'0000000000'   //后面加上10个零
      var random=random.slice(0,10)
      console.log(random)
问题3、写一个能遍历对象和数组的通用forEach函数
       function forEach(obj,fn){
           var key
           //准确判断是不是数据
           if(obj instanceof Array){
                  obj.forEach(function(item,inex){
                         fn(index,item)
                 })
           }else{
                //不是数组就是对象
                for(key in obj){
                     fn(key,obj[key])
                }
           }
       }

       var arr=[1,2,3];
       //注意，这里参数的顺序换了，为了和对象的遍历格式一致
       forEach(arr,function(index,item){
             console.log(index,item)
       })

       var obj={x:100,y:200};
       forEach(obj,function(key,value){
             console.log(key,value)
       })
```


## js-web-api

本期主要内容 
1. Dom操作 
2. Bom操作 
3. 事件绑定 
4. Ajax请求(包括http协议) 
5. 存储

注意：内置函数和内置对象的区别 
1. 内置函数：Object Array RegExp Function Error Date Number Boolean String… 
2. 内置对象：Math JSON…

注： 
- JS基础知识：ECMA 262标准 
- JS-WEB-API：W3C标准，它参与规定任何JS基础相关的东西，不管什么变量类型、原型、作用域和异步，只管定义用于浏览器JS操作页面的API和全局变量

### DOM
- html是xml的一种特殊结构 

- DOM 本质：
  DOM 可以理解为： 
  浏览器把拿到的html代码，结构化一个浏览器能识别并且js可操作性的一个模型而已

```js
①获取DOM节点 
var div1=document.getElementById(‘div1’)；//元素 
var divList=document.getElementsByTagName(‘div’); //集合 
console.log(divList.length) 
console.log(divList[0])

var containerList=document.getElementsByClassName(“.contaner”)//集合 
var pList=document.querySelectorAll(‘p’)//集合 
②property 
var pList=document.querySelectorAll(‘all’); 
var p=pList[0]; 
console.log(p.style.width) 
p.style.width=’100px’ 
console.log(p.className) 
p.className=’p1’

//获取nodeName和nodeType 
console.log(p.nodeName) 
console.log(p.nodeType) 

```
- DOM 结构操作
    - 新增节点
    - 查询子节点
    - 查询父节点
    - 删除节点

### 面试题解答 6


```
问题1、dom是哪种基本的数据结构？ 
树 
问题2、Dom操作的常用API有哪些？ 
①获取DOM节点，以及节点的property和Attribute 
②获取父节点，获取子节点  childNodes/ parentNode
③新增节点，删除节点 
问题3、Dom节点的Attribute和Property有和区别？ 
①property只是一个JS对象的属性的修改 
②Attribute是对html标签属性的修改
```

## BOM操作

- 测试浏览器型号 navigator

```js
var ua=navigator.userAgent 
var isChrome=ua.indexOf(‘Chrome’) 
console.log(isChrome) 

```

- screen
- location
- history

```js
console.log(screen.width) 
console.log(scr)

console.log(location.href) 
console.log(location.protocal) 
console.log(location.pathname) 
console.log(location.search) 
console.log(location.hash)

history.back() 
histort.forward()
```

### 面试题解答 7

```js
题目1、如何检测浏览器的类型 
var ua=navigator.userAgent 
var isChrome=ua.indexOf(‘Chrome’) 
console.log(isChrome) 
题目2、拆解url的各部分 
参考location
```

## 事件 

- 通用事件绑定

```js
var btn=document.getElementById(‘btn1’); 
btn.addEventListener(‘click’,function(event){ 
console.log(‘clicked’) 
})

function bindEvent(elem,type,fn){ 
elem.addEventListener(type,fn) 
}

var a=document.getElementById(‘link1’) 
bindEvent(a,’click’,function(e){ 
e.preventDefault() //阻止默认行为 
alert(‘clicked’) 
})

注：关于IE低版本的兼容性 
①IE低版本使用attachEvent绑定事件，和W3C标准不一样 
②IE低版本使用量以非常少，很多网站都早已不支持 
建议对IE低版本的兼容性：了解即可，无需深究 
如果遇到对IE低版本要求苛刻的面试，果断放弃

```

### 事件冒泡

在父级 div 中定义的事件，会在子级的事件执行之后冒泡上来执行

- 阻止事件冒泡 e.stopPropagation() 

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="div1">
      <p id="p1">激活</p>
      <p id="p2">取消</p>
      <p id="p3">取消</p>
      <p id="p4">取消</p>
    </div>
    <div id="div2">
      <p id="p5">取消</p>
      <p id="p6">取消</p>
    </div>


    <script type="text/javascript">
    // 利用阻止冒泡的机制实现：只点击 p1 的时候弹窗激活
      function bindEvent(elem,type,func) {
        elem.addEventListener(type,func)
      }
      var p1 = document.getElementById('p1')
      bindEvent(p1,'click',function(e){
        e.stopPropagation()
        alert('激活')
      })
      bindEvent(body,'click',function (e) {
        alert('取消')
      })
    </script>
  </body>
</html>
```

- 代理


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <div id="div1">
      <a href="#">a1</a>
      <a href="#">a2</a>
      <a href="#">a3</a>
      <a href="#">a4</a>
      <a href="#">a5</a>
      <p>fjdk</p>
      <h1>jfkd</h1>
      <!-- ...随时会新增更多的 a 标签 -->
    </div>
    <script type="text/javascript">
      // 要求用代理的方式实现 动态事件绑定，绑定 div1 中的所有 a 标签
      var div = document.getElementById('div1')
      function bindEvent(elem,type,func) {
        elem.addEventListener(type,func)
      }
      bindEvent(div,'click',function(e){
        console.log(e) // MouseEvent
        console.log(e.target) //  完整的 a 标签 对象 <a href="#">a3</a>
        console.log(e.target.nodeName); // 都是大写
        if(e.target.nodeName === 'A'){
          alert(e.target.innerHTML)
        }
      })
    </script>
  </body>
</html>

```

### 面试题解答 8


```
问题1、编写一个通用的事件监听函数 bind Event

问题2、描述事件冒泡流程 
①DOM树形结构 
②事件冒泡 
③阻止冒泡 
④冒泡的应用(代理) 
问题3、对于一个无线下拉加载图片的页面，如何给每个图片绑定事件 
①使用代理 
②知道代理的两个优点 
代码简洁 
减少浏览器内存占用
```

## ajax


```js
// 指定了请求目标，也明确了如何处理之后，就可以发送请求了
var request = new XMLHttpRequest();
request.open('GET',url,true);// 指定请求目标，三个参数，1.GET or POST 2.请求路径 3.是否异步 （默认true，可以不写）
request.onreadystatechange() = function(){

    if(request.readyState === 4){
        // 请求完成
        if(request.status === 200){
            // 请求成功，获得一个成功的响应,此后可以开始请求成功后的处理
            request.responseText//responseText 保存文本字符串格式
            request.responseXML//responseXML 保存 Content-Type 头部中指定为 "text/html" 的数据
        }else{
            // 请求失败，根据响应码判断失败原因
            console.log('error,status:'+request.status)
        }
    }else{
        // 请求还在继续
    }
}

```

注：IE兼容性问题 
- ①IE低版本使用ActiveXObject，和W3C标准不一样 
- ②IE低版本使用量非常少，很多网站都早已不支持 
- ③建议对IE低版本的兼容性了解即可，无需深究 
- ④如果遇到对IE低版本要求苛刻的面试，果断放弃


## http 状态码

```
0-（未初始化）还没有调用send()方法 
1-（载入）已调用send()方法，正在发送请求 
2-（载入完成）send()方法执行完成，已经接收得到全部响应内容 
3-(交互)正在解析响应内容 
4-（完成）响应内容解析完成，可以在客户端调用了

2xx-表示成功处理请求。如200 
3xx-需要重定向，浏览器直接跳转 
4xx-客户端请求错误，如404 
5xx-服务器端错误，如500
```

## 跨域

- 什么是跨域 
- JSONP 
- 服务器端设置http header




## 开发环境

### 前端工程师 IDE

- webstorm
- sublime 
- vscode
- atom    （小清新）

### Git 版本管理

- 正式项目都需要版本管理，可以清晰的看到历史版本
- 多人协作开发
- Git 和 Linux 是一个作者

#### 网络 Git 服务器

- github
- coding.net（国内）
- 码云

### 常用 git 基本命令

### 前端构建工具

- grunt 
- gulp
- fis3
- **webpack**

### webpack

- [npm 基础命令](https://segmentfault.com/a/1190000010001155)
- [入门 Webpack，看这篇就够了](https://segmentfault.com/a/1190000006178770)

### linux 基础命令


```
1. mkdir a      // 在当前目录中创建一个空文件夹'a'
2. ls           // 查看当前目录下的文件
3. ll           // ls -l 的简写
4. cd a         // 进入当前目录下的 a 目录
5. pwd          // 查看当前目录的路径
6. cd ..        // 返回上层目录
7. rm -rf a     // 删除文件夹 a
8. vi a.js      // 或者 vim ；编辑 a.js 文件，写入新的内容并保存则会创建；键入 i 进入插入模式，ESC 返回刚刚的模式 :w 保存 :q 退出 :wq 保存并退出
9. cp a.js a1.js  // 拷贝 a.js 存入 a1.js 
10. mv a1.js <new dir>  // 将 a1.js 移动到新的文件夹下
11. rm a.js         // 删除 a.js
12. cat a.js    // 查看 a.js 
13. head a.js   // 查看头部内容
14. tail a.js   // 查看尾部内容
15. head -n 1 a.js   // 查看第一行
16. tail -n 2 a.js   // 查看后两行
16. grep '2' a.js    // 搜索 包含 '2'

```


## 性能优化

### 原则

- 多使用内存，缓存或者其他
- 减少 CPU 计算，减少网络请求

### 从哪里入手

- （加载资源）页面资源如何加载更快
    - 静态资源的压缩合并（多个js文件合成一个js文件，减少请求）压缩代码减少体积
    - 使用静态资源缓存
    - 使用 CDN 让资源加载更快
    - 使用 SSR 后端渲染，让数据直接输出到 HTML 中
- 对于页面的渲染以及动态操作如何更快
    - CSS 放前面，JS 放后面
    - 懒加载（图片懒加载，下载加载）
    - 减少 DOM 查询，对 DOM 查询做缓存
    - 减少 DOM 操作，多个操作尽量合并在一起执行
    - 事件节流

### 几个示例


```html

// 1. 懒加载,页面首次渲染先加载一个预览图，再用用DOM操作改变其真实需要加载的图片

<img id = 'img1' src="preview.png" data-relsrc="abc.png"/>
<script>
    var img1 = document.getElementById('img1')
    img1.src = img1.getAttribute('data-realsrc')
</script>


// 2. 缓存 DOM 查询

<script>    
var i
for(i = 0;i<document.getElementsByTagName('p').length;i++){
    // 每次循环都得执行一次 DOM 查询
}

// 缓存 DOM 查询是这样的
var pList = document.getElementById('p')
var i
for(i = 0;i<pList.length;i++){
    //TODO
}

// 3. 合并 DOM 插入
var listNode = document.getElementById('list')

// 要插入 10 个 li 标签
var frag = document.createDocumentFragment()
var i,li
for(i = 0; i < 10; i++){
    li = document.createElement('li')
    li.innerHTML = "list item " + i
    frag.appendChild(li)
}

listNode.appendChild(frag)// 插入不是本身而是所有子孙节点

// 3. 事件节流
var textarea = document.getElementById('text')
var timeoutId
textarea.addEventListener('keyup',function{
    if(timeoutId){
        clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(function(){
        // 触发 change 事件
    },100)
</script>

```


#### window.load

页面的全部资源加载完成才会执行

#### document.DOMContentLoaded
DOM 渲染完成即可执行，此时图片，视频还可能没有加载完

### 安全性（了解）

- XSS (Cross Site Scripting) 跨站请求攻击
    - 举例：博客文章中嵌入 script 标签，获取阅读者的 cookie 信息
    - 解决办法： 前端替换关键字或者后端替换，后端替换的效率高
- XSRF（Cross-site request forgery） 跨站请求伪造
    - 增加验证流程，指纹，密码，短信等

## 面试技巧

- 好看的简历，项目经历（贴上==定期维护==的博客，个人开源项目）
- 简历不可造假，贴上的都应在能力范围内，造假很容易出破绽
- 如何看待加班，救急 不救 穷
- 遇到不会回答的问题，说出知道的部分也可以，转一下问题的也比回答“不知道”好
- 谈谈缺点：说一下最近学习的东西
- 面试过程中面试官倾向于问怎么实现的，对于不知道怎么实现的用法要谨慎说明，类似 jquery 某个用法,只知道用法不知道原理很容易被问住