function myFunction() {
    var x = document.forms["myForm"]["F-name"].value;
    if (x=="")
    {
       alert("please enter your name!!");
       return false;
    }
}

function MYform(){
    var x,text;
    x = document.getElementById('Lname').value;

    if (isNaN(x) || x<10 ){
        text="do sihdir baba :)"
        document.getElementById("demo").innerHTML=text;
        document.getElementById("demo").style.color="red";
    }
    else {
        text="riz sihdir :)"
        document.getElementById("demo").innerHTML=text;
        document.getElementById("demo").style.color="green";
    }

}