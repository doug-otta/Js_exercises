function calcular(){
    let valueSale = Number(document.querySelector('input#sale').value)
    let totalFinal = Number(document.querySelector('input#totalFinal').value)
    let res = document.querySelector('div#res')

    if(!valueSale || !totalFinal || valueSale < 0 || totalFinal < 0){
        window.alert = `Preencha os campos corretamente`
    } else {
    res.innerHTML = `Com um desconto de ${valueSale}% o valor final da 
    compra fica R$${(totalFinal -(valueSale/100)*totalFinal).toFixed(2)}`
    }
}