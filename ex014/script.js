function calcular(){
    let dataDay = Number(document.querySelector('input#dataDay').value)
    let dataKm = Number(document.querySelector('input#dataKm').value)
    let res = document.querySelector('div#res')

    let dayUse = dataDay * 60
    let dayKm = dataKm * 0.15

    let dayTotal = dayUse + dayKm

    res.innerHTML = `O valor total do aluguel é: R$${dayTotal}`
}