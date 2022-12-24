function converter (){
    let nameTemp = String(document.querySelector('select#temp').value)
    let numberTemp = Number(document.querySelector('input#valorTemp').value)

    let res = document.querySelector('div#res')

    if(nameTemp == 'celsius'){
        res.innerHTML = `Sua temperatura em Fahrenheit é: ${((numberTemp*9/5) + 32).toFixed(2)} °F`
    } else {
        res.innerHTML = `Sua temperatura em Celsius é: ${(((numberTemp-32)*5/9)).toFixed(2)} °C` 
    }
}