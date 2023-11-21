console.log("---- Variables ----")

// Var
for (var i = 0; i < 5; i++) {
    console.log(i);   
}
console.log(i);

// Var
function looping() {
    for (var j = 0; j < 5; j++) {
        console.log(j);
    }    
}
looping();
console.log(j);
// let
for (var k = 0; k < 5; k++) {
    console.log(k);
}
console.log(k);

// let
for (var l = 0; l < 5; l++) {
    console.log(l);  
}
if (true) {
    let l = 100;
    console.log("l  =", l)
}

// const
const phi = 3.14;
phi = 3.147;
console.log(phi);
