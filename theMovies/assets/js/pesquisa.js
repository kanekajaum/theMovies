function consultar(){
     // Guarda o valor do campo NOME na variável nome.
     var nome = document.txtForm.nome.value;
    

      var xhr = new XMLHttpRequest();


            xhr.open("GET","https://api.themoviedb.org/3/search/movie?include_adult=false&page=1&query="+nome+"&language=pt-BR&api_key=120860d467422e64a430359f6ff89ba6");

            var lista = document.getElementById('nome','detalhes','votos')
            
           xhr.onreadystatechange = function() {
                var nomeFilmes = " ";
                var a = JSON.parse(xhr.responseText).results
                for(var i = 0; i < a.length; i ++){


nomeFilmes += '<div class="card">'
                  +'<img class="img-fluid rounded" id="id'+i+'"src="https://image.tmdb.org/t/p/w500/'+ JSON.parse(xhr.responseText).results[i].backdrop_path  +'" class="card-img-top" alt="...">'
                  +'<div class="card-body">'

                   +'<h5 class="card-title"  id="lista'+i+'"><div id="titulo" name="titulo" style="height:65px;">'+ JSON.parse(xhr.responseText).results[i].title +'</div></h5>'
                    +'<p id="p" "name="p">'+JSON.parse(xhr.responseText).results[i].id +'</p>'
                    +'<p id="desc" style="display:none;" class="card-text">'+ JSON.parse(xhr.responseText).results[i].overview +'<br/> </p>'
                    +'<a id="'+i+'" class="btn btn-info" onclick="storege('+i+');" href="reprodutor.html" role="button" visualizar() >Visualizar </a> ' 
                    +' <a id="'+i+'" class="btn btn-danger" href="#" role="button" onclick="alerta('+i+');" criarCookie('+'lista'+i+'.innerHTML'+')">&hearts;</a>' 
                  
                  +'</div>'
                  +'<div class="card-footer">'
                    +'<small class="text-muted">' + JSON.parse(xhr.responseText).results[i].vote_average +'</small>'
                  +'</div>'
              +'</div>'
                }



                
                lista.innerHTML = nomeFilmes 

                
            }
            xhr.send();

             return false;
     }
//===================================gravar no storage============================================

//===================================gravar no storage============================================
function storege(ap){

            localStorage.setItem("descricao",desc[ap].innerHTML);
            localStorage.setItem("id",p[ap].innerHTML);
}

//================================criar linha na tabela favoritos===============================================
function alerta(op) {
    for (var i = 0; i <= 20 ; i++) {
         var item = localStorage.getItem("fav["+[i]+"]");
        

        if(item != null){
            alert("Já esta na sua lista de favoritos!!!");
            break;
        }
    }
    alert(titulo[op].innerText +" | Numero de votos: "+ voto[op].innerText);
    favoritoz[op] = titulo[op].innerHTML;
            var tr = document.createElement("tr"); // cria o elemento tr
            var td = document.createElement("th"); // cria o element td
            var td = document.createElement("td");
            var textnode = document.createTextNode(favoritoz[op]); 
            td.appendChild(textnode); // adiciona o texto na td criada
            tr.appendChild(td); // adiciona a td na tr

            var tr_id2 = document.getElementById("id_2"); // pega a tr pelo id
            // adiciona o elemento criado, a partir do nó pai (no caso <table>)
            tr_id2.parentNode.insertBefore(tr, tr_id2);


            localStorage.setItem("fav["+[op]+"]",titulo[op].innerHTML);   

}



var item = [];




for (var i = 0; i <= 20 ; i++) {
     var item = localStorage.getItem("fav["+[i]+"]");
    

    if(item != null){
        var tr = document.createElement("tr"); // cria o elemento tr
        var td = document.createElement("th"); // cria o element td
        var td = document.createElement("<td>");
        var textnode = document.createTextNode(item); 
        td.appendChild(textnode); // adiciona o texto na td criada
        tr.appendChild(td); // adiciona a td na tr

        var tr_id2 = document.getElementById("id_2"); // pega a tr pelo id
        // adiciona o elemento criado, a partir do nó pai (no caso <table>)
        tr_id2.parentNode.insertBefore(tr, tr_id2);
        // console.log(item);
    }
}




