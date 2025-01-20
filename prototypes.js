// Each object has a hidden link to another object called its prototype.
// This prototype object provides default properties and methods that can be inherited by the object. 
// This mechanism is known as prototypal inheritance.

// const personProto = {
//     firstname: "jhon",
//     lastname: "duo",
//     greet () {
//         console.log(`Hello, I'm ${this.firstname} ${this.lastname}`);
//     }
// }

// const person1 = Object.create(personProto);

// person1.lastname = "Alice";

// console.log(person1);
// console.log(person1.firstname);
// person1.greet();
// console.log(console.log('Hi iam two consoles'));



// ES^ classes

class Vehicle {
    constructor() {
        this.wheels = 4;
        this.auto = true;
    }

    Electric() {
        return "I'm electric"
    }
}

class Bike extends Vehicle {
    constructor() {
        super();
        this.wheels = 2;
        this.auto = false;
    }


}

const myBike = new Bike();

console.log(myBike);
console.log(myBike.Electric());