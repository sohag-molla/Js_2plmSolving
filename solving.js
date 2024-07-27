// 1.Destructuring //

const person = {
    Name:"Sohag",
    Age:"19"
}

let{Name,Age} = person;

console.log(Name) //Ans: Sohag
console.log(Age) //Ans:19



// 2.Module //

// const name = " Sohag ";
// const hobby = "dowing somthing new";

// export {name,hobby}



// 3.Classes //


// class userInfo {
//     constructor(name,gender,age,hobby,homeTwon){
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//         this.hobby = "dowing somthing new";
//         this.homeTwon = homeTwon;
//     }
// }

// const user1 = new userInfo("Sohag","Male",19,"dowing somthing new","Mollahat");




// console.log(user1);


// 4.Getter and Setter //


  //Getter//

  // const Person = {
  //     firstName:"Sohag",
  //     lastName:"Molla",
  //    get fullName(){
  //     return this.lastName;
  //    }
  //  }

  //  console.log(Person)
  

     // Setter //

//   const userInfo = {
//      firstName:"Sohag",
//      lastName:"Molla",
//      set fullName(fullName){
//       this.firstName = fullName
//      }

//  }


//  console.log(userInfo)



// 5.Class Expressions //


// const Circle = class {
//   constructor(radius) {
//     this.radius = radius;
//   }


//   getCircumference() {
//     return 2 * Math.PI * this.radius;
//   }
// };


// const myCircle = new Circle(5);
// console.log(myCircle.getCircumference());



// 6.JavaScript Computed Properties //

// let propName = "userName";


// const UserInfo = {
//   [propName]:"Sohag",
//    email:"pcgamers579@gmail.com",
//    hobby:"dowing somthing new",
//  }

// console.log(UserInfo)



// 7. Inheritance //



// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     return "makes a sound" + this.name
//   }
// }

// class Dog extends Animal {
//   constructor(name, Type) {
//     super(name);
//     this.Type = Type;
//   }

//   speak() {
//     return this.Animal() + "barks" + this.Dog;
//    }
//  }

//  let myAnimal = new Dog("Tome","Animal");

//  console.log(myAnimal)




// 8. New Target Operators //


// function person(shape){
//   if(!new.target){
//     throw "Using new target";
//   }

//   this.shape = shape;

// }

// let myPerson = new person("Tail,Fair and Fat Looking")

// console.log(myPerson)



// 9. Static Methods //



// class MathUtil {
//   static square(number) {
//     if (typeof number !== 'number') 
//       {
//       throw new TypeError('The argument must be a number.');

//     }

//     return number * number;
//   }
// }


// console.log(MathUtil.square(5)); 



// 10. Symbol //


// const mySymbol = Symbol('mySymbol');

// const myObject = {
//   [mySymbol]: 'This is a value associated with a symbol key'
// };


// console.log(myObject[mySymbol]);

