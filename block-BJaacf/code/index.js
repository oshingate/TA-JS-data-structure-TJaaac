// 1. Create an array named numbers and store 5 number values in it
let numbers = [1, 2, 3, 4, 5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sumOF = (num) => {
  let sum = 0;
  for (let i of num) {
    sum += i;
  }
  return sum;
};
console.log(sumOF(numbers));
// 3. Calculate the average of array items and print it to the console using console.log()
let AverageOf = (num) => {
  let sum = 0;
  for (let i of num) {
    sum += i;
  }
  return sum / num.length;
};
console.log(AverageOf(numbers));
// 4. Find the highest number in the array and print it to the console using console.log()
let highestOf = (num) => {
  let highest = num[0];
  for (let i of num) {
    if (highest > i) {
      //
    } else {
      highest = i;
    }
  }
  return highest;
};
console.log(highestOf(numbers));
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestOf = (num) => {
  let lowest = num[0];
  for (let i of num) {
    if (lowest < i) {
      //
    } else {
      lowest = i;
    }
  }
  return lowest;
};
console.log(lowestOf(numbers));
// 6. Find the even numbers in the array and print them to the console using console.log()

let evenOf = (num) => {
  let even = [];
  for (let i of num) {
    if (i % 2 === 0) {
      even.push(i);
    }
  }
  return even;
};
console.log("Even array" + " " + evenOf(numbers));
// 7. Find the odd numbers in the array and print them to the console using console.log()
let oddOf = (num) => {
  let odd = [];
  for (let i of num) {
    if (i % 2 === 1) {
      odd.push(i);
    }
  }
  return odd;
};
console.log("odd array" + " " + oddOf(numbers));
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let divi5 = (num) => {
  let isDivi5 = [];
  for (let i of num) {
    if (i % 5 === 0) {
      isDivi5.push(i);
    }
  }
  return isDivi5;
};
console.log("divi by 5 array" + " " + divi5(numbers));
// 9. Log all the element of the array one by one
let logall = (num) => {
  for (let i of num) {
    console.log(i);
  }
};
logall(numbers);
// 10. Find all the number in the array that is divisible by 3
let divi3 = (num) => {
  let isDivi3 = [];
  for (let i of num) {
    if (i % 3 === 0) {
      isDivi3.push(i);
    }
  }
  return isDivi3;
};
console.log("divi by 3 array" + " " + divi3(numbers));
