function calcular(){
    let name = String(document.querySelector('input#name').value)
    let salary = Number(document.querySelector('input#salary').value)
    let res = document.querySelector('div#res')

    res.innerHTML = `O reajuste do funcionário ${name} é de R$${salary + salary * 0.15}`
}