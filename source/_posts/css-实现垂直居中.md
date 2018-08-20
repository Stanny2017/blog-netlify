---
title: css 实现垂直居中
date: 2018-04-12 10:15:49
tags: 前端学习总结
---

# CSS实现垂直水平居中

1. flex布局实现垂直居中

   ```html
   <div id="wrapper">
           <div id="content">
               <br>
               父元素设置 diplay:flex;
               <br>
               垂直居中 align-items:center
               <br>
               水平居中 justify-content:center
           </div>
       </div>
   ```

   ```css
   <style>
           #wrapper {
               background: cornsilk;
               height: 600px;
               display: flex;
               align-items: center;
               /*交叉轴垂直居中*/
               justify-content: center;
               /*主轴水平居中*/
           }

           #wrapper>div {
               
               background:cadetblue;
               height: 300px;
               width: 300px;
           }
       </style>
   ```

2. 让绝对定位的div居中

   ```css
   	div {
   	    position: absolute;
   	    width: 300px;
   	    height: 300px;
   	    margin: auto;
   	    top: 0;
   	    left: 0;
   	    bottom: 0;
   	    right: 0;
   	    background-color: pink; /* 方便看效果 */
   	}

   ```

3. 设置left ，top 为50%；再用margin控制向左向上移动自身宽高的一半

   ```css
   	div {
   	    position: absolute;     /* 这里如果有父元素要设置position值为非static */
   		/*position:relative; 父元素要设置为absolute*/
   	    width:500px;
   	    height:300px;
   	    top: 50%;
   	    left: 50%;
   	    margin: -150px 0 0 -250px;      /* 外边距为自身宽高的一半 */
   	    background-color: pink;     /* 方便看效果 */
   	 }

   /* 未知容器的宽高*/
   	div {
   	    position: absolute;     
   	    width:500px;
   	    height:300px;
   	    top: 50%;
   	    left: 50%;
   	    transform: translate(-50%, -50%);
         	/*translate(x,y) 指定向右移动x向下移动y，括号的百分比数据，以本身的长宽为基数，比如，本身的长为100px，高为100px. 
           那填(50%,50%)就是向右，向下移动50px，添加负号就是向着相反的方向移动*/
   	    background-color: pink;     /* 方便看效果 */
   	}


   ```

   ​

4. 水平居中div：设置`margin：0 auto`；即 `margin-left`和`margin-right`都为`auto`