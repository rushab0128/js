const myNum = [1,2,3]

// const total = myNum.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const total = myNum.reduce( (acc, curr) => acc + curr,0)

console.log(total);

const shoppingCart = [
    {
        item : "js COurse",
        price : 2000
    },
    {
        item : "java",
        price : 2500
    },
    {
        item : "data science",
        price : 10000
    },
    {
        item : "AI",
        price : 20000
    }
]
const pricetopay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(pricetopay);