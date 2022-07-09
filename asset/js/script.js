// index 1 //
document.querySelector("#img-1").onclick = function() 
{
    if (this.style.border === "none") {
        this.style.border = "solid 2px red"
    } else {
        this.style.border = "none"
    }
}
// index 2 //
function suma () {
    let negro = document.querySelector("#cantidad-1").value;
    let leon  = document.querySelector("#cantidad-2").value;
    let gato  = document.querySelector("#cantidad-3").value;
    let total= +negro + +gato + +leon;

     if (total <= 10){
        document.querySelector("#resultado").textContent = "Llevas"  + total + "stickers";
     }
     else  {
      document.querySelector("#resultado").textContent ="llevas demasiados stickers"
     }
}
// index 3 //
function calcular () {
    let valor1 = document.querySelector("#primero").value;
    let valor2 = document.querySelector("#segundo").value;
    let valor3 = document.querySelector("#tercero").value;

    let total = valor1 + valor2 + valor3;
    
    if (total === "911"){
        document.querySelector("#texto").textContent ="correct password ";
    }
    else if (total === "714"){
        document.querySelector("#texto").textContent ="correct password";
    }
    else {
        document.querySelector("#texto").textContent ="incorrect password ";
    }
}