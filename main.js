/*
** Os painéis são construídos em blocos contínuos de 10 metros lineares. A auto estrada também é dividida em blocos de 10 metros de extensão, sendo cada bloco descrito por um código, como definido abaixo:
** P - Pista, trecho em linha reta sem curvas ou saídas. Deve-se instalar um painel de cada lado da auto estrada.
** C - Curva, trecho em curva de 90 graus na auto estrada. Deve-se instalar dois painéis de concreto do lado externo da curva; o outro lado fica sem painel instalado.
** A - Acesso, trecho em linha reta no qual existe uma entrada ou uma saída a partir de um dos lados da auto estrada (mas não do outro). Deve-se instalar um painel no lado onde não existe o acesso.
** D - Duplo acesso, trecho em linha reta no qual existem dois acessos (entradas ou saidas, em qualquer combinação possível), um de cada lado da rodovia. Nenhum painel deve ser instalado nesse bloco da auto estrada.
*/

// Recebendo as entradas do comprimento e dos tipos de blocos
var tamanho = document.getElementById('value1');
var blocos = document.getElementById('value2');

tamanho.addEventListener('input',operation);
blocos.addEventListener('input',operation);

//funçao para fazer o calculo
function operation(){
var output = 0;

//Verificando cada letra e sommando seu respectivo valor ao output
//Uso de switch para fácil adição de novos elementos
for (const key in blocos.value) {
    
    //Uso do UpperCase para evitar diferença entre letras maiusculas e minusculas
    switch (blocos.value[key].toUpperCase()) {
        case "P":
            output += 2;
            break;
        case "C":
            output += 2;
            break;
        case "A":
            output += 1;
            break;
        case "D":
            output += 0;
            break;
        default:
            console.log('Dado invalido')
            break;
    }
}
if(tamanho.value > 0 && tamanho.value <= 10000000 ){
    console.log(output);
    document.getElementById('display').innerHTML = output;
}else{
    console.log('Tamanho invalido ou muito grande')
    document.getElementById('display').innerHTML = "Tamanho invalido ou muito grande";
}
}