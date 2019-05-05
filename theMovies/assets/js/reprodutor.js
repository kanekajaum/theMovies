 var id = localStorage.getItem('id');
  var descricao = localStorage.getItem('descricao');
  var lista = document.getElementById('nome','detalhes','votos')
  var xhr = new XMLHttpRequest();

  detalhes.innerHTML = localStorage.getItem('descricao');



            
//=================================requisição do video=============================
            xhr.open("GET","https://api.themoviedb.org/3/movie/"+id+"/videos?api_key=120860d467422e64a430359f6ff89ba6&language=pt-BR");

            
            
            
            xhr.onreadystatechange = function() {
                var nomeFilmes = " <center> <center/> ", descricaoFilmes = " ", votosFilmes = " ", filmes =" ";
                var a = JSON.parse(xhr.responseText).results
                for(var i = 0; i < 1; i ++){
/*
nomeFilmes += '<div class="col-lg-4" id="'+i+'">'
                +'<img class="rounded-circle" id="'+i+'" name='+JSON.parse(xhr.responseText).results[i].id +' src="https://image.tmdb.org/t/p/w500/'+ JSON.parse(xhr.responseText).results[i].backdrop_path  +'" alt="Generic placeholder image" width="200" height="200">'
                +'<h5 id="lista'+i+'" name = "titulo">'+ JSON.parse(xhr.responseText).results[i].title +'</h5>'
                +'<p>'+ JSON.parse(xhr.responseText).results[i].overview'<br/> <div id="voto" name="voto">' + JSON.parse(xhr.responseText).results[i].vote_average +'</div></p>'
                +'<p><a id="botao" class="btn btn-secondary" href="paginas/Reprodutor.html" role="button">Visualizar </a> </p>'
                +'<p><a id="botao" class="btn btn-danger" href="#" role="button" onclick="click'+i+'()">favorito </a>  </p>'     
              +'</div>'
*/
// nomeFilmes += '<article id="conteudo"><br/><br/><br/>'
//                +'<center>'
//                 +'<h1 id="h1">'+JSON.parse(xhr.responseText).results[i].name+'</h1>'
//                    +'<iframe width="853" height="480" src="https://youtube.com/embed/'+JSON.parse(xhr.responseText).results[i].key+'" frameborder="0" allowfullscreen></iframe>'
//                +'</center>'
//                 +'</video>'
                              
nomeFilmes += 
              // '<title>'+JSON.parse(xhr.responseText).results[i].name+'</title>'
              // +'<div class="embed-responsive embed-responsive-1by1 ">'
              //   +'<iframe class="embed-responsive-item" src="https://youtube.com/embed/'+JSON.parse(xhr.responseText).results[i].key+'" allowfullscreen></iframe>'
              // +'</div><br><hr>'
              // +'<div><h2>'+JSON.parse(xhr.responseText).results[i].name+'</h2></div><br>'

              '<title>'+JSON.parse(xhr.responseText).results[i].name+'</title>'
              +'<div class="embed-responsive embed-responsive-16by9">'
                +'<iframe class="embed-responsive-item" src="https://youtube.com/embed/'+JSON.parse(xhr.responseText).results[i].key+'" allowfullscreen></iframe>'
              +'</div>'
              +'</div><br><hr>'
              +'<div><h2>'+JSON.parse(xhr.responseText).results[i].name+'</h2></div><br>'
        }

                lista.innerHTML = nomeFilmes ;

                
            }
            xhr.send();



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
            var td = document.createElement("td");
            var textnode = document.createTextNode(item); 
            td.appendChild(textnode); // adiciona o texto na td criada
            tr.appendChild(td); // adiciona a td na tr

            var tr_id2 = document.getElementById("id_2"); // pega a tr pelo id
            // adiciona o elemento criado, a partir do nó pai (no caso <table>)
            tr_id2.parentNode.insertBefore(tr, tr_id2);
            // console.log(item);
        }
    }
   


