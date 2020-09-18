// Section 3: Array Methods with Callbacks-------------------------
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']

//Every----------
const greaterZero = (x) => {
  return x >= 0;
}
nums.every(greaterZero);

const shorterEight = (x) => {
  return x.length < 8;
}
panagram.every(shorterEight);

//Filter-----------
const lessFour = x => {
  return x < 4;
}
nums.filter(lessFour);

const evenLength = x => {
  return x.length % 2 === 0;
};
panagram.filter(evenLength);

//Find-----------
const divisibleFive = x => {
  return x % 5 === 0;
}
nums.find(divisibleFive);

const longerFive = x => {
  return x.length > 5
};
panagram.find(longerFive);

//Find Index----------
const divisibleThree = x => {
  return x % 3 === 0;
};
nums.findIndex(divisibleThree);

const lessTwo = x => {
  x.length < 2;
};
panagram.findIndex(lessTwo);

//For Each------------
const multiplyThree = x => {
  console.log(3 * x);
}
nums.forEach(multiplyThree);

const exclamation = x => {
  console.log(x + '!');
};
panagram.forEach(exclamation);

//Map------------
const multiplyHundred = x => {
  return x * 100;
};
newArray = nums.map(multiplyHundred);

const upperCase = x => {
  return x.toUpperCase();
};
panagram.map(upperCase);

//Some----------
const divisibleSeven = x => {
  return x % 7 === 0;
}
nums.some(divisibleSeven);

const letterA = x => {
  return x.indexOf('a');
}
panagram.some(letterA);

//Hungry for More-------------
//Reduce-----------
const addNumbers = (total, num) => {
  return total + num;
}
nums.reduce(addNumbers);

const concat = (total, names) => {
  return total + names;
};
panagram.reduce(concat);

//Sort-----------
//for the most part, the order was ascending, however the number 10 is out of order
//for the most part, the order was alphabetical, however the word 'The' is out of place
nums.sort(function(a, b){return a-b});
nums.sort(function(a, b){return b-a});
panagram.sort(function(a, b){return a.length-b.length});
panagram.sort(function(a, b){return b.length-a.length});

//Array Methods Challenge Problems-------------
//isPanagram-------------
//could not figure out 

//Working with data-----------
products.filter(products=>{
  let less = products['price'] < 10;
  console.log(less);
})


let newArray = products.sort((a, b)=>{
  let nameOne = a['name'].toLowerCase();
  let nameTwo = b['name'].toLowerCase();
  if (nameOne < nameTwo) {
    return -1
  } else if (nameOne > nameTwo) {
   return 1
  } else {
    return 0
  }

})
console.log(newArray);








