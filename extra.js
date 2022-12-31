 // Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/
let arrayToRevert=[1,3,5];
let revertedArray=[];
for(i=arrayToRevert.length-1;i>-1;i--){
revertedArray.push(arrayToRevert[i])
}
console.log(revertedArray)

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/
//using function
const arr = [1, 2,9, 3];
const max = Math.max(...arr);
console.log(max)
//without using function
let maxArray=[1,7,4,9,11,3,14,7];
let maxValue=0;
for(i=0;i<maxArray.length;i++){
    if(maxArray[i]>maxValue){
        maxValue=maxArray[i]
    }
}
console.log(maxValue)

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/
//using function
let arr2=[9,3,2,4]
let min=Math.min(...arr2)
console.log(min)
//without using function
let minArray=[7,4,9,11,3,14,7];
let minValue=+Infinity;
for(i=0;i<minArray.length;i++){
    if(minArray[i]<minValue){
        minValue=minArray[i]
    }
}
console.log(minValue)

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

let evenArray=[1,2,3,4,5,6,7,8,9];
let resultArray=[];
for(i=0;i<evenArray.length;i++){
    if(evenArray[i]%2===0){
        resultArray.push(evenArray[i])
    }
}
console.log(resultArray)

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

let deleteEven=[1,2,3,4,5,6,7,8,9];
for(i=0;i<deleteEven.length;i++){
    if(deleteEven[i]%2===0){
       
        deleteEven.splice(i--,1)
    }
}
console.log(deleteEven)

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

let check="abcdueifgho"

for (let i = 0; i <check.length; i++)
 {
  if (check[i] === "a" || check[i] === "e" || check[i] === "i" || check[i] === "o" || check[i] === "u") 
  {
    check= check.replace(check[i],'')
  }
}
console.log(check)
/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

let incArray=[1,2,3,4,5,6,7,8,9]
for(i=0;i<incArray.length;i++){
    incArray[i]=incArray[i]+1;
}
console.log(incArray)
/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

let repArray=["strive", "is", "great"];
for(i=0;i<repArray.length;i++){
    repArray[i]=repArray[i].length
}
console.log(repArray)
