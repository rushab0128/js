const myNum = [1,2,3,4,5,6,7,8,9]

// const newNums = myNum.filter( (num) => num > 4)
// console.log(newNums);

// const newNums = myNum.filter( (num) => {
//     return num > 4
// })

// console.log(newNums);

const newNums = []

myNum.forEach((num) => {
    if (num>4) {
        newNums.push(num)
    }
})

// console.log(newNums);

// const updatedNums = myNum.map( (num) => num +10)

//chaining

const updatedNums = myNum
                    .map( (num) => num*10)
                    .map((num) => num +10)
                    .filter((num) => num > 40)
console.log(updatedNums);


