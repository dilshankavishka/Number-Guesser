document.getElementById("guess").addEventListener("click",Guess);

function Guess(){
    let numberin = Number(document.getElementById("number1").value);
    let numbercheck= Math.floor((Math.random()*10)+1);

    if(numberin>numbercheck){
        document.getElementById("help").value= "Your Guess is too high";
    }else if(numberin<numbercheck){
        document.getElementById("help").value= "Your Guess is too low";
    }else if(numberin=numbercheck){
        document.getElementById("help").value= "Your Guess is correct";
        document.getElementById("help").value = "";
        document.getElementById("number1").value = "";
        alert("Your guess  "+numberin+"  is CORRECT")
    }else{
        document.getElementById("help").value= "Enter within range";
    }
}