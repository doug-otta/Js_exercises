function tabuada (){
    let number = Number(document.querySelector('input#number').value)
    let res = document.querySelector('select#tab')

    res.innerHTML = ' '
    
    for(let n = 1; n <= 10; n++){
        let opt = document.createElement('option')
        opt.text = `${number} x ${n} = ${number * n}`
        res.appendChild(opt)
    }
}