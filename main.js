var family = [];

function createPerson (name, age, coder, role) {

    var person = {};
    person.name = name;
    person.age = age;
    person.coder = coder;
    person.role = role;
    family.push(person);
}

createPerson("Luca", 40, true, "father");
createPerson("Gabi", 35, false, "mother");
createPerson("Max", 1.5, false, "son");
createPerson("Manu", 65, false, "granMa");
createPerson("Paolo", 68, false, "granPa");

console.log(family);
/*
var wines =[];

function wineOptions (name, origin, age, color) {

    var grape ={};
    grape.name = name;
    grape.origin = origin;
    grape.age = age;
    grape.color = color;
    wines.push(grape);

}``

wineOptions("Riesling", "Germany", 30, "white");
wineOptions("Chardonnay", "Burgundy", 60, "white");
wineOptions("Cabernet  Sauvignon", "France", 45, "red");
wineOptions("Pinot Noir", "France", 40, "red");
*/