function calcular(){
    let moeda = String(document.querySelector('select#moedas').value)
    let dinCart = Number(document.querySelector('input#money').value)
    let res = document.querySelector('div#res')

    let dolar = String(document.getElementsByTagName('option')[1].value)
    let real = String(document.getElementsByTagName('option')[0].value)

    
    if(!dinCart || !moeda){
        window.alert('Preencha todos os campos :))')
    } else if (moeda == real){
        res.innerHTML = (`Com a quantidade R$ ${dinCart}, compra-se U$ ${(dinCart/5.47).toFixed(2)} `)
    } else{
        res.innerHTML = (`Com a quantidade US$ ${dinCart}, compra-se R$ ${(dinCart*5.47).toFixed(2)} `)
    }

}