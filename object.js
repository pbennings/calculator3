//   //   function Person(name, height, occupation) {
//   //     this.name = name
//   //     this.height = height
//   //     this.occupation = occupation
//   //   }

// function school(branch, term, class, student) {
//     this.branch = branch
//     this.term = term
//     this.class = class
//     this.student = occupation
// }

// let school = new School
//   //   let person = new Person('Ken Jones', 39, 'M')

//   //   console.log(showProps(ken, "ken"))

//   //   let Animal = {
//   //     type: 'Invertebrates',
//   //     displayType: function() {
//   //       console.log(this.type)
//   //     }
//   //   }

//   //   let animal1 = Object.create(Animal)

//   //   console.log(`animal1: `, animal1);
//   //   animal1.displayType()

//   //   let fish = Object.create(Animal)
//   //   fish.type = "Fish"
//   //   // fish.displayType()

//   //   // getters and setters
//   //   let obj = {
//   //    a: 7,
//   //   get b() {
//   //       return this.a + 1
//   //   },
//   //   set c(x) {
//   //     this.a = x / 2
//   //   }
//   // }

//   // console.log(obj.a)
//   // console.log(obj.b)
//   // obj.c = 50
//   // console.log(obj.a)

//   let d = Date.prototype
//   Object.defineProperty(d, 'year', {
//     get: function() { return this.getFullYear()},
//     set: function(y) { this.setFullYear(y) }
//   })

// let now = new Date()
// console.log('now.year: ', now.year)
// console.log(`now : `, now.getFullYear());

// now.year = 2001
// console.log(`now: `, now.getFullYear());

// let fruit = { name: "apple"}
// let fruitBear = fruit

// console.log(`fruit == fruitBear: `, fruit == fruitBear);
// console.log(`fruit === fruitBear: `, fruit === fruitBear);

// fruit.name = "grape"

// console.log(`fruitBear:`, fruitBear); // fruitBear.name = grape

// let num = 5
// let obj = {}
// let str = 'Good morning'

// function sum(x,y) {
//   total = x+ y
//   return total
// }

// numr = sum(4,3)

// console.log(total)

// var MYAPP = {}
// MYAPP.num = 5
// MYAPP.obj = {}
// MYAPP.str = "Good Morning"

// const parent = {
//   name: 'Hakeem',
//   age: 35,
//   heritage: 'African'
// }

// const child = Object.create(parent)
// child.name = 'Ryan'
// child.age = 7

// console.log(`name: `, child.name);
// console.log(`age: `, child.age);
// console.log(`heritage: `, child.heritage);

// const animalMethods = {
//   eat(amount) {
//     console.log(`${this.name} is eating`);
//     this.energy += amount;
//   },

//   sleep(length) {
//     console.log(`${this.name} is sleeping`);
//     this.energy += length;
//   },

//   play(length) {
//     console.log(`${this.name} is playing`);
//     this.energy += length;
//   }
// };

// function Animal(name, energy) {
//   let animal = Object.create(animalMethods)
//   animal.name = name
//   animal.energy = energy

//   return animal
// }

// const leo = Animal('leo', 7)
// const snoop = Animal('snoop', 10)

// leo.eat(10)
// snoop.play(5)

// // Protoypal Instantization

// function Animal(name, age) {
//   let animal = Object.create(Animal.prototype)
//   animal.name = name
//   animal.age = age

//   return  animal
// }

// Animal.prototype.eat = function(amount) {
//   console.log(`${this.name} is eating`)
//   this.energy += amount
// }

// Animal.prototype.sleep = function(amount) {
//   console.log(`${this.name} is sleeping`)
//   this.energy += length
// }

// Animal.prototype.play = function(amount) {
//   console.log(`${this.name} is sleeping`)
//   this.energy += length
// }
// const leo = Animal('leo', 7)
// const snoop = Animal('snoop', 10)

// let.eat(12)
// snoop.play(2)

// function Animal(name, age) {
//   let animal = Object.create(Animal.prototype)
//   animal.name = name
//   animal.age = age
// }

// Animal.prototype.eat = function(amount) {
//   console.log(`${this.name} is eating`)
//   this.energy += amount
// }

// Animal.prototype.play = function(amount) {
//   console.log(`${this.name} is playing`)
//   this.energy += amount
// }

// let leo = new Animal('leo', 7)
// let snoop = new Animal('snoop', 10)

// console.log('leo.name: ', leo.name);

// Pseudoclassical Instantization(ES6)

// class Animal {
//   constructor(name, energy) {
//     this.name = name
//     this.energy = energy
//   }






//   eat(amount) {
//     console.log(`${this.name} is eating`)
//     this.energy += amount
//   }

//   eat(length) {
//     console.log(`${this.name} is sleeping`)
//     this.energy += length
//   }

//   play(length) {
//     console.log(`${this.name} is sleeping`)
//     this.energy -= length
//   }
// }

// let leo = new Animal('leo', 7)
// let snoop = new Animal('snoop', 10)

// leo.eat(10)
// snoop.play(2)

class School {
  constructor(name) {
    this.name = name
    // this.term = term
    // this.subject = subject
    // this.student = student
    // this.person = person
  }
  // branch(branch) {
  //   console.log(`${this.branch} is a branch`)
  //   this.branch = branch
  // }
  
  term(name) {
    console.log(`${name} is a new term`)
    this.term = name
  }
  
  subject(name) {
    console.log(`${name} is hard af!`)
    this.subject = name
  }
  
  person(student) {
    console.log(`${this.branch} is Paul`)
    this.student = student
  }
}

let codeImmersives = new School('Code Immersives')
// let building = new School('West 44th St')

codeImmersives.term('Term 2')
codeImmersives.subject('Javascript')
console.log(codeImmersives)
// building.student(2)
