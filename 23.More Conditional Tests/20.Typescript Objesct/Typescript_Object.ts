let PersonName :string = 'ALI'

let Person_Name :string[] = ['Person','Car','house']

interface person { 
    age : Number,
    name :string,
    nationality : string,
    student : Boolean

}

let person : person = {


    age : 16,
    name : ' Ali ',
    nationality : 'pakistan',
    student: true

}

console.log (person);

interface car {

  Name : string,
  color : string,
  Model :string
}

let car = {

    Name : 'Supra',
    Model :' Mk4',
    color : 'Black'

}
console.log(car)