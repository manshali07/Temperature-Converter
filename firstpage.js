function choice()
{
    var ch=document.getElementById("option").value;
    if(ch==" ")
        {
            document.getElementById("para1").innerHTML="***ERROR!***"
        }
    else if(ch=="Fahrenheit")
        {
            var x = ftoc();
            var y = ftok();
            document.getElementById("para1").innerHTML="Celsius = "+x;
            document.getElementById("para2").innerHTML="Kelvin = "+y;
        }
    else if(ch=="Kelvin")
        {
            var x = ktof();
            var y = ktoc();
            document.getElementById("para1").innerHTML="Fahrenheit = "+x;
             document.getElementById("para2").innerHTML="Celsius = "+y;
        }
    else
        {
           var x = ctof();
           var y = ctok();
           document.getElementById("para1").innerHTML="Fahrenheit = "+x;
            document.getElementById("para2").innerHTML="Kelvin = "+y;
        }
}

function ftoc()
{
    var val = parseInt(document.getElementById("val1").value);
    var result = (val-32)/1.8;
    return result;
    
}

function ctof()
{
    var val = parseInt(document.getElementById("val1").value);
    var result = 1.8*val+32;
    return result;
    
}

function ftok()
{
    var val = parseInt(document.getElementById("val1").value);
    var result = (val+459.67)*0.56;
    return result;
}

function ctok()
{
    var val = parseInt(document.getElementById("val1").value);
    var result = 273.15+val;
    return result;
}

function ktoc()
{
    var val = parseInt(document.getElementById("val1").value);
    var result = val-273.15;
    return result;
    
}

function ktof()
{
    var val = parseInt(document.getElementById("val1").value);
    var result = ((val-273.15)*1.8)+32;
    return result;
}
