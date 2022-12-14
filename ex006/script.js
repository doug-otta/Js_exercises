function media(){
    let n1 = Number(document.querySelector('input#nota1').value)
    let n2 = Number(document.querySelector('input#nota2').value)
    let n3 = Number(document.querySelector('input#nota3').value)
    let n4 = Number(document.querySelector('input#nota4').value)

    let res = document.querySelector('div#res')

    let notaFinal = (n1 + n2 + n3 + n4)/4

    if(n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 || n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10){
        window.alert("Insira nos campos números menores que 10 ou maiores que 0")
    } else{
        res.innerHTML = `A nota final é ${notaFinal}, ` 

        if(notaFinal < 4){
            res.innerHTML += `REPROVADO!`
        } else if (notaFinal < 6){
            res.innerHTML += `RECUPERAÇÃO!`
        } else {
            res.innerHTML += `APROVADO`
        }
    }
}