---
title: js实现斐波那契取第n个值方法优化
date: 2018-04-16 11:10:35
tags: 前端学习总结
---

[参考链接](https://www.cnblogs.com/youweik/p/6285430.html)

四种优化方案：（算法效率逐渐递增）

1. 建立缓存
2. 直接数组存储
3. 定义两个变量循环存储前两个值
4. 应用数学公式

```js
/**
 * 斐波那契,求f(n)的值
 * 原始方案直接递归调用，重复计算太多，浪费资源。算法效率低
 */

function f(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return arguments.callee(n - 1) + arguments.callee(n - 2);
  }
}

/**
 *  优化1：定义闭包，加缓存存储已经计算过的资源
 */
var getN = (function() {
  var cache = {
    0: 1,
    1: 1
  };
  // 之所以要定义闭包是为了封装cache 不让外部可以改变它
  return function(n) {
    if (cache[n]) {
      return cache[n];
    } else {
      //把之前计算过的资源全部存下来，后面就可以直接用
      cache[n - 2] = arguments.callee(n - 2);
      cache[n - 1] = arguments.callee(n - 1);
      cache[n] = cache[n - 1] + cache[n - 2];
      return cache[n];
    }
  };
})();

/**
 *  优化2: 定义数组循环存储之前的值
 */

function getN1(n) {
  var arr = [];
  var i = 0;
  while (i <= n) {
    if (i == 0 || i == 1) {
      arr.push(1);
    } else {
      arr.push(arr[i - 1] + arr[i - 2]);
    }
    i++;
    // console.log(arr);
  }
  return arr[n];
}

  // console.log(getN(7));
  /**
   * 实现方案3:定义两个变量
   */
  function getN2(n){
    var pre = 1,
      cur = 1,
      result;
    if (n == 0 || n == 1) {
      return 1;
    }
    let i = 2;
    while (i <= n) {
      result = pre + cur;
      pre = cur;
      cur = result;
      i++;
    }
    return result;
  }
  console.time('getN2(1200)')
  console.log(getN2(1200))
  console.timeEnd('getN2(1200)')

  /**
   * 实现方案四：用数学公式：效率最高，数学真美
   * 代码略
   */
```

