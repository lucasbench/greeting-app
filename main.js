var family = []; //family array
var children = []; // children array
//create a person function 
function createPerson (name, age, coder, role, children) {

    var person = {};
    person.name = name;
    person.age = age;
    person.coder = coder;
    person.role = role;
    person.children = children;
    family.push(person);
}
//call the function to actually create a person
createPerson("Luca", 40, true, "father", true);
createPerson("Gabi", 35, false, "mother", true);
createPerson("Max", 1.5, false, "son", false);
createPerson("Manu", 65, false, "granMa", true);
createPerson("Paolo", 68, false, "granPa", true);


// function that creates a child
function createChild (name, age, sex, etnicity) {
    var child = {};
    child.name = name;
    child.age = age;
    child.sex = sex;
    child.etnicity = etnicity;
    children.push(child);
}
// call the function to create children
createChild("Max", 2, "male", "latinItalian");
createChild("Luca", 40, "male", "Italian");
createChild("Gabi", 35, "female", "latin");

//log the array on server
console.log(family);
console.log(children);

//bonus exercise js first lesson
var wines =[];

function wineOptions (name, origin, age, color) {

    var grape = {};
    grape.name = name;
    grape.origin = origin;
    grape.age = age;
    grape.color = color;
    wines.push(grape);

}

wineOptions("Riesling", "Germany", 30, "white");
wineOptions("Chardonnay", "Burgundy", 60, "white");
wineOptions("Cabernet  Sauvignon", "France", 45, "red");
wineOptions("Pinot Noir", "France", 40, "red");

console.log(wines);