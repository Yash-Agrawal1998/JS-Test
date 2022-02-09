function submitData()
{

    var name=document.getElementById("name").value;
    var number=document.getElementById("number").value;
    var exp=/^[A-Za-z\s]+$/;
    var val=exp.test(name);

    if(name=="")
    {
        document.getElementById("name").style.border="2px solid red";
        document.getElementById("errorName").innerHTML="Name field is empty.!!!!";
        document.getElementById("errorName").style.color="red";

    }
    else if(!isNaN(name))
    {
        console.log(typeof(name));
        document.getElementById("name").style.border="2px solid red";
        document.getElementById("errorName").innerHTML="It should not be a number!!!!";
        document.getElementById("errorName").style.color="red";
    }
    else if(val != true)
    {
        document.getElementById("name").style.border="2px solid red";
        document.getElementById("errorName").innerHTML="It cannot include  a combination of number and string!!!!";
        document.getElementById("errorName").style.color="red";
    }
    else
    {
        document.getElementById("name").style.border="2px solid black";
        document.getElementById("errorName").innerHTML="";
        document.getElementById("errorName").style.color="red";
    }

    if(number=="")
    {
        document.getElementById("number").style.border="2px solid red";
        document.getElementById("errorNum").innerHTML="Mobile Number field is empty.!!!!";
        document.getElementById("errorNum").style.color="red";
    }
    else if(isNaN(number))
    {
        console.log(typeof(name));
        document.getElementById("number").style.border="2px solid red";
        document.getElementById("errorNum").innerHTML="It should not be a string!!!!";
        document.getElementById("errorNum").style.color="red";
    }
    else if(number.length!=10)
    {
        document.getElementById("number").style.border="2px solid red";
        document.getElementById("errorNum").innerHTML="Mobile Number must be at least 10 characters!!!!";
        document.getElementById("errorNum").style.color="red";   
    }
    else
    {
        console.log(number.length);
        document.getElementById("number").style.border="2px solid black";
        document.getElementById("errorNum").innerHTML="";   
    }
}