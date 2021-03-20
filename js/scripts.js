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

document.querySelector("#btnBai2").onclick = function () {
    var l = arr.filter(function (n) {
        return n > 0;
    }).length;
    document.querySelector("#kqBai2").innerHTML = l;
}

/**
 * 3. Tìm số nhỏ nhất trong mảng
 */

document.querySelector("#btnBai3").onclick = function () {
    var arrCP = arr.map(function(n) {
        return n;
    });
    arrCP.sort(function(a, b) {
        return a - b;
    });
    document.getElementById("kqBai3").innerHTML = arrCP[0];
}

/**
 * 4. Tìm số dương nhỏ nhất trong mảng
 */

document.getElementById("btnBai4").onclick = function () {
    var arrP = arr.filter(function(n) {
        return n > 0;
    });
    arrP.sort(function(a, b) {
        return a - b;
    });
    document.querySelector("#kqBai4").innerHTML = arrP[0];
}

/**
 * 5. Tìm số chẵn cuối cùng trong mảng
 */

document.querySelector("#btnBai5").onclick = function () {
    var even = arr.filter(function (n) {
        return n % 2 == 0;
    });
    document.querySelector("#kqBai5").innerHTML = even.length != 0 ? even[even.length - 1] : -1;
}