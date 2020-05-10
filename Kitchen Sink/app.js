let name = "Dave Developer";//Your Name
const states = "29";//States in India
let result = 5 + 4;//Sum of 5 and 4
function sayHello() {
    alert('Hello World!');
}
sayHello();
function checkAge(yourName, age) {
    if (age < 21) {
        alert("Sorry " + yourName + ", you aren't old enough to view this page!");
    }
}
checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let vegies = ["Cabbage", "Ladyfinger", "I don't like vegetables"];
for (i = 0; i < vegies.length; i++) {
    console.log(vegies[i]);
}

let pet = {
    name: "Disco",
    breed:"German Shephard"
}
console.log(pet.name);
console.log(pet.breed);

let array = [
    { yourName: "Neha", age: 30 },
    { yourName: "Dhananjay", age: 18 },
    { yourName: "Manisha", age: 36 },
    { yourName: "Shanjan", age: 10 }
];
for (i = 0; i < array.length; i++) {
    checkAge(array[i].yourName, array[i].age);
}

function getLength(any) {
    return any.length;
}
let variable = getLength("Hello World");
if (variable % 2 == 0) {
    console.log("The world is nice and even!");
}
else {
    console.log("The world is an odd place!");
}