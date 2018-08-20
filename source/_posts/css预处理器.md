---
title: css预处理器
date: 2018-04-22 12:15:00
tags:
---

“CSS 预处理器用一种专门的编程语言，进行 Web 页面样式设计，然后再编译成正常的 CSS 文件。CSS 预处理器好处就是 增加一些特性，无需考虑浏览器的兼容性问题”
- Sass
- less

# less

## 特性总结

1. 定义常量，可以用 js 表达式
2. 嵌套编写
3. 函数调用
4. 样式复用
5. 无需考虑浏览器的兼容性问题
6. 注释用 双斜杠

- [less中文网](http://lesscss.cn/)
- [CSDN](https://blog.csdn.net/lidysun/article/details/52537770)
- [less 在线编译](http://tool.oschina.net/less)

## what is less

- less 是一门 css 预处理语言，它扩展里css语言，增加了变量，Mixin、函数等特性，使 css 更易维护和扩展。
- less 可以运行在 node 端和浏览器端。

## how to use

### Command Line
```
1.lessc styles.less
2.lessc styles.less styles.css
3.lessc --clean-css styles.less styles.min.css
```
### usage in code

1. 可以声明常量 便于后面使用
```less
//声明常量
@c-orange:#ff6600;
@f18:font-size:18px;

//调用
.class{
    background-color: @c-orange;
    border:1px solid @c-orange;
    font-size:@font-size;
}
```
2. less 可以以嵌套的方式编写层叠样式。

```less
.class{
    font-family:"microsoft yahei";
    .btn{
        display:inline-block;
        text-align: center;
       
        //如果你想写串联选择器，而不是写后代选择器，就可以用到"&"了
        &.confirm{
            color:red;
            background:#ddd;
        }
        &:hover{
            color:#fff;
            background:#666;
        }
}
```
相当于
```css
.class {
  font-family: "microsoft yahei";
}
.class .btn {
  display: inline-block;
  text-align: center;
  padding: 15px;
}
.class.confirm {
  color: red;
  background: #ddd;
}
.class:hover {
  color: #fff;
  background: #666;
}
```

3. 还可以调用和传参

```less
//声明
.classA(@radius:5px){
    border-radius:@radius;
    -webkit-border-radius:@radius;
    -moz-border-radius:@radius;
}

//调用
.classB{
    font-size:18px;
    //默认5px
    .classA;
}

.classC{
    //传参数 10px
    .classA(10px);
}
```

```less
//声明
.box-shadow(@x:0,@y:0,@z:6px,@color:rgba(0,0,0,.6)){
    -webkit-box-shadow: @arguments;
    -moz-box-shadow: @arguments;
    box-shadow: @arguments;
}

//调用
.class{
    .box-shadow(0,1px,8px);
}
```

4. 还可以copy其他定义好的样式

```html
<div class="div1">
    <a class="btn1">btn1</a>
</div>
<div class="div2">
    <a class="btn2">btn2</a>
</div>
```
```less
.div1{
    .btn1{
        display:inline-block;
        text-align:center;
        padding:2px 10px;
        background-color:#ff6600;
        color:#fff;
        font-size:15px;
        margin-top:10px;
        &:hover{
            background-color:#999;
            color:#666;
        }
    }
}
.div2{
    .btn2{
        //调用(copy)div1内的btn1的样式
        .div1 > .btn1;
    }
}
```

4. 还可以运算

```less
@c-orange:#ff6600;
@c-white:#fff;
@width:300px;
.containner{
    background-color:@c-orange;
    color:@c-white;
    width:@width;
    padding:20px;
    text-align: left;
    .content{
        //颜色运算
        background-color:lighten(@c-orange,30%);
        border:4px solid @c-orange + #333;
        //尺寸运算
        width:@width/2;
        height:@width/4;
        line-height:@width/4;
        margin:0 auto;
    }
}
```
5. 使用js 表达式

```less
@str:`"china".toUpperCase() + '!'`;
.msg:before{
    content:@str; //CHINA!
    height:35px;
    width:100px;
}
```

6. 作用域，先内后外。

```less
@var: red;
#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
#footer {
  color: @var; // red  
}
```
7. 字符串插值
```less
@{name}
```
8. 注解方式和js一样， 用双斜杠就可以

## advantage

- 它提供的一些例如变量、函数调用和继承都让 维护样式变得更方便和高效