// * get started with a simple condition then complexicity
let myName = 'towhid';
const myAge = 20;
if (myAge <= 10) {
    console.log(`i'm a kid`);
} else if (myAge === 18) {
    console.log("ei i'm an adult");
} else if (myAge > 18) {
    console.log(`i'm more than an adult`);
} else {
    console.log(`is not a relative age `);
}
// ! i used here else if condition that match my age and check if i'm an adult or a kid or older. preety simple right?
//
//! here is the test of data type
let nMyAge = 18;
if (nMyAge === 18) {
    console.log("ei I'm an adult"); //  Runs
}

let nMyAge2 = '18';
if (nMyAge2 == 18) {
    console.log("ei I'm an adult"); //  Runs (but avoids type checking)
}

if (nMyAge2 === 18) {
    console.log('this will not run'); // ❌ Doesn't run (strict comparison fails)
}
