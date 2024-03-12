const coding = ["java", "python", "react", "js", "ruby", "cpp"]

// coding.forEach( function (item){
//     console.log(item);
// } )

// coding.forEach((item) => {         ///using arrow function
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item))

const myCoding = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "python",
        langFileName: "py"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "avvc",
        langFileName: "v"
    }
]

myCoding.forEach((item) => {
    console.log(item);
    // console.log(item.langName);
})