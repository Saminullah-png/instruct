// let objSami = {
//     name = "Saminullah",
//     age = 33,
//     phone = 9120126960,
//     lastname = 'Ahmadzai'
// };
// console.log(objSami);
let capAmerica = {
        name: 'samin',
        age: 34,
        freiends: ['miran', 'asad', 'javed'],
        address: {
            city: "kabul",
            state: 'Afg'
        },
        sayHi: function() {
            console.log("capAmrica says hiii")
        }
    }
    // console.log(capAmerica);
    // console.log(capAmerica.freiends[1]);

// name of capAmerica
// console.log(capAmerica.Name);
//age of capAmerica
// console.log(capAmerica.age);
// freiends of capsam
console.log(capAmerica.freiends);

console.log(capAmerica.address.city);

//add a new key to obj
capAmerica.movie = ['mina', 'rishkand'];
console.log(capAmerica.movie);
// delete a key from obj
delete capAmerica.city

// boolean value
capAmerica.isAven = true;
console.log(capAmerica)

// second way to access an Element

console.log(capAmerica.name)
console.log(capAmerica["name"]);