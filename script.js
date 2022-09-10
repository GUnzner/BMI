function getBMI() {

    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var BMI = weight/Math.pow(height/100, 2);
    
    console.log(BMI)
    
    var bmiText = "Your BMI is "+BMI.toFixed(2)+"<br>"
    var result = document.getElementById("text")
    result.innerHTML=bmiText
    
    if(BMI<20){
        var comment = document.createTextNode("You are underweight.")
        document.getElementById("text").appendChild(comment);
    } else if(BMI>=20 && BMI<25){
        result.innerHTML += "You are normal weight."
    } else {
        result.innerHTML += "You are overweight."
    }
}
document.getElementById("weight")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
});