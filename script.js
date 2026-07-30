function analyze() {

    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let event = document.getElementById("event").value.trim();
    let age = document.getElementById("age").value;
    let attended = document.getElementById("events").value;

    // Name Validation using Regular Expression
    let namePattern = /^[A-Za-z ]{3,30}$/;

    if(name=="" || roll=="" || event=="" || age=="" || attended=="")
    {
        alert("Please fill all fields.");
        return;
    }

    if(!namePattern.test(name))
    {
        alert("Invalid Student Name");
        return;
    }

    if(age<16 || age>30)
    {
        alert("Age should be between 16 and 30.");
        return;
    }

    let message="";

    // Participation Level

    if(attended>=10)
    {
        message="Excellent Participation";
    }
    else if(attended>=5)
    {
        message="Good Participation";
    }
    else if(attended>=1)
    {
        message="Needs More Participation";
    }
    else
    {
        message="No Participation Yet";
    }

    document.getElementById("result").innerHTML=
    "Hello "+name+"<br>"+message;

}

// Array of Technical Events

let technicalEvents=[
"Hackathon",
"Coding Contest",
"AI Workshop"
];

let list=document.getElementById("eventList");

technicalEvents.forEach(function(item){

let li=document.createElement("li");

li.textContent=item;

list.appendChild(li);

});