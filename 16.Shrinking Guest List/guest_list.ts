
let guestlist:string[] = ['Fahad ','usama','naeem']

// for(let i=0; i<guestlist.length; i++ ){
//     console.log('Dear.Mr' + guestlist [i] +',\n\n i invite you all to at dinner please come .\n\n  i request you' )
// }

let absent_name :string = 'Fahad'
let  new_name  :string = ' ALI '

guestlist[0] =  new_name 

// for(let i=0; i<guestlist.length; i++ ){
//     console.log('Dear.Mr :' + guestlist [i] +',\n\n i invite you all to at dinner please come .\n\n  i request you' )
// }

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

 while(guestlist.length > 2 ){
// yaha per may nay guest kay name remove karay ha .
    let remove_name = guestlist.pop()
    console.log(` DEAR . ${remove_name} you are not invited for dinner  `);
   
 }
 for(let i=0; i<guestlist.length; i++ ){
        console.log('Dear.Mr :' + guestlist [i] +',\n\n you are still invite.\n\n Thank you ' )
     }
    

