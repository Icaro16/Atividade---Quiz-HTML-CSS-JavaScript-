function Enviar(){
    
    let elementoSelect1 = document.getElementById("Select1").value
    let elementoSelect2 = document.getElementById("Select2").value
    let elementoSelect3 = document.getElementById("Select3").value

    let elementoResultado=document.getElementById("inputResultado")
    let Pontuação = Number(elementoSelect1) + Number(elementoSelect2) + Number(elementoSelect3)

    if(elementoSelect1 == 2 || elementoSelect2 == 2 || elementoSelect3 == 2){
        alert('Preencha todas as alternativas!')
    }
    else{
        elementoResultado.value = Pontuação
    }

}