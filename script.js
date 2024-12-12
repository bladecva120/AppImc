var peso = document.querySelector('#ipeso');
var altura = document.querySelector('#ialtura');
var calcular = document.querySelector('#calcular');
var limpar = document.querySelector('#limpar');
var saida1 = document.querySelector('#saida1');
var saida2 = document.querySelector('#saida2');
var areaTexto = document.querySelector('#itexto');
var exit = document.querySelector('#exit');

calcular.addEventListener('click', calc);
limpar.addEventListener('click', resetar);

function resetar() {
    window.location.reload()
}


function calc() {

    var n1 = Number(peso.value);
    var n2 = Number(altura.value);
    var calcPesoAltura = n1 / (n2 * n2);

    if (n1 == "" || n2 == "") {
        window.alert('Preencha todos os campos')
        saida1.innerHTML == "";
        saida2.innerHTML == "";
        areaTexto.innerHTML == "";
    } else if (calcPesoAltura < 18.5) {
        exit.style.background = '#00f';
        exit.style.color = '#fff';
        exit.style.animation = 'identifier 1s ease-in-out infinite'

        saida1.innerHTML = `IMC: ${calcPesoAltura.toFixed(2)} - MAGREZA`;
        saida2.innerHTML = 'Você está ABAIXO do peso'
        areaTexto.innerHTML = 'Um IMC inferior a 18,5 é um indicador de baixo peso, não sendo recomendado e, podendo ser tão ou mais prejudicial do que ter excesso de peso. Este pode dever-se a vários fatores, tais como distúrbios de comportamento alimentar (exemplo: anorexia, bulimia), doenças inflamatórias intestinais, doenças metabólicas e stress. As principais consequências de um baixo peso podem ser a queda de cabelo, amenorreia (ausência de menstruação), fadiga, infertilidade e ansiedade. Nestas situações é necessário um acompanhamento nutricional e médico, de forma a avaliar a existência de possíveis carências nutricionais e garantir uma nutrição adequada.';
    } else if (calcPesoAltura <= 24.9) {
        exit.style.background = 'green';
        exit.style.color = '#fff';
        exit.style.animation = 'identifier 1s ease-in-out infinite'

        saida1.innerHTML = `IMC: ${calcPesoAltura.toFixed(2)} - NORMAL`;
        saida2.innerHTML = 'Seu peso está NORMAL'
        areaTexto.innerHTML = 'Um IMC entre o 18,5 e os 24,9, classificativo de peso normal, corresponde ao intervalo de peso ideal para cada pessoa, tendo em conta a sua altura. Este intervalo de peso está associado a um menor risco e uma menor incidência de doenças.'
    } else if (calcPesoAltura <= 29.9) {
        exit.style.background = '#ff0';
        exit.style.color = '#000';
        exit.style.animation = 'identifier 1s ease-in-out infinite'

        saida1.innerHTML = `IMC: ${calcPesoAltura.toFixed(2)} - SOBREPESO`;
        saida2.innerHTML = 'Você está ACIMA do peso'
        areaTexto.innerHTML = 'O excesso de peso, também considerado como pré-obesidade, corresponde a um IMC entre os 25 e 29,9. Perante um IMC indicativo de excesso de peso, é fundamental avaliar não só para o peso e respetivo IMC, mas também a composição corporal, ou seja, para a forma como o peso se encontra distribuído e, perceber se existe ou não um excesso de massa gorda.'
    } else {
        exit.style.background = '#f00';
        exit.style.color = '#fff';
        exit.style.animation = 'identifier 1s ease-in-out infinite'

        saida1.innerHTML = `IMC: ${calcPesoAltura.toFixed(2)} - OBSIDADE`;
        saida2.innerHTML = 'Você está OBESO'
        areaTexto.innerHTML = 'Quando o valor do IMC é superior a 30, estamos perante um valor indicativo de obesidade, sendo que conforme o valor de IMC obtido a obesidade pode ser classificada em 3 graus, como moderada, severa ou mórbida. Esta é uma doença crónica, com repercussões para a saúde da pessoa, pelo que um acompanhamento nutricional por um nutricionista e um acompanhamento médico é fundamental.'
    }


}