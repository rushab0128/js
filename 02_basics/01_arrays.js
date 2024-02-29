const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4)

//myArr.push(60)
//myArr.pop()
//myArr.shift()
//myArr.unshift(6)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// console.log(myArr);

//--------SLice vs Splice

// const mya1 = myArr.slice(1,3)
// const mya2 = myArr.splice(1,3)
// console.log("A", mya1);
// console.log("B", mya2);
// console.log("C", myArr);

// myArr.push(myArr2)
// console.log(myArr[6][1]);

// const myArr3 = myArr.concat(myArr2)
// console.log(myArr3);

// const myArr4 = [...myArr, ...myArr2] ///Alternative of concat used cause we can more than 2 arrays-- Spread Operator
// console.log(myArr4);

const myArr5 = [1,2,3, [4,5,6], 7, [8,[9,10]]]

const myArr6 = myArr5.flat(Infinity)
console.log(myArr6);





