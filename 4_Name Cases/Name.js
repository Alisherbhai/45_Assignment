"use strict";
let personName = '';
personName = ('what is your name ?') || '';
let lowercase = personName.toLowerCase();
let uppercase = personName.toUpperCase();
let titlecase = personName.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1).
    toLowerCase()).join('');
if (personName !== null && personName !== '') {
    alert(` Hello ${personName}, Here are your name in:
    Lowercase:${lowercase}
    Uppercase:${uppercase}   
    titlecase:${titlecase}`);
}
else {
    alert(' Please fill your name !');
}
