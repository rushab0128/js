const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);

// for (const key of map){
//     console.log(key);
// }

// for (const [key, value] of map){
//     console.log(key);
// }

const myObject = {
    game1 : 'Mario',
    game2 : 'CS'
}

// for (const [key, value] of myObject){
//     console.log(key);
// }

const myObject1 = {
    one: "1",
    two: "2",
    three: "3",
    four: "4"
}

for (const key in myObject1){
    console.log(`${key} in word for ${myObject1[key]}`);
}

const numbers = ["one", "two", "three", "four", "five"]

for (const key in numbers){
    console.log(numbers[key]);
}

for (const key in map){
    console.log(key);
}