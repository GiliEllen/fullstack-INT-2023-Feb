const person = {
  name: "gili",
  age: undefined,
};
const person2 = {
  name: "gili2",
  age: undefined,
};
//                0       1         2       3
const array:any = ["gili", undefined, person, person2, 5]

console.log(array)
                 
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}