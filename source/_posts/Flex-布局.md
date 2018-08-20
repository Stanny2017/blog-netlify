---
title: Flex 布局
date: 2018-04-12 11:39:33
tags: 前端学习总结
---

# Reference

- [参考：阮一峰博客](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?^%$)
- [flex应用](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)


## 个人学习记录

### 基本概念

1. flex 容器子元素称为flex项目
2. 容器默认两根轴，水平主轴和垂直交叉轴。
    - 主轴：`main start`和`main end`
    - 交叉轴：`corss start`和`cross end`
3. 项目默认沿主轴排列，单个项目占据的主轴空间叫做`main size` 占据交叉轴空间称为`cross size`

### 容器属性

1. 6个属性
  - `flex-direction`   row|row-reverse|column|column-reverse
  - `flex-wrap` 定义如何换行，nowrap（默认，不换行）；wrap；wrap-reverse（第一行在下方）
  - `flex-flow` flex-direction 和 flex-wrap 两个属性的值
  - `justify-content` 定义了项目在主轴上的对齐方式 flex-start|flex-end | center|space-between|space-around
  - `align-items` 定义在交叉轴上如何对齐；flex-start|flex-end|center|baseline |stretch ;
  - `align-content`  定义了多根轴线的对齐方式

### 项目属性

1. 6个项目属性

  - `order` 定义项目排列顺序。

  - `flex-grow` 定义项目的放大比例，如果所有项目的`flex-grow`属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。 flex-grow 默认为0，如果存在剩余空间，也不会放大。值为1 则自动占据剩余空间或者等分（多个items）剩余空间

  - `flex-shrink` 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。负值对该属性无效。

  - `flex-basis` 定义项目占据的主轴空间，（在分配空间之前）

  - `flex` flex-grow ,flex-shrink 和 flex-basis 的简写  默认 0 1 auto 不会放大 会缩小
    该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
    建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。

  - `align-self` align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。


### 圣杯布局


### note

- vh  相对视口的高度单位，视口被均分为100单位的vh
- vw  

  ​










