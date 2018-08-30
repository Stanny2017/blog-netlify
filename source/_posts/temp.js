/**
 * 二分查找：
 * 接受一个数组，和一个查找的字符
 */

function searchBinary(arr, str, low, high) {
    var middle = Math.floor((low + high) / 2);
    var value = arr[middle]
    if (value === str) {
        return middle;
    }
    if (str < value) {
        high = middle;
    } else {
        low = middle;
    }
    return searchBinary(arr, str, low, high);
}

console.log(searchBinary([0, 1, 2, 3, 4, 33, 255, 1000], 2, 0, 7))