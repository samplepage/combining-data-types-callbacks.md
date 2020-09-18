//Section 2: Combining Datatypes ---------------------------------------
//Combine objects, arrays, and functions-------------------------
//1. 
const crayonBox = {
    crayons: ['red', 'blue', 'green', 'orange']
  }
  
  console.log(crayonBox.crayons[3])
  
  //2.
  const bottle = {
    cap: {
      material: 'metal',
      color: 'blue'
    }
  }
  console.log(bottle['cap']['material'])
  
  //3.
  const receipt = [{name: 'filler', price: 45}]
  console.log(receipt[0]['name'])
  
  //4.
  const apartmentBuilding = [['Bob', 'Mateen', 'Bruno']]
  console.log(apartmentBuilding[0][2])

//Combine objects, arrays, and functions more than one level deep----------------------
 //1.
const knit = () => {
    return {
      item: 'scarf',
      size: '6ft'
    }
  }
  console.log(knit().item)

//2.
const crayonSelector = () => {
    return {crayons:['red', 'blue', 'green', 'orange']}
  }
  console.log(crayonSelector().crayons[2])

//3.
const powerButton = () => {
    return options = () => {
      console.log('select a song');
    }
  }
  powerButton()()

//Model a Vending Machine--------------------------
const vendingMachine = {
    snacks: [
      { name: "snickers", price: 2 },
      { name: "skittles", price: 3 },
      { name: "milkyway", price: 4 },
    ],
    vend: (arrPosition) => {
      return vendingMachine.snacks[arrPosition].name;
    },
  };
  vendingMachine.vend(2);

//Callbacks--------------------------
//1.
const add = (argOne, argTwo) => {
  return argOne + argTwo
}
add(9, 5);
//2.
const subtract = (argOne, argTwo) => {
  return argOne - argTwo
}
subtract(9, 5);
//3.
const multiply = (argOne, argTwo) => {
  return argOne * argTwo
}
multiply(9, 5);
//4.
const divide = (argOne, argTwo) => {
  return argOne / argTwo
}
divide(10, 5);
//5, 6, 7
function calculate (num1, num2, operates) {
  return operates(num1, num2);
} 

//Function Definition Placement------------------------
const bar = () => {
    console.log('bar here');
}
bar();

const foo = () => {
    console.log('foo here');
}
foo();

//Error Reading-----------------------
//There is a syntax error missing equals sign before the parenthesis, and the function call is hoisted above the function itself.

