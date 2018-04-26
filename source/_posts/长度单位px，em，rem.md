---
title: 长度单位px，em，rem
date: 2018-04-22 10:15:39
tags: 前端学习总结
---

- [参考1](https://blog.csdn.net/zhs45656/article/details/52101109)
- [参考2](https://www.w3cplus.com/css/px-to-em)

# px

相对长度单位，一个px对应屏幕一个像素点

# em

相对长度单位，相对父元素的 font-size ，一般情况下，font-size 默认渲染 16px 

所以一般情况下，1em = 16px； 当然em的值是相对的，并不是固定的

# rem

相对长度单位。相对于根元素(即html元素)font-size计算值的倍数

```html
<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
<meta charset="utf-8" />
<title>rem_CSS参考手册_web前端开发参考手册系列</title>
<meta name="author" content="Joy Du(飘零雾雨), dooyoe@gmail.com, www.doyoe.com" />
<style>
html,
h1 {
	font-size: 12px;
}
p {
	font-size: 2rem;
}
</style>
</head>
<body>
<h1>下面的文字将是html定义的字体大小的2倍：</h1>
<p>我是html定义的12px的2倍，字体大小为24px</p>
</body>
</html>
```

