
let guestlist:string[] = ['Fahad ','usama','naeem']

for(let i=0; i<guestlist.length; i++ ){
    console.log('Dear.Mr' + guestlist [i] +',\n\n i invite you all to at dinner please come .\n\n  i request you' )
}

let absent_name :string = 'Fahad'
let  new_name  :string = ' ALI '

guestlist[0] =  new_name 

for(let i=0; i<guestlist.length; i++ ){
    console.log('Dear.Mr :' + guestlist [i] +',\n\n i invite you all to at dinner please come .\n\n  i request you' )
}

 console.log(` Dear.${ absent_name } is not coming`) 
 console.log (' congratiolation ! we find a big table we invite 3 mor Guest ')

// yaha per 3 more guest ko invite kia ha party may  

 guestlist.unshift(' irfan ');
 guestlist.splice(2 , 0 , 'irfan');
 guestlist.push(' umar');

// yaha per may nay sab guest ko invite kia ha party may 

 for(let i=0; i<guestlist.length; i++ ){
console.log('Dear.Mr :' + guestlist [i] +',\n\n i invite you all to at dinner please come .\n\n  i request you' )
}

// yaha per sirf 2 guest ko invite kia hai
 console.log('\n Sorry The Big Table is not arange right now so invite only 2 peoples in party  ')
 while(guestlist.length > 2 )
     // yaha per humnay remove kara ha
for(let i=0; i<guestlist.length; i++ ){
console.log('Dear.Mr :' + guestlist [i] +',\n\n you are still invite.\n\n Thank you ' )
}

guestlist.splice(0,4);
console.log(guestlist)

//exerise 19.


// print a message indicating the number of people you are inviting to dinner.
     console.log(`TotaL  Number of guest invited in party:${guestlist.length}`);

    
  