# margin：auto 工作原理

- [参考](https://www.hongkiat.com/blog/css-margin-auto/)

两种情况：
1. 均分空间
2. 0px

水平居中：
- margin:0 auto   如果本身是浮动元素或者 inline 元素 或者 position 为fixed 或者 absolute   将不起作用

- margin-top/margin-bottom:auto 被计算成 0px （绝对定位的元素除外）

position:absolute 后， left right 都不为 auto 并且本身的width 不为 auto； margin-left 和margin-right 设置为auto 将会均分空间，

所以水平垂直居中可以用一下方案 
```css
position: absolute;
left:0;
right:0;
marigin-left: auto;
marigin-right: auto;  /*水平居中*/

top:0;
bottom:0;
marigin-top: auto;
marigin-bottom: auto;  /*水平居中*/
```
垂直居中, 但是有更好的方案：flex 和 tansform:translate(x,y) 右下
```css
position:absolute;
top:0;
bottom:0;
marigin-top: auto;
marigin-bottom: auto;  /*水平居中*/
```