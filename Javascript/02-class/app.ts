const person = {
  name: "gili",
  age: undefined,
};
const person2 = {
  name: "gili2",
  age: undefined,
};
//                      0       1       2       3        4
const array: any[] = ["gili", undefined, person, person2, 5];

const arr = [1, 5, 89, 15, 1];
const arr2 = [5, 5];

const concatArr: number[] = arr.concat(arr2, [1, 5]);

concatArr.push(10, 11, 15);

array.fill(100);

function notEqualFive(arrayToRun) {
  for (let i = 0; i < arrayToRun.length; i++) {
    console.log(arrayToRun[i]);
  }
}






function addFive(number) {
//   console.log(number + 5);
}

function hello(arrayToRun) {
//   console.log(arrayToRun);
  arrayToRun.forEach((number, index) => {
    // console.log(index)
    addFive(number);
  });
}

function addNumber(number, arr) {
  arr.push(number);
}


// notEqualFive(arr)
hello(arr);

addNumber(90, arr)






console.log(concatArr.includes(100))











const result = concatArr.filter((x) => x != 5);

// console.log(result);

// function sum(a: number, b: number) {
//   return a + b;
// }

const minus = (a: number, b: number) => {
  return a - b;
};

// sum(3,2)
// minus(2,1)

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }


function addTwoNumbers(a:number, b:number) {
    return a + b
}

function calcAge(birthYear, currentYear) {
    
    return `in year ${currentYear} this person was ${currentYear - birthYear} year old`
}

function calcAge2(birthYear:number[], currentYear) {
    birthYear.forEach(year => {
        console.log(`in year ${currentYear} this person was ${currentYear - year} year old`)
    });
    
}

calcAge2([2020, 2019], 2022)