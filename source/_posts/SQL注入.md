---
title: SQL注入
date: 2018-04-17 22:29:39
tags: 前端学习总结
---

[参考链接](http://www.cnblogs.com/rush/archive/2011/12/31/2309203.html)

1. 含义：SQL injection: 将恶意的 SQL 语句 插入 web 表单递交页面请求的查询字符串中，欺骗服务器执行恶意的 SQL 命令。
2. 防御措施：1.通过正则表达式校验用户输入  2.sql语句预编译和绑定变量 



## web 安全

1. XSS：跨站脚本攻击：无需用户登陆，在html页面中注入恶意脚本。

    - 关键字替换

   ​

2. CSRF ：跨站请求伪造：需用户登陆，冒充用户，以用户身份发送恶意请求

   [参考](https://blog.csdn.net/zhi_miss/article/details/51338401)

    - a.在请求地址中添加token并验证
    - b.验证HTTP Referer字段
    - c.在http头中自定义属性并验证
    - d.验证码

   ​