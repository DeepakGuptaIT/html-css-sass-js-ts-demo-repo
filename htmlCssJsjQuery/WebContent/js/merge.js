let merge = function () {
    console.log("merge");
    var res = [];
    for (let i = 0; i < arguments.length; i++) {
        res = [...res, ...arguments[i]]
    }
    res = [].concat(...res);
    res = [...new Set(res)];
    res.sort();
    return res;
}

var _a = ["abc", "bcd"]
var _b = ["abcd", "aaa"]
var _c = ["bb", "ac"]
var _d = ["bb", "ac"]

var result = merge([_a, _b, _c, _d]);
console.log(result)

// console.log(calc(4, 5, (a, b) => a - b))