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

let firstFivePositiveNumbers=[1,2,3,4,5]

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let myInfo={name:"Hena",surname:"Aslam",email:"nope@gmail.com",age:25}

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

myInfo.hasLicense=true;


/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete myInfo.age;


/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let randomInfo={name:"hsdj", surname:"ijhsdk",email:"xyz@gmail.com"}
if( myInfo.email===randomInfo.email){
console.log("same email")
}
else{
    console.log("not same email")
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart=35
if (totalShoppingCart>50){
    console.log(`the total amount is ${totalShoppingCart}`)
}
else{
    console.log(`the total amount is ${totalShoppingCart+10}`)
}


/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/



if (totalShoppingCart>50){
    console.log(`the total amount is ${totalShoppingCart*.8}`)
}
else{
    console.log(`the total amount is ${(totalShoppingCart+10)*.8}`)
}



/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

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

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent=[{ brand: 'BMW', model: 'x1', licensePlate: 'HH55' },
{ brand: 'BMW', model: 'x1', licensePlate: 'HH65' },
{ brand: 'BMW', model: 'x1', licensePlate: 'HH78' },
{ brand: 'BMW', model: 'x1', licensePlate: 'HH91' },
 { brand: 'BMW', model: 'x1', licensePlate: 'HH12' }]

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/
carsForRent.splice(0,1)
carsForRent.pop()
console.log(carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log(typeof car1)
console.log(typeof car1.licensePlate)
console.log(typeof car1.brand)
/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/
let carsForSale=[];
carsForSale.push(car1,car2,car3)
console.log(carsForSale)
let totalCars=carsForSale.concat(carsForRent)
console.log(totalCars)
/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

for(i=0;i<carsForSale.length;i++){
    let currentCar=carsForSale[i];
    console.log(currentCar.brand+currentCar.licensePlate+currentCar.model)
}



