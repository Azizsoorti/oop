class Animal {
     constructor(name, age) {
    this.name = name;
    this.age = age;
  }
   eat() {
    console.log(`${this.name} is eating.`);
  }
}

class Dog extends Animal {
      constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }
   bark() {
    console.log(`${this.name} is barking.`);
  }
}
const myDog = new Dog("Buddy", 3, "Golden Retriever");
myDog.eat();
myDog.bark();