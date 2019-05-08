/*
 * 根据name 返回 url 中参数的值
 * 自己写的方法如下；
 */
const getParamsValue = name => {
    // location.search 返回当前 url 查询字符串，location.hash 返回当前 url "#" 及之后的字符串
    const searchStr = location.search.substr(1);
    // hashStr = location.hash.substr(1);
    const searchArr = searchStr.split('&');
    const obj = {};
    for (let i = 0; i < searchArr.length; i++) {
        const arr = searchArr[i].split('=');
        obj[arr[0]] = arr[1]
    }

    let result = obj[name]
    if (!result) {
        return null
    } else return result  // 如果 url 中参数包括中文，应该用 decodeURIComponent 包一下
}


// 法二： 网上找到的方法
function getQueryStringSearch(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURIComponent(r[2]);
    }
    return null;
}

// 法三：替换 & 为 ; 替换 = 为 :  然后加上 ""   最后 JSON.parse()
function parseURLParams(serachURL) {
    var str = '{"' + serachURL.replace(/=/g, '":"').replace(/&/g, '","') + '"}';
    return JSON.parse(str)
}


var value1 = (function () {
    return {
        name: 'dp'
    }
}());

var value2 = (function () {
    return {
        name: 'xq'
    }
})();


(function () {
    console.log('xiaoqian')
})()

