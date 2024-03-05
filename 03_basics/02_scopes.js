let a = 300
if(true){
    let a = 20
    const b = 30
    var c = 40
    console.log("INNER: ", a);
}

console.log(a);
// console.log(b);
console.log(c);

function one() {
    const username = "Rushab"

    function two(){
        const website = "Insta"
        console.log(username);
    }
    // console.log(website);

    two()
}
one()



// -----------------------

function addone(num){
    return num+1
}

addone(5)

const addTwo = function(num){
    return num + 2
}