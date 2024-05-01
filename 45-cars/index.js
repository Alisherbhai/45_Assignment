"use strict";
// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
//  It should then accept an arbitrary number of keyword arguments.
//   Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
//  Print the Object that’s returned to make sure all the information was stored correctly.
function StoreCarInfo(manufacturer, model, ...extraOption) {
    let carInfo = Object.assign({ manufacturer,
        model }, Object.assign({}, ...extraOption));
    return carInfo;
}
let Info = StoreCarInfo('Honda', 'Civic', { color: 'White' }, { feature: ['navigtion', 'power Window'] });
console.log(Info);
