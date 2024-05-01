"use strict";
// Start with your work from Exercise 41.
//  Call the function make_great() with a copy of the array of magicians’ names.
//   Because the original array will be unchanged, return the new array and store it in a separate array.
//    Call show_magicians() with each array to show 
// that you have one array of the original names and one array with the Great added to each magician’s name.
let magician = ['jordan', 'james', 'jolly', 'Harry potter', 'Rahil'];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicianArray) {
    for (let i = 0; i < magicianArray.length; i++) {
        magicianArray[i] = 'The Great Magician : ' + magicianArray[i];
    }
}
function show_magicians(magician) {
    magician.forEach(element => {
        console.log(element);
    });
}
let array = copyArray(magician);
make_great(array);
console.log('\n\nThis is my original Array');
show_magicians(magician);
console.log('\n\nThis is my Modified Array');
show_magicians(array);
