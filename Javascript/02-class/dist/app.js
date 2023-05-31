var person = {
    name: "gili",
    age: undefined
};
var person2 = {
    name: "gili2",
    age: undefined
};
//                      0       1       2       3        4
var array = ["gili", undefined, person, person2, 5];
var arr = [1, 5, 89, 15, 1];
var arr2 = [5, 5];
var concatArr = arr.concat(arr2, [1, 5]);
concatArr.push(10, 11, 15);
array.fill(100);
function notEqualFive(arrayToRun) {
    for (var i = 0; i < arrayToRun.length; i++) {
        console.log(arrayToRun[i]);
    }
}
function addFive(number) {
    //   console.log(number + 5);
}
function hello(arrayToRun) {
    //   console.log(arrayToRun);
    arrayToRun.forEach(function (number, index) {
        // console.log(index)
        addFive(number);
    });
}
function addNumber(number, arr) {
    arr.push(number);
}
// notEqualFive(arr)
hello(arr);
addNumber(90, arr);
console.log(concatArr.includes(100));
var result = concatArr.filter(function (x) { return x != 5; });
// console.log(result);
// function sum(a: number, b: number) {
//   return a + b;
// }
var minus = function (a, b) {
    return a - b;
};
// sum(3,2)
// minus(2,1)
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
