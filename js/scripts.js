/**
 * 0. Thêm số nguyên vào mảng
 */

var arr = [];

document.getElementById("btnAdd").onclick = function () {
    var n = parseInt(document.getElementById("n").value);
    arr.push(n);
    document.querySelector("#txtArr").innerHTML = '[' + arr.join(', ') + ']';
}

/**
 * 1. Tính tổng các số dương trong mảng
 */

document.querySelector("#btnBai1").onclick = function () {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    document.querySelector("#kqBai1").innerHTML = sum;
}

/**
 * 2. Đếm có bao nhiêu số dương trong mảng
 */

