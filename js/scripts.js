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

/**
 * 6. Đổi chỗ 2 giá trị trong mảng theo vị trí
 */

document.getElementById("btnBai6").onclick = function () {
    var a = Number(document.querySelector("#a").value);
    var b = Number(document.querySelector("#b").value);
    if (a < 0 || a >= arr.length || b < 0 || b >= arr.length) {
        alert("Chỉ số vị trí sai!");
        return;
    }
    var newArr = arr.map(function(n) {
        return n;
    });
    var temp = newArr[a];
    newArr[a] = newArr[b];
    newArr[b] = temp;
    document.querySelector("#kqBai6").innerHTML = '[' + newArr.join(', ') + ']';
}

/**
 * 7. Sắp xếp mảng theo thứ tự tăng dần
 */

function bubbleSort(array) {
    var newArray = array.map(function(n) {
        return n;
    });
    var i = array.length - 1;
    while (i >= 0) {
        for (let j = 0; j < i; j++) {
            if (newArray[j] > newArray[j + 1]) {
                var temp = newArray[j];
                newArray[j] = newArray[j + 1];
                newArray[j + 1] = temp;
            }
        }
        i -= 1;
    }
    return newArray;
}

document.getElementById("btnBai7").onclick = function () {
    var newArr = bubbleSort(arr);
    document.querySelector("#kqBai7").innerHTML = '[' + newArr.join(', ') + ']';
}

/**
 * 8. Tìm số nguyên tố đầu tiên trong mảng
 */

function prime(num) {
    if (num < 2) {
        return false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false;
            }
        }
    }
    return true;
}

document.getElementById("btnBai8").onclick = function () {
    var firstPrime = -1;
    for (let i = 0; i < arr.length; i++) {
        if (prime(arr[i])) {
            firstPrime = arr[i];
            break;
        }
    }

    document.getElementById("kqBai8").innerHTML = firstPrime;
}