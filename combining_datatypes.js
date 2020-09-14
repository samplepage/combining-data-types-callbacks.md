//Section 2: Combining Datatypes ---------------------------------------
//Combine objects, arrays, and functions
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
  



