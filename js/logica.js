
(function(){
    function calqIMC(){

        const nome = document.getElementById('nome').value
        const altura = document.getElementById('altura').value
        const peso = document.getElementById('peso').value
        const calcular = document.getElementById('calcular')
        const resultado = document.getElementById('resultado')
        
        if(nome !== '' && altura !== '' && peso !== ''){

          let imc = peso / (altura * altura).toFixed(2)
          let classificacao = ''

            if(imc < 16.5){
                classificacao = 'muito abaixo do peso. Cuidado!!!'
            }else if(imc > 16.6 && imc < 18.5){
                classificacao = 'abaixo do peso'
            }else if(imc > 18.5 && imc < 24.9){
                classificacao = 'peso normal. Parabéns!!!'
            }else if(imc > 25 && imc < 29.9){
                classificacao = 'acima do peso'
            }else if(imc > 30 && imc < 34.9){
                classificacao = 'obesidade Grau I'
            }else if(imc > 35 && imc < 40){
                classificacao = 'obesidade Grau II'
            }else{
                classificacao = 'obesidade Grau III. Cuidado!!!'
            }

            resultado.textContent = `${nome} seu IMC é ${imc} e você se encontra na classificação ${classificacao}`

        }else{
            resultado.textContent = 'Preencha todos os campos'
        }

    }

    calcular.addEventListener('click',calqIMC)

})()

