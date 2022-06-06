// Code your solution here

function findMatching(array, variable) {
  let newArray = [];
  for (let item of array) {
    if (item === variable) {
      newArray.push(item);
      console.log(newArray)
    } else if (item.toLowerCase() === variable) {
      newArray.push(item);
      console.log(newArray)
    }
  }
  return newArray;
}

function fuzzyMatch(array,variable){
    let newArray=[];
    for (let item of array){
        
        return newArray
    }
}

function matchName(array,variable){
    filter(array,function(item){
        
        return item.name===variable;
    })
}