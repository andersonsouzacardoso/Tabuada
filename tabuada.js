function tabuada(){
    let numero = parseInt(document.getElementById('numero').value)
    let resposta = document.getElementById('resposta')
    var tabuada = '';
    for(let contar=0; contar<=10; contar++)
    tabuada += numero+ " x " +contar+ " = " + numero * contar + "<br/>"
    resposta.innerHTML = tabuada;
}