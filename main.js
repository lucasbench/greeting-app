


    //create function with conditionals
    function whoIsOlder(person1, person2) {
        if (person1.age > person2.age) {
            console.log("luca is younger then Ciak", person1.age - person2.age);
        } else if 
            (person1.age > myFriend.age){
            console.log("Luca is older then Gigi", person1.age - myFriend.age)
        } else 
            (person2.age > myFriend.age) 
            console.log("Ciak is older then Gigi", person2.age - myFriend.age)
    }
  
    //create objects
    var me = {
        name : "Luca",
        age : 40
    }
    var mySibling = {
        name : "Ciak",
        age : 42
    }
    var myFriend = {
        name : "Gigi",
        age : 33
    }
   
      //call the function for the objects
      whoIsOlder(me, mySibling);
      whoIsOlder(me, myFriend);
      whoIsOlder(mySibling, myFriend);

        /* function addTwoNumbers (num1,num2) {
        var result = num1 + num2;
        return result;
    };

    var sum = addTwoNumbers(5, 30);
    console.log(sum);

    
    function checkAge (age) {
        if (age >= 21){
            return "drink";
        }else{
            return "denied";
        }
        console.log(person.age);
        
    }
    
    var person = {
        age: 21
    }

    var result = checkAge(person.age);
    console.log (result);*/


    /*  var me = {};
        me.name = "Luca";
        me.age = 40;
        me.coder = true;
        me.role = "father";
        me.children = ["Max"];


    var gabi = {};
        gabi.name = "Gabi";
        gabi.age = 35;
        gabi.coder = false;
        gabi.role = "mom";
        gabi.children = ["Max"];


    var max = {};
        max.name = "max";
        max.age = 2;
        max.coder = false;
        max.role = "son";
        max.children = [];

 

        var family = [me, gabi, max];

    console.log(family);




    call the function to actually create a person
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

console.log(wines); */