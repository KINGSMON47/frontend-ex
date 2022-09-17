function myFunction() {
    var x = document.forms["myForm"]["F-name"].value;
    if (x == "") {
        alert("please enter your name!!");
        return false;
    }
}

function MYform() {
    var x, text;
    x = document.getElementById('Lname').value;

    if (isNaN(x) || x < 10) {
        text = "do sihdir baba :)"
        document.getElementById("demo").innerHTML = text;
        document.getElementById("demo").style.color = "red";
    } else {
        text = "riz sihdir :)"
        document.getElementById("demo").innerHTML = text;
        document.getElementById("demo").style.color = "green";
    }

}


var ali = {name: "Saeed", family: "Najmi", age: 27};

function Person(name, family, age) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.fullName = function () {
         return this.name + " " + this.family;
    }

}
var saeed = new Person('saeed', 'najmi' , 27.5);
console.log(saeed.fullName());

var people = [];
people.push(new Person("farzane","zarepour",27));
people.push(new Person("morteza","gasemkhani",29));
people.push(new Person("hadi","poursamyil",24));
people.push(new Person("amir","daneshyar",22));

console.log(people);

var name;
for(x in people){
    name +=
        people[x].name
        + "" +
        people[x].family
        + '->' +
        people[x].age
        + "<br>";
}

document.getElementById('name').innerHTML = name;