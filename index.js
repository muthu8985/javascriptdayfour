let person = {};
person.fname = "muthu";
person.lname = "kumar";
person.age = 20;
person.mobilename = "redmi";
person.fullname=function(){
  return(this.fname+""+this.lname).toUpperCase();
}
  document.getElementById("mobile").innerHTML =person.fname +""+person.lname
  document.getElementById("mobile").innerHTML=person.fullname()
  // add a method to uppercase

  
// creating an by new object keyword

const personOne = new Object();
personOne.name = "muthukumar";
personOne.age = 20;
personOne.eyecolor = "blue";
personOne.degree = "ug";
personOne.details = function () {
  return this.name + " " + this.degree;
};
 document.write(personOne.name)
//  object properties
console.log(personOne["age"])
// JavaScript Object Methods

console.log(personOne.details());
// Nested Objects
const mycar={
    myname:"muthu",
    myage:24,
    cars:{ 
        car1:"hyundai",
        car2:"honda",
        car3:"mahindra"
    }
}
let c1= "cars";
let c2= "car1";
document.getElementById("carmine").innerHTML = mycar[c1][c2];
document.write("   "+mycar.cars.car2)
