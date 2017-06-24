//function rotates two dimensional array
function rotateArr(arr) {
    let newArr = [];

    for (let i = 0; i < arr[0].length; i += 1) {
        newArr.push([]);
    }

    for (let k = 0; k < arr.length; k += 1) {

        for (let j = 0; j < arr[k].length; j += 1) {
            newArr[j].push(arr[k][j]);
        }

    }

    return newArr.reverse();
}

//function empty two dimensional array
function createMatrix(n) {

    let arr = [];

    for (let i = 0; i < n; i += 1) {
        arr.push(new Array(n));

        for (let j = 0; j < n; j += 1) {
            arr[i][j] = '-';
        }

    }

    return arr;
}

//function counts cycles needed for filling 
//two dimensional array according to the length of child array(odd, even)
function countCycles(arr) {

    let arrChildLength = arr[0].length;
    let cycles;

    if (arrChildLength / 2 === 0) {
        cycles = arrChildLength / 2;
    } else {
        cycles = Math.round(arrChildLength / 2);
    }

    return cycles;
}

//function fills first child of two dimensional array, 
//then rotates two dimensional array and fills first child
// So after function finish work we get two dimensioal array with filled values
//on outer square perimeter and then using recursion we filled inner square perimeter,
// and so on according to the cycles count which depends on two dimensional array child length
function snail(arr, num, counter) {

    let arrChildLength = arr[0].length;
    let cycles = countCycles(arr);

    var counter = counter || 0;
    var num = num || 0;

    const SQUARE_SIDES = 4;

    if (num === cycles) {

        if (arrChildLength % 2 !== 0) {
            arr[cycles - 1][cycles - 1] = counter;
        }

        console.table(arr);
        return arr;
    }

    for (var i = 0; i < SQUARE_SIDES; i += 1) {

        for (var j = num; j < arrChildLength - 1 - num; j += 1) {
            arr[num][j] = counter++;
        }

        arr = rotateArr(arr);

    }

    num += 1;
    snail(arr, num, counter);
}

// create empty two dimesional array 10*10
var emptyMatrix = createMatrix(10);

//filled it with values in spiral or snail view
snail(emptyMatrix);