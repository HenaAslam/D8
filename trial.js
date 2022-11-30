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
