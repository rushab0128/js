function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(200,400,600));

const user={
    name: "Rushab",
    age: "24"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and age is ${anyobject.age}`);
}

handleObject({
    name: "RUshab",
    age: "24"
})


const arr = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(arr));