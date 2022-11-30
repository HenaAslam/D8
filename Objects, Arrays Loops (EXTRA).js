// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]
*/

/*let trialArray=[1,3,5];
for(let i=0;i<trialArray.length;i++)
{
    let j=trialArray.length;
    let newArray[i]=trialArray[j-1];
    j--;
}
console.log(newArray);

let trialArray=[1,3,5];
let newArray=trialArray.reverse();
console.log(newArray);
*/

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/*
let minArray=[2,15,10,9];
let minValue;
for(let i=0;i<minArray.length;i++)
{
    for (let j=1;j<minArray.length;j++)
    {
        if(minArray[i]>minArray[j])
        {
           minValue=minArray[i] ;
        }
    }
}
console.log("The smallest number is",minValue);


*/

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/*let maxArray=[2,15,10,9];
let maxValue;
for(let i=0;i<maxArray.length;i++)
{
    for (let j=1;j<maxArray.length;j++)
    {
        if(maxArray[i]>maxArray[j])
        {
           maxValue=maxArray[i] ;
        }
    }
}
console.log("The largest number is",maxValue);
  */

/* EXTRA 4
 Write a piece of code for getting only even numerical values from an array.
*/

/* 
let evenArray=[3,5,4,6,9];
for(let i=0;i<evenArray.length; i++)
{
 if(evenArray[i]%2==0){
    console.log(evenArray[i])
 }
}
 */

/* EXTRA 5
 Write a piece of code for deleting only even entries from an array.
*/

/* /*evenArray=[3,5,4,6,9];
let oddArray;
let j=0;
for(let i=0;i<evenArray.length; i++)
{
 if(evenArray[i]%2==1){
    oddArray[j]=evenArray[i]
    j++;
 }
}
console.log(oddArray);
*/

/* EXTRA 6
 Write a piece of code for removing all the vowels from a string.
*/

/* let check="abcdu"
let newString = "";
for (let i = 0; i <check.length; i++)
 {
  if (check[i] != "a" && check[i] != "e" && check[i] != "i" && check[i] != "o" && check[i] != "u") 
  {
         newString += check[i];
  }
}
console.log(newString); */

/* EXTRA 7
 Write a piece of code for increasing all the numerical values in a array by 1.
*/

/* /*let incArray=[1,2,3,4];
let resArray;
for(let i=0;i<incArray.length;i++)
{

resArray[i]=incArray[i]+1;
}
console.log(resArray);
*/
  


/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/*
let repArray=["strive", "is", "great"];
let lenArray;
let j=0;
for(i=0;i<repArray.length;i++)
{
lenArray[j]=repArray[i].length;
j++;
}

console.log(lenArray);

*/
