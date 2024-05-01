"use strict";
let guestlist = ['Fahad ', 'usama', 'naeem'];
// for(let i=0; i<guestlist.length; i++ ){
//     console.log('Dear.Mr' + guestlist [i] +',\n\n i invite you all to at dinner please come .\n\n  i request you' )
// }
let absent_name = 'Fahad';
let new_name = ' ALI ';
guestlist[0] = new_name;
// for(let i=0; i<guestlist.length; i++ ){
//     console.log('Dear.Mr :' + guestlist [i] +',\n\n i invite you all to at dinner please come .\n\n  i request you' )
// }
console.log(` Dear.${absent_name} is not coming`);
console.log(' congratiolation ! we find a big table we invite 3 mor Guest ');
guestlist.unshift(' irfan ');
guestlist.splice(2, 0, 'irfan');
guestlist.push(' umar');
for (let i = 0; i < guestlist.length; i++) {
    console.log('Dear.Mr :' + guestlist[i] + ',\n\n i invite you all to at dinner please come .\n\n  i request you');
}
