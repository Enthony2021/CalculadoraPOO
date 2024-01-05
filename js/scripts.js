class Calculator {
    constructor() {
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue = document.querySelector('#result-number');
        this.reset = 0;
    }

    clearValues() {
        this.upperValue.textContent = '0';
        this.resultValue.textContent = '0';
    }

    checkLastDigit(input, upperValue, reg) {
        if (
            !reg.test(input) &&
            !reg.test(upperValue.substr(upperValue.length - 1))
        ) {
            return true;
        } else {
            return false;
        }
    }

    // Resolve a operação
    resolution() {
        let expressaoDoCalculo = this.upperValue.textContent;
        if (expressaoDoCalculo == 0) {
            return;
        }

        const contemMultiplicacao = expressaoDoCalculo.indexOf("x");
        
        if (contemMultiplicacao != -1) {
            expressaoDoCalculo = expressaoDoCalculo.replaceAll("x", "*");
        }

        let result = eval(expressaoDoCalculo);

        this.upperValue.textContent = result;
        this.resultValue.textContent = result;
    }

    btnPress() {
        let input = this.textContent;
        let upperValue = calc.upperValue.textContent;

        // Verifica se tem apenas número
        let reg = new RegExp('^\\d+$');

        // Ativa o método de limpar o display
        if (input === 'AC') {

            calc.clearValues();

        } else if (input === '=') {

            calc.resolution();

        } else {

            // Checa se o ultimo digito é um sinal
            if (calc.checkLastDigit(input, upperValue, reg)) {
                return false;
            }

            if (!reg.test(input)) input = ` ${input} `;

            if (upperValue === "0") {
                if (reg.test(input)) {
                    calc.upperValue.textContent = input;
                }
            } else {
                calc.upperValue.textContent += input;
            }
        }
    }
}

// Start Object
let calc = new Calculator;

// Start btns
let buttons = document.querySelectorAll('.btn');

// map all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', calc.btnPress);
}

