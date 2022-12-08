let valorinicial = 0;
let disabledBtn = document.getElementById("disabledBtn");
disabledBtn.disabled = true ;

function addValueFunction(valuePar){
    document.getElementById("cantidad").value;

    if (valuePar.value == "increase") {
        valorinicial++;
    }
    else{
        valorinicial--;
    }
    document.getElementById("cantidad").textContent = valorinicial;

    if(valorinicial==0){
        disabledBtn.disabled=true;
    }
    else{
        disabledBtn.disabled=false
    }
}