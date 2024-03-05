// Immediately Invoked Function Expressions (IIFE)

// function xyz(){
//     console.log(`DB CONNECTED`);
// }
// xyz()

(function xyz(){
    console.log(`DB CONNECTED`);
})(); // SEMICOLON NEEDS TO PLACED TO LET CODE KNOW WHEN TO END IIFE

( () => {
    console.log(`DB DISCONNECTED`);
})();