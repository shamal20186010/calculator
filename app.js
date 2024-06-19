document.getElementById("calc").addEventListener("click",calc)
function calc() {

    let lblInput1 = new Number(document.getElementById("inputNumber1").value);
    let lblInput2 = new Number(document.getElementById("inputNumber2").value);
    let operator = document.getElementById("operator").value;
    
    let output=Number();

    switch(operator){
        case "+" : output = lblInput1+lblInput2;
        break;
        case "-" : output = lblInput1-lblInput2;
        break;
        case "*" : output = lblInput1*lblInput2;
        break;
        case "/" : output = lblInput1/lblInput2;
        break;

    }
    document.getElementById("output").innerHTML =output;

}
//console.log("Hellow");