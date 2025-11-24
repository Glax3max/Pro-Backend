// 1.

const dog = {} // Empty object named dog

// 2.

console.log(dog)

// 3.

dog.name = "Lyca";
dog.legs = "4";
dog.age = "6";
dog.color = "brown";
dog.bark = "woof woof";



// 4.

const valuesOfDog = Object.values(dog)

// 5.

dog.getDogInfo = function () {
    return `Dog name is ${this.name} . It has ${this.legs} legs and its ${this.color} in color and sounds like ${this.bark}`;
}

console.log(dog.getDogInfo());

