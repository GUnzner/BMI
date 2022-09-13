function getBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    if(document.getElementById("heightTag").innerText == "Height in feet:"){
        height = (height * 12 + parseFloat(document.getElementById("height-2").value)) * 2.54
        weight /= 2.2046
    } else {
        height += document.getElementById("height-2").value;
    }
    
    //console.log(height, weight);

    if (height.isNan === true){
        let result = document.getElementById("text")
        result.innerHTML="Please enter a valid number" 
    } else {
    
    let BMI = weight/Math.pow(height/100, 2);
    
    console.log(BMI)
    
    let bmiText = "Your BMI is "+BMI.toFixed(2)+"<br>"
    let result = document.getElementById("text")
    result.innerHTML=bmiText
    
    if(BMI<20){
        let comment = document.createTextNode("You are underweight.")
        document.getElementById("text").appendChild(comment);
    } else if(BMI>=20 && BMI<25){
        result.innerHTML += "You are normal weight."
    } else {
        result.innerHTML += "You are overweight."
    }}
}
document.getElementById("weight")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.key === "Enter") {
        document.getElementById("btn").click();
    }
});

function switchUnit(){
    if (document.getElementById("heightTag").innerText == "Height in m:"){
        document.getElementById("heightTag").innerText="Height in feet:";
        document.getElementById("heightTag-2").innerText="and inches:";
        document.getElementById("weightTag").innerText="Weight in pounds:";
    } else if (document.getElementById("heightTag").innerText == "Height in feet:"){
        document.getElementById("heightTag").innerText="Height in m:";
        document.getElementById("heightTag-2").innerText="and cm:";
        document.getElementById("weightTag").innerText="Weight in kg:";
    }
}