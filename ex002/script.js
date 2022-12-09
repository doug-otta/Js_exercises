function calcular(){
    let n1 = Number(document.querySelector('input#n1').value)
    let n2 = Number(document.querySelector('input#n2').value)

    let res = document.querySelector('div#res')


    res.innerHTML = `A soma entre ${n1} e ${n2} é ${n1+n2}`

    
}