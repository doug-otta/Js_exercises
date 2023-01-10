function calcIntPart(){
    let intPart = Number(document.querySelector('input#intPart').value)
    let res = document.querySelector('div#res')

    res.innerHTML = `A parte inteira do valor ${intPart} é: ${Math.trunc(intPart)}`
}