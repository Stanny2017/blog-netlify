---
title: hexo-blog 配置总结
date: 2018-02-26 18:22:14
tags: 前端学习总结
---

## 参考资料

- [hexo从零开始到搭建完整 ](http://www.cnblogs.com/visugar/p/6821777.html)
- [使用Github Pages 搭建博客](https://segmentfault.com/a/1190000000458506)
- [nexT 主题配置](https://www.jianshu.com/p/d737c7fff867)
- [nexT 官方文档](http://theme-next.iissnan.com/)
- [hexo的next主题个性化配置教程](http://shenzekun.cn/hexo的next主题个性化配置教程.html)
- [五分钟搭建个人博客](https://www.jianshu.com/p/4eaddcbe4d12)

## 配置步骤

1. 安装 Git Bash
2. 安装 NodeJs
3. 安装 Hexo
4. 选择喜欢的主题根据官文进行相应配置
5. 本地部署和远程部署（修改站点配置文件 deploy 配置项）
6. 新建文章

## 命令

```
- hexo clean  清除缓存文件 (db.json) 和已经生成的静态文件 ( public )
- hexo generate  生成静态文件
- hexo new [layout] '文件名'
- hexo server  本地部署
- hexo deploy  远程部署
```



## 问题记录

1. hexo deploy 过程中遇到 Fatal HttpRequestException Error 
- 进入 hexo 官方文档查找到 [解决方案](https://github.com/hexojs/hexo-deployer-git) ：更新 git 至最新版本

2. git 版本更新
- [segmentfault](https://segmentfault.com/) 官网找到答案：直接覆盖安装即可

## mark

1.  NexT 使用的是 [Font Awesome](https://fontawesome.com/) 提供的图标， Font Awesome 提供了 600+ 的图标，可以满足绝大的多数的场景，同时无须担心在 Retina 屏幕下 图标模糊的问题。 

## Hexo 案例

1. http://vinnyxiong.cn/
2. http://visugar.com/