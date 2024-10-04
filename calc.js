let btnSoma = document.getElementById('soma');
btnSoma.addEventListener ('click', () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let soma = parseFloat (valor1) + parseFloat (valor2);

    document.getElementById('resultado').innerHTML = 'Resultado: '+ (soma);
})

let btnsubtracao = document.getElementById('subtracao');
btnsubtracao.addEventListener ('click', () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let soma = parseFloat (valor1) - parseFloat (valor2);

    document.getElementById('resultado').innerHTML = 'Resultado: '+ (soma);
})

let btnmultiplicacao = document.getElementById('multiplicacao');
btnmultiplicacao.addEventListener ('click', () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let soma = parseFloat (valor1) * parseFloat (valor2);

    document.getElementById('resultado').innerHTML = 'Resultado: '+ (soma);
})

let btndivisao = document.getElementById('divisao');
btndivisao.addEventListener ('click', () => {
    let valor1 = document.getElementById('valor1').value;
    let valor2 = document.getElementById('valor2').value;
    let soma = parseFloat (valor1) / parseFloat (valor2);

    document.getElementById('resultado').innerHTML = 'Resultado: '+ (soma);
})

