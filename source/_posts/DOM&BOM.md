1. history.pushState()
2. history.search() ??
3. location url
4. navigator 获取浏览器信息
5. screen 对象
6. DOM 树 CSSOM 树 --> Render tree / reflow 确定位置（比较耗费性能）  repaint 上色

## 作业

封装一个事件代理：
```javascript
// 原理：事件冒泡，为父元素绑定事件代理子元素
document.getElementById('node').addEventListener('click',function (event){
    if(event.target.nodeName==='DIV'){
        // zhixing 
    }
},false)
function eventProxy(node,eventType,childNodeName,callback){
    node.addEventListener(eventType,function (event){
        if(event.target.nodeName===childNodeName){
            callback();
        }
    }   
}
```