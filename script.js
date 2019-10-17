function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value >ano ){
        alert ('Verifique os dados e tente novamente')
    } else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if(fsex [0].checked) {
        genero ='Homem'
        if (idade>= 0 && idade <10 ){
            //criança
            img.setAttribute('src','bebeh.jpg')
        }else if(idade < 21) {
            //Jovem
            img.setAttribute('src','jovemh.jpg')
        }else if (idade < 50 ){
            //adulto
            img.setAttribute('src','adulth.jpg')
        }else {
            
            img.setAttribute('src','idosoh.jpg')
        }

    }else if (fsex[1].checked){
        genero ='Mulher'
        if (idade>= 0 && idade <10 ){
            //criança
            img.setAttribute('src','bebem.jpg')
        }else if(idade < 21) {
            //Jovem
            img.setAttribute('src','jovemm.jpg')
        }else if (idade < 50 ){
            //adulto
            img.setAttribute('src','adultam.jpg')
        }else {
            
            img.setAttribute('src','idosam.jpg')
        }
    }
        
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)

    }
}