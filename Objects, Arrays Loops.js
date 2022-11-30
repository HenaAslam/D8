/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/*
let arrayOfNumbers;
arrayOfNumbers=[1,2,3,4,5];
console.log(arrayOfNumbers);
 */

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/*
 let myDetails;
myDetails={name:"Hena" , surname:"Asslam" , emailAddress:"abc@gmail.com", age:25};
console.log(myDetails);
*/

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* 
myDetails.hasLicense=false;
console.log(myDetails);
console.log("\n");

*/

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/*
delete myDetails.age;
console.log(myDetails);
console.log("\n");
*/

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* 
let yourDetails={name:"John" , surname:"Doe" , emailAddress:"xyz@gmail.com"};
if (myDetails.emailAddress===yourDetails.emailAddress){
    console.log("Both objects have same email address");
    
}
else{
    console.log("Both objects have different email address");
}
console.log("\n");
 */

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/*
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
*/

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/*
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

*/

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* 
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
console.log("\n")

*/

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* 
let carsForRent=[car1,car2,car3,car4,car5];
console.log(carsForRent);
console.log("\n");
 */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* 
carsForRent.pop();
console.log(carsForRent);
carsForRent.splice(0,1);
console.log(carsForRent);
console.log("\n");
*/

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* 
console.log("The type of car variable is :",typeof car1);
console.log("the type of licensePlate is:", typeof car1.licensePlate);
console.log("the type of brand is:", typeof car1.brand);
console.log("\n");
 */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* 
let carsForSale=[];
carsForSale.push(car1, car2, car3);
let totalCars= carsForSale.concat(carsForRent);
console.log(totalCars);
console.log("\n");
 */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/*
for(i=0;i<carsForSale.length;i++)
{
    console.log(carsForSale[i]);
}
 */
