const string = "aaaaabbbbbbccccc";
// in this object we will store the letters of the array
const table = {}
const letters = string.split("")
for(let i = 0 ; i < letters.length ; i++){
// if thhe value of the index is not in the table we will add it 
    if(table[letters[i]] === undefined){
        table[letters[i]] = 1;
    }
}
// in this variable we will take all the keys of the table than make then an array then a string
const unduplicatedLetters = Object.keys(table).join("");
console.log(unduplicatedLetters);




let Array1 = [0,1,2,3,4,5,5];
let Array2 = [4,5,6,7,8,9,0,5]
const findUnionValues = (Array1, Array2) =>{
//check if the Array are not empty
    if(Array1.length === 0 || Array2.length === 0){
        return false
    }
    else{
        let commonValues = [];
        let table = {};
        for(let i = 0 ; i<Array1.length;i++){
            // we will put all the values of first array in the table object
          if(table[Array1[i]]=== undefined){
            table[Array1[i]]=1;
          } 
        }
        for(let j = 0 ; j<Array2.length;j++){
            //if the value of the second array is in the table object and not in the common value array put it ib the commob value array
           if(table[Array2[j]] !== undefined && commonValues.indexOf(Array2[j]) == -1){
                commonValues.push(Array2[j]);
           }
        }
        return commonValues;
    }

}
console.log(findUnionValues(Array1,Array2));




let Array12 = [0,1,2,3,4,5];
let Array22 = [4,5,6,7,0]
const findIntersectValues = (Array12, Array22) =>{
   //check if the Array are not empty
    if(Array12.length === 0 || Array22.length === 0){
        return false
    }
    else{
        const table = {};
        for(let i = 0 ; i<Array12.length;i++){
            // we will put all the values of first array in the table object
          if(table[Array12[i]]=== undefined){
            table[Array12[i]]=1;
          } 
        }
        for(let j = 0 ; j<Array22.length;j++){
            // here if the value do not exist in the object we add it to the table object
           if(table[Array22[j]] === undefined){
                table[Array22[j]]=1;
           }
        }
        const intersectValues = Object.keys(table);
        return intersectValues;
    }
}
console.log(findIntersectValues(Array12,Array22));


const sortingArray = (array)=> {
    for (let i = 0; i < array.length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < array.length - i - 1; j++) {
        // Swap if the element found is greater than the next element
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
          swapped = true;
        }
      }
      // the array is already sorted if there is not swap in the loop
      if (!swapped) break;
    }
    return array
  }
console.log(sortArray([7,8,5,4,3,2,455,-1]))

let array = "RBB_YYY"
let happyGame =(array)=>{
    table = {}
    for(let i = 0 ; i < array.length ; i++){
        if(table[array[i]]=== undefined){
            table[array[i]]=1
        }
        else if(table[array[i]]){
            table[array[i]]++
        }
    }
    let isHappy = true;
    console.log(table)
    for(key in table){
        if(table[key]== 1 && key !=="_"){
            isHappy = false
        }
    }
    return isHappy ? "Happy game" : "UnHappy Game"
    
}
console.log(happyGame(array));





