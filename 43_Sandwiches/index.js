"use strict";
// Write a function that accepts a array of items a person wants on a sandwich.
//  The function should have one parameter that collects as many items as the function call provides,
//   and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.
function make_sandwich(item) {
    console.log('\nMaking Sandwich with :');
    item.forEach(element => console.log('-' + element));
    console.log('\nEnjoy your pizza !');
}
make_sandwich(['Chesee', 'butter', 'creamy']);
make_sandwich(['zinger', 'saucy']);
make_sandwich(['Chesee', 'Butter']);
