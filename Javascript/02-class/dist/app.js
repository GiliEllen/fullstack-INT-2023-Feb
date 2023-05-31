var person = {
    name: "gili",
    age: undefined
};
var person2 = {
    name: "gili2",
    age: undefined
};
//                0       1         2       3
var array = ["gili", undefined, person, person2, 5];
console.log(array);
for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
}
