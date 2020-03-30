class Person{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greeting() {
        console.log(`My name is ${this.name} and I am ${this.age}`)
    }
}

// To use this person object somewhere else...
module.exports = Person;