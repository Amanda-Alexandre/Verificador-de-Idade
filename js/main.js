function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');

    if(fano.value.length == 0 || fano.value > ano ){
        window.alert("dasadasdasd");
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = "";
        var img = document.createElement('img');//cria uma tag <img> html
        img.setAttribute('id', 'foto');//'Seta' o id 'foto' há tag img;

        if(fsex[0].checked){
            genero = "Masculino";

            if(idade >= 0 && idade < 15){
                img.setAttribute('src', './img/foto-bebe-h.png');
                
            } else if (idade < 30){
                img.setAttribute('src', './img/foto-adolescente-h.png');
            } else if (idade < 59){
                img.setAttribute('src', './img/foto-jovem-h.png');
            } else {
                img.setAttribute('src', './img/foto-idoso-h.png');
            }

        } else if(fsex[1].checked){
            genero = "Feminino";

            
            if(idade >= 0 && idade < 15){
                img.setAttribute('src', './img/foto-bebe-m.png');
            } else if (idade < 30){
                img.setAttribute('src', './img/foto-adolescente-m.png');
            } else if (idade < 59){
                img.setAttribute('src', './img/foto-jovem-m.png');
            } else {
                img.setAttribute('src', './img/foto-idoso-m.png');
            }
        }
        
        res.innerHTML = `Detectamos o genero ${genero} com a idade de ${idade} anos!!!`
        res.appendChild(img);
        }
}