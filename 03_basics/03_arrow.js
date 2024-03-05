const user = {
    name: "Rushab",
    id: "999",

    welcomeMessage: function(){
        console.log(`${this.name} , welcome`);
    }
}

// user.welcomeMessage()
// user.name= "ray"
// user.welcomeMessage()

console.log(this);

// const abc =function(){
//     let username = "rushab"
//     console.log(this.username);
// }

const abc = () => {
    let username = "rushab"
    console.log(this.username);
}

abc()

// const add2 = (num1 ,num2) =>{
//     return num1+ num2
// }

// const add2 = (num1, num2) => (num1 + num2)

// const add2 = (num1, num2) => num1 + num2

// const add2 = (num1, num2) => ({name: "Rushab"})

// console.log(add2(5,10));


const obj = {
    name: 'John',
    regularFunc: function() {
      console.log('Regular function:', this.name);
    },
    arrowFunc: () => {
        
        console.log('Arrow function:', this.name);
    }
};

obj.regularFunc(); 
obj.arrowFunc();