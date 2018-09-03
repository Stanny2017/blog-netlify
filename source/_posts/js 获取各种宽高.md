# js获取宽高各种属性对比

参考：[MDN in english](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth)

## offsetWidth/offsetHeight

- 只读属性
- 包含 padding
- 包含 border
- 包含 scrollbar(滚动条)

## clientWidth/clientHeight

- 只读属性
- 包含 padding
- 不包含 border
- 不包含 scrollbar(滚动条)
- 没有设置 css 样式的时候或者是 inline layout 值默认都是 0 

## scrollHeight

- 包含被 hidden 的部分
- 包含 padding 
- 不包含 boder 

## scrollTop

- 非只读，可以 set
- 计算滚动的距离，一般为正
- 对于有滚动条的 ele  否则为 0
An element's scrollTop value is a measurement of the distance from the element's top to its topmost visible content. When an element's content does not generate a vertical scrollbar, then its scrollTop value is 0.

## offsetTop

- 距离 最近的 positioned 父元素顶部（padding edge）的 pixels
- 包括 padding 
- 不包括 border 

## offsetParent

- 返回距离元素最近的 positioned 父元素的引用
- 如果 父元素都是 non-positioned 则返回 html 或者是 body
- display:none 的元素  return null

