const visor = document.querySelector("#txtVisor");
visor.value = 0;

let cont = 0;
let operadorUsado = false;
let operadorAtual;

let resultadoAnterior = 0;
let resultadoAtual = 0;

const operacoesPermitidas = {
    soma: "soma",
    subtracao: "subtracao",
    multiplicacao: "multiplicacao",
    divisao: "divisao",
};

function registraValorNaTela(tecla) {
    if (operadorUsado) {
        visor.value = "";
        operadorUsado = false;
    }
    if (parseFloat(visor.value) == 0) {
        visor.value = "";
    }
    visor.value += tecla;
}

function zeraVisor() {
    visor.value = 0;
    cont = 0;
    resultadoAnterior = 0;
    resultadoAtual = 0;
}

function efetuaCalculo(v1, v2, op) {
    operadorAtual = op;
    switch (op) {
        case operacoesPermitidas.soma:
            resultadoAtual = v1 + v2;
            registraValorNaTela(resultadoAtual);
            resultadoAnterior = resultadoAtual;
            operadorUsado = true;
            break;
        case operacoesPermitidas.subtracao:
            resultadoAtual = v1 - v2;
            registraValorNaTela(resultadoAtual);
            resultadoAnterior = resultadoAtual;
            operadorUsado = true;
            break;
        case operacoesPermitidas.multiplicacao:
            resultadoAtual = v1 * v2;
            registraValorNaTela(resultadoAtual);
            resultadoAnterior = resultadoAtual;
            operadorUsado = true;
            break;
        case operacoesPermitidas.divisao:
            resultadoAtual = v1 / v2;
            registraValorNaTela(resultadoAtual);
            resultadoAnterior = resultadoAtual;
            operadorUsado = true;
            break;
    }
}

function registraVariavel(valor, operacao) {
    console.log(`Cont: ${cont}\nValAnterior: ${valor}`);

    if (cont === 0) {
        resultadoAnterior = valor;
        cont++;
    } else {
        resultadoAtual = valor;

        efetuaCalculo(
            parseFloat(resultadoAnterior),
            parseFloat(resultadoAtual),
            operacao
        );
    }
}

const tecla1 = document.querySelector("#t1");
tecla1.addEventListener("click", (e) => {
    registraValorNaTela(tecla1.innerHTML);
});

const tecla2 = document.querySelector("#t2");
tecla2.addEventListener("click", (e) => {
    registraValorNaTela(tecla2.innerHTML);
});

const tecla3 = document.querySelector("#t3");
tecla3.addEventListener("click", (e) => {
    registraValorNaTela(tecla3.innerHTML);
});

const tecla4 = document.querySelector("#t4");
tecla4.addEventListener("click", (e) => {
    registraValorNaTela(tecla4.innerHTML);
});

const tecla5 = document.querySelector("#t5");
tecla5.addEventListener("click", (e) => {
    registraValorNaTela(tecla5.innerHTML);
});

const tecla6 = document.querySelector("#t6");
tecla6.addEventListener("click", (e) => {
    registraValorNaTela(tecla6.innerHTML);
});

const tecla7 = document.querySelector("#t7");
tecla7.addEventListener("click", (e) => {
    registraValorNaTela(tecla7.innerHTML);
});

const tecla8 = document.querySelector("#t8");
tecla8.addEventListener("click", (e) => {
    registraValorNaTela(tecla8.innerHTML);
});

const tecla9 = document.querySelector("#t9");
tecla9.addEventListener("click", (e) => {
    registraValorNaTela(tecla9.innerHTML);
});

const tecla0 = document.querySelector("#t0");
tecla0.addEventListener("click", (e) => {
    registraValorNaTela(tecla0.innerHTML);
});

const teclaPonto = document.querySelector("#tPonto");
teclaPonto.addEventListener("click", (e) => {
    registraValorNaTela(teclaPonto.innerHTML);
});

const teclaC = document.querySelector("#tC");
teclaC.addEventListener("click", (e) => {
    zeraVisor();
});

const teclaAdicao = document.querySelector("#tAdicao");
teclaAdicao.addEventListener("click", (e) => {
    operadorUsado = true;
    operadorAtual = operacoesPermitidas.soma;
    registraVariavel(parseFloat(visor.value), operacoesPermitidas.soma);
});

const teclaSubtracao = document.querySelector("#tSubtracao");
teclaSubtracao.addEventListener("click", (e) => {
    operadorUsado = true;
    operadorAtual = operacoesPermitidas.subtracao;
    registraVariavel(parseFloat(visor.value), operacoesPermitidas.subtracao);
});

const teclaMultiplicacao = document.querySelector("#tMultiplicacao");
teclaMultiplicacao.addEventListener("click", (e) => {
    operadorUsado = true;
    operadorAtual = operacoesPermitidas.multiplicacao;
    registraVariavel(
        parseFloat(visor.value),
        operacoesPermitidas.multiplicacao
    );
});

const teclaDivisao = document.querySelector("#tDivisao");
teclaDivisao.addEventListener("click", (e) => {
    operadorUsado = true;
    operadorAtual = operacoesPermitidas.divisao;
    registraVariavel(parseFloat(visor.value), operacoesPermitidas.divisao);
});

const teclaIgual = document.querySelector("#tIgual");
teclaIgual.addEventListener("click", (e) => {
    operadorUsado = true;
    registraVariavel(parseFloat(visor.value), operadorAtual);
    cont = 0;
});