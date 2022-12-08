function clickMe(){
    let name = document.querySelector('input#txtName')
    let nome = String(name.value)

    let res = document.querySelector('div#show')

    res.innerHTML = `Olá! Muito prazer em te conhecer ${nome}`
}