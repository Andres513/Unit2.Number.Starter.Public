// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    let counter = 0;
    for (let i = 0; i < this.data.length; i++){
      counter = counter + 1;
  }
  return counter;
  }
  printNumbers() {
    //print the numbers in data  
    console.log(this.data);
    return this.data;
  }
  odds() {
    //return the odd numbers in data
    const odd = [];
    for (let i = 0; i < this.data.length; i++)
    if (this.data[i] % 2 !== 0){
      odd.push(this.data[i]);
    } 
    return odd;
  }
  evens() {
    //return the even numbers in data
    const even = [];
    for (let i = 0; i < this.data.length; i++)
    if (this.data[i] % 2 == 0){
      even.push(this.data[i]);
    } 
    return even;
  }
  sum() {
    //return the sum of the numbers
    let sum = 0;
    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }
    return sum;
  }
  product() {
    //return the product of the numbers
    let prod = 1;
    for (let i = 0; i < this.data.length; i++) {
      prod = prod * this.data[i];
    }
    return prod;
  }
  greaterThan(target) {
    //return the numbers greater than the target
    const greater = [];
    for (let i = 0; i < this.data.length; i++)
    if (this.data[i] > target){
      greater.push(this.data[i]);
    } 
    return greater;
  }
  howMany(target) {
    //return the count of a given number
    let ctr = 0;
    for (let i = 0; i < this.data.length; i++)
    if (this.data[i] === target){
      ctr = ctr + 1
    } 
    return ctr;
  }
}

//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
