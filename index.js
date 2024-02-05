// let a = {}

// let b = {}

// console.log(a == b)  // falses
// console.log(a === b) // false


// console.log("1" == 1) //true
// console.log("1" === 1) // false

// for(var i=0; i<3; i++){
//     setTimeout(()=>{
//         console.log(i)
//     },1000)
// }
// 1, 2, 3
//0,1,2
// 3

// function scope () {
//     let a = 50
// }

// console.log(a)//error

// function scope () {
//     var b = 50

// }
// console.log(b)//error


// console.log(a)

// if(true){
//   var a = 10;
// }

// console.log(a)


// let obj =  {
//     name:"shiv",
//     age:26,
//     getDetails:function(){
//         return ()=>{
//            return  this.age
//         }
//     }
// }


// console.log(obj.getDetails()())

// (() => {
//     console.log('hello my name saurabh')
// })()

// a = 1
// console.log(++a)//2
// console.log(a++)//1

// let obj = {
//     name:"saurabh",
//     age:24,
//     isActice: true,
// };

// obj.__proto__.getDetails = function(){
//     return `name is ${this.name} name age is ${this.age} `
// }

// console.log(obj.getDetails())

// // console.log(Object.values(obj))

// function User(name,age,isActive){
//     return {
//         name:name,
//         age,
//         isActive
//     }
// }


function Human(name,age){
        this.name=name;
        this.age = age;
}

function User(isActice, username, name, age) {
    this.isActice = isActice;
    this.username = username;
  let human1 =  Human.bind(this,[name, age])()
  console.log(human1())
    
}

user1 = new User(true, 'bable@', "jokka", 25)
console.log(user1)

