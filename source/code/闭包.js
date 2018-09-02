function parent() {
    var n = 0;
    return function () {
        n = n + 1;
        console.log(n)
    }
}
