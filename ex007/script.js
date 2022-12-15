function conversao(){
    let dist = Number(document.querySelector('input#dist').value)
    let sec = document.querySelector('section#sec')

    if(dist < 0){
        window.alert('Coloque um valor acima de zero :))')
    } else{
    let div1 = document.createElement('div')
    let div2 = document.createElement('div')
    let div3 = document.createElement('div')
    let div4 = document.createElement('div')
    let div5 = document.createElement('div')
    let div6 = document.createElement('div')

    sec.appendChild(div1)
    sec.appendChild(div2)
    sec.appendChild(div3)
    sec.appendChild(div4)
    sec.appendChild(div5)
    sec.appendChild(div6)

    div1.innerHTML = `A distância em km é: ${dist / 1000}`
    div2.innerHTML = `A distância em hm é: ${dist / 100}`
    div3.innerHTML = `A distância em dam é: ${dist / 10}`
    div4.innerHTML = `A distância em dm é: ${dist * 10}`
    div5.innerHTML = `A distância em cm é: ${dist * 100}`
    div6.innerHTML = `A distância em mm é: ${dist * 1000}`

    }
}

function limpar(){
    let sec = document.querySelector('section#sec')
    let div1 = document.getElementsByTagName('div')[1]
    let div2 = document.getElementsByTagName('div')[2]
    let div3 = document.getElementsByTagName('div')[3]
    let div4 = document.getElementsByTagName('div')[4]
    let div5 = document.getElementsByTagName('div')[5]
    let div6 = document.getElementsByTagName('div')[6]

    sec.removeChild(div1)
    sec.removeChild(div2)
    sec.removeChild(div3)
    sec.removeChild(div4)
    sec.removeChild(div5)
    sec.removeChild(div6)
    
}