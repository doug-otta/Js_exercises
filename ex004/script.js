function antesDepois(){
    let num = document.querySelector('input#number')
    let n = Number(num.value)

    let res = document.querySelector('div#res')

    res.innerHTML = `Analisando o valor ${n}, o seu antecessor é ${n-1} e o sucessor é ${n+1}`
}