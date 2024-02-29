///// Object Literal

// const mySym = Symbol("key1")

// const JsUser = {
//     name : "Rushab",
//     age: 24,
//     [mySym]: "myKey1",
//     location: "Jalna",
//     email: "rushabh.banwat@gmail.com",
//     isLoggedIn: false,
// }

// // console.log(JsUser.email);
// // //console.log(JsUser);
// // console.log(JsUser["email"]);
// // console.log(JsUser[mySym]);

// //JsUser.email = "abc@zxc.com"
// //Object.freeze(JsUser)
// //JsUser.email = "qwe@asd.com"
// // console.log(
// //     JsUser
// // );

// JsUser.greeting = function(){
//     console.log("Hello");
// }

// JsUser.greeting2 = function(){
//     console.log(`Hello ${JsUser.name}`);
// }

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());
// console.log(JsUser.greeting2());



/// ------------ Object Singleton----------------

const User = new Object()

User.id = "123"
User.name = "Joe"
User.isLoggedIn = true

const user2 = {
    email : "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rushab",
            lastname: "Banwat",
        }
    }
}

// console.log(user2.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}
console.log(obj3);

// obj2 = {5: "e", 6: "f"}
// console.log(obj2);
// obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

const course ={
    name: "JS",
    price: "777",
}

 