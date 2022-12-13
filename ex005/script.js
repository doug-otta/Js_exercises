function calcular(){
    let number = document.querySelector('input#number')
    let n = Number(number.value)
    let res = document.querySelector('div#res')

    let sec = document.querySelector('section#sec')
    
    if(!n || n < 0){
        window.alert('Insira um número maior que 0')

    } else {

        let div1 = document.createElement('div')
        let div2 = document.createElement('div')
    
        res.innerHTML = `O dobro de ${n} vale ${2 * n}`
        sec.appendChild(div1)
        sec.appendChild(div2) 
        
        div1.innerHTML = `O triplo de ${n} vale ${3 * n}`
        div2.innerHTML = `A raíz quadrada de ${n} é igual a ${Math.sqrt(n)}`

    }
}

function limpar(){
    let sec = document.querySelector('section#sec')
    let div1 = document.getElementsByTagName('div')[2]
    let div2 = document.getElementsByTagName('div')[3]

    res.innerHTML = ''
    sec.removeChild(div1)
    sec.removeChild(div2)
}