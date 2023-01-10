function calcular(){
    let compOpo = Number(document.querySelector('input#compOpo').value)
    let compAdj = Number(document.querySelector('input#compAdj').value)
    let res = document.querySelector('div#res')

    hipotenusa = Math.pow(compOpo,2) + Math.pow(compAdj,2)
    hip =(Math.sqrt(hipotenusa)).toFixed(2)

    res.innerHTML = `O valor da hipotenusa equivale a ${hip}`
}