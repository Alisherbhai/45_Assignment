let PersonName :string = 'ALI'

let Person_Name :string[] = ['Person','Car','house']


    interface person{


        age : number,
        name : string,
        nationality : string,
        student: true

}



let person = {


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

interface house{

    location :string,
    place  :string,
    rooms  :number,
    information :boolean

}

let house = {
    Location :"Pakistan",
    Place  : "Behria town",
    Rooms  : 6,
    Information :'True'

}
console.log(house)