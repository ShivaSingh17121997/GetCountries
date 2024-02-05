// object constructer function

// function Person (name, age){
//     this.name = name;
//     this.age= age
// }

// const Person1 = new Person("John", 30)
// const Person2 = new Person("Alice", 35)

// console.log(Person1);
// console.log(Person2)

// function User(name, gender, age) {

//     this.name = name;
//     this.gender = gender;
//     this.age = age
// }

// const User1 = new User("John", "male", 28)
// const User2 = new User("jane", "female", 22)
// const User3 = new User("jhonny", "male", 21)
// console.log(User1, User2, User3)

///
// q-1 Sample input array
const students = [
    { name: 'Alice', age: 20, grade: 85 },
    { name: 'Bob', age: 21, grade: 90 },
    { name: 'Charlie', age: 19, grade: 95 },
    { name: 'David', age: 22, grade: 88 }
];

// Write a function to find the name of the student with the highest grade


// function MaximumGrade() {
//     let max = 0;
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].grade > max) {
//             max = students[i].grade
//             highestGradeName = students[i].name
//         }
//     }
//     console.log(highestGradeName)

// }

// MaximumGrade()

// Write a function to find the name of the student with the minimum grade

// function MinGrades() {

//     let min = +Infinity;
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].grade < min) {
//             min = students[i].grade
//             lowestgrade = students[i].name
//         }
//     }
//     console.log(lowestgrade)
// }

// MinGrades();

// Sample input array
// const books = [
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 15 },
//     { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12 },
//     { title: '1984', author: 'George Orwell', price: 18 },
//     { title: 'Pride and Prejudice', author: 'Jane Austen', price: 10 }
// ];

// // Write a function to find the title of the most expensive book

// function MostExpensiveBook() {
//     let max = -Infinity;
//     for (let i = 0; i < books.length; i++) {
//         if (books[i].price > max) {
//             max = books[i].price
//             MostExpensiveBooks = books[i].title
//             AutherName= books[i].author
//         }
//     }
//     console.log(MostExpensiveBooks ,AutherName)

// }

// MostExpensiveBook();

//Q-3 
// const employees = [
//     { name: 'Alice', age: 30, salary: 50000 },
//     { name: 'Bob', age: 25, salary: 60000 },
//     { name: 'Charlie', age: 35, salary: 70000 },
//     { name: 'David', age: 40, salary: 80000 }
// ];

// // Write a function to find the average salary of all employees avg = total salary sum / total no.of employee

// function AverageSalary(employees) {
//     let SalarySum = 0;
//     for (let i = 0; i < employees.length; i++) {
//         SalarySum += employees[i].salary
//     }
//    return  SalarySum / employees.length

// }
// const avg = AverageSalary(employees)
// console.log(avg)

// Q-4
// const products = [
//     { name: 'Laptop', price: 1000, quantity: 2 },
//     { name: 'Smartphone', price: 500, quantity: 3 },
//     { name: 'Tablet', price: 300, quantity: 4 }
// ];

// // Write a function to find the total value of all products

// function TotalValue(products) {

//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i].price * products[i].quantity
//     }
//     return total
// }

// const Totel = TotalValue(products)
// console.log(Totel)

//Q-5 
// Prototypal Inheritance Example
// Parent Object
// const person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// };

// // Child Object inheriting from person

// //Explain the concept of prototypal inheritance in JavaScript and provide an example demonstrating its usage.

// const pPerson = {
//     firstName:"john",
//     lastName:"doe",
//     fullName: function () {
//         return this.firstName + " " + this.lastName
//     }

// }

// const child1 = Object.create(pPerson)
// child1.firstName = "jane"
// child1.lastName= "jenny"

// console.log(child1.fullName())

//Q-6
// Constructor function Exampl

// function Person(name, age) {
//     this.name = name;
//     this.age = age
// }

// Person.prototype.sayHello = function () {
//     console.log("Hello, my name is " + this.name + " " + " and I am " + this.age + " " + "year old")
// }

// const Person1 = new Person("john", 22)

// console.log(Person1.sayHello())


// // Closures

// function Closures() {
//     const outerVariable = "hi i am outer variable"

//     function innerFun() {
//         const innerVariable = "hi i am inner variable"
//         return {outerVariable , innerVariable}
//     }

//     return innerFun

// }

// console.log(Closures()())

////////////////////////////////////////////////////////

// console.log(foo());
// console.log(bar());

// function foo() {
//     return "Hello, I'm foo!";
// }

// var bar = function () {
//     return "Hello, I'm bar!";
// };


//
// var numbers = [1, 2, 3, 4, 5];

// console.log(numbers.slice(1, 3));
// console.log(numbers.splice(2, 2, 6, 7));
// console.log(numbers);


//
// var str = 'Hello, World!';

// console.log(str.toUpperCase());
// console.log(str.split(','));
// console.log(str.indexOf('World'));


//
// console.log(Boolean({})); 
// console.log(Boolean([])); 


//
// function countdown(seconds) {
//     if (seconds >= 0) {
//         console.log(seconds);
//         setTimeout(function() {
//             countdown(seconds - 1);
//         }, 1000);
//     } else {
//         console.log('Countdown complete');
//     }
// }

// countdown(5);

