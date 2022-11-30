// Additional assignments for Day 8

/* EXTRA 1
 Write a piece of code for reverting an array.
 es:
 [1, 3, 5] ==> [5, 3, 1]

/*
let trialArray=[1,3,5];
let newArray=trialArray.reverse();
console.log(newArray);

let array=[10,3,7,5,1];
let revArray=[];
for(let i=array.length-1;i>=0;i--)
{
    revArray.push(array[i]);
}
console.log("The reversed array is: ", revArray);
*/

/* EXTRA 2
 Write a piece of code for getting the maximum numerical value from an array.
*/

/*
let maxArray=[3,7,4,9,12,2,36,1];
let maxValue=maxArray[0];
for(let i=0;i<maxArray.length-1;i++)
{
   if(maxArray[i]>maxValue)
   {
    maxValue=maxArray[i];
   }
}
console.log("The largest number is",maxValue);

*/

/* EXTRA 3
 Write a piece of code for getting the minimum numerical value from an array.
*/

/*
let minArray=[2,15,1,10,9];
let minValue=minArray[0];
for(let i=0;i<minArray.length-1;i++)
{
   
        if(minArray[i]<minValue)
        {
           minValue=minArray[i] ;
        }
}
console.log("The smallest number is",minValue);
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

/* 
let evnArray=[3,5,4,6,9];
let oddArray=[];
let j=0;
for(let i=0;i<evnArray.length; i++)
{
 if(evnArray[i]%2==1){
    oddArray.push(evnArray[i]);

 }
}
console.log("The array after deleting even numbers:",oddArray);
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

/*
let incArray=[1,2,3,4];
let resArray=[];
for(let i=0;i<incArray.length;i++)
{

resArray.push(incArray[i]+1);
}
console.log("Incremented array",resArray);

*/
  


/* EXTRA 8 
 Replace all the strings contained in an array with their length.
 es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/*
let repArray=["strive", "is", "great"];
let lenArray=[];
for(i=0;i<repArray.length;i++)
{
lenArray.push(repArray[i].length);

}

console.log("The length of items are",lenArray);
*/
