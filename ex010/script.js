function calcular (){
    let height = Number(document.querySelector('input#height').value)
    let width = Number(document.querySelector('input#width').value)
    let res = document.querySelector('div#res')

    if(height < 0 || width < 0 || !height || !width){
        window.alert(':) Preencha todos os campos corretamente :)')
    } else{
        res.innerHTML = `Sua parede tem a área de ${height * width}m², a 
        quantidade de tinta necessária é de ${(height*width/2).toFixed(2)}l de tinta`
    }

}