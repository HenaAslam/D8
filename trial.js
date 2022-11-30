let arrayOfNumbers;
arrayOfNumbers=[1,2,3,4,5];
console.log(arrayOfNumbers);

console.log("\n");
let myDetails;
myDetails={name:"Hena" , surname:"Asslam" , emailAddress:"abc@gmail.com", age:25};
console.log(myDetails);
console.log("\n");


myDetails.hasLicense=false;
console.log(myDetails);
console.log("\n");

delete myDetails.age;
console.log(myDetails);
console.log("\n");

let yourDetails={name:"John" , surname:"Doe" , emailAddress:"xyz@gmail.com"};
if (myDetails.emailAddress===yourDetails.emailAddress){
    console.log("Both objects have same email address");
    
}
else{
    console.log("Both objects have different email address");
}
console.log("\n");



let totalShopCart=35;
let totalCost;
if(totalShopCart>50){
    totalCost=totalShopCart;
}
else{
    totalCost=totalShopCart+10;
}

console.log("The total cost is:", totalCost);
console.log("\n");


let newCost;
if(totalShopCart>50){
    totalCost=totalShopCart;
}
else{
    totalCost=totalShopCart+10;
}
newCost=totalCost*.8;
console.log("The total cost after black friday discount is:", newCost);
console.log("\n");


let car1={brand:"BMW", model:"x1", licensePlate:"HH12"};
let car2=Object.assign({},car1);
let car3=Object.assign({},car1);
let car4=Object.assign({},car1);
let car5=Object.assign({},car1);
car2.licensePlate="HH55";
console.log(car2);
car3.licensePlate="HH65";
console.log(car3);
car4.licensePlate="HH78";
console.log(car4);
car5.licensePlate="HH91";
console.log(car5);
console.log("The original remains unchanged:", car1);
console.log("\n");


let carsForRent=[car1,car2,car3,car4,car5];
console.log(carsForRent);
console.log("\n");



carsForRent.pop();
console.log(carsForRent);
carsForRent.splice(0,1);
console.log(carsForRent);
console.log("\n");


console.log("The type of car variable is :",typeof car1);
console.log("the type of licensePlate is:", typeof car1.licensePlate);
console.log("the type of brand is:", typeof car1.brand);
console.log("\n");


let carsForSale=[];
carsForSale.push(car1, car2, car3);
let totalCars= carsForSale.concat(carsForRent);
console.log(totalCars);
console.log("\n");


for(i=0;i<carsForSale.length;i++)
{
    console.log(carsForSale[i]);
}




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

let evenArray=[3,5,4,6,9];
for(let i=0;i<evenArray.length-1; i++)
{
 if(evenArray[i]%2==0){
    console.log(evenArray[i])
 }
}

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

let check="abcduioej"
let newString = "";
for (let i = 0; i <check.length; i++)
 {
  if (check[i] != "a" && check[i] != "e" && check[i] != "i" && check[i] != "o" && check[i] != "u") 
  {
         newString += check[i];
  }
}
console.log(newString);


let incArray=[1,2,3,4];
let resArray=[];
for(let i=0;i<incArray.length;i++)
{

resArray.push(incArray[i]+1);
}
console.log("Incremented array",resArray);
  

let repArray=["strive", "is", "great"];
let lenArray=[];
for(i=0;i<repArray.length;i++)
{
lenArray.push(repArray[i].length);

}

console.log("The length of items are",lenArray);