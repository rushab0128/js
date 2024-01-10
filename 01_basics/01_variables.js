const accountId = 14578
let accountEmail = "abcsdf@gmail.cpm"
var accountPass = "147852"
accountCity = "Mumbai"
let accountName;

/*
If teh variables have no value to be store within then they have values as undefined
*/

//accountId = 2
accountEmail = "Abc@yahoo.com"
accountPass = "123456"
accountCity = "Delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail , accountId, accountPass , accountCity, accountName])