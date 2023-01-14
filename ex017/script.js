function calcular(){
    let dataAng = Number(document.querySelector('input#dataAng').value)
    let sec = document.querySelector('section#sec')

    div1 = document.createElement('div')
    div2 = document.createElement('div')
    div3 = document.createElement('div')

    sec.appendChild(div1)
    sec.appendChild(div2)
    sec.appendChild(div3)

    dataRad = dataAng * (Math.PI/180)

    div1.innerHTML = `O seno equivale a: ${Math.sin(dataRad).toFixed(2)} rad`
    div2.innerHTML = `O cosseno equivale a: ${Math.cos(dataRad).toFixed(2)} rad`
    div3.innerHTML = `A tangente equivale a: ${Math.tan(dataRad).toFixed(2)} rad`
}

function limpar (){
    div1.remove()
    div2.remove()
    div3.remove()
}