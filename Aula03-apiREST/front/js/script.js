function carregarProdutos(){
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var produtos = JSON.parse( this.responseText )
            var txt =   '<div class="row">'
            txt +=      '   <div class="col"> <strong> Código </strong></div>'
            txt +=      '   <div class="col"> <strong> Nome </strong></div>'
            txt +=      '   <div class="col"> <strong> Preço </strong></div>'
            txt +=      '   <div class="col"> <strong> Categoria </strong></div>'
            txt +=      '</div> '

            produtos.forEach( prod => {
                txt +=      '<div class="row">'
                txt +=      '   <div class="col"> ' + prod.id + ' </div>'
                txt +=      '   <div class="col"> ' + prod.nome + ' </div>'
                txt +=      '   <div class="col"> ' + prod.preco + ' </div>'
                txt +=      '   <div class="col"> ' + prod.categoria + '</div>'
                txt +=      '</div> '
            })
            document.getElementById("divConteudo").innerHTML = txt
                  
        }
    }
    req.open("GET", "http://localhost:8001/product", true)
    req.send()
}

function carregarCategorias(){
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var categorias = JSON.parse( this.responseText )
            var txt =   '<div class="row">'
            txt +=      '   <div class="col"> <strong> Código </strong></div>'
            txt +=      '   <div class="col"> <strong> Nome </strong></div>'
            txt +=      '   <div class="col"> <strong> Editar </strong></div>'
            txt +=      '</div> '

            categorias.forEach( cat => {
                txt +=      '<div class="row">'
                txt +=      '   <div class="col"> ' + cat.id + ' </div>'
                txt +=      '   <div class="col" id="divNome' + cat.id +'"> ' + cat.nome + ' </div>'
                txt +=      '   <div class="col" id="divBtn'+cat.id+'">'
                txt +=              '<button class="btn btn-success" onclick="formEditar(' + cat.id +')">Editar</button>' 
                txt +=      '   </div>'
                txt +=      '</div> '
            })
            document.getElementById("divConteudo").innerHTML = txt
                  
        }
    }
    req.open("GET", "http://localhost:8001/category", true)
    req.send()
}

function formEditar( idCat ){
    var divNome = document.getElementById( "divNome" + idCat)
    var nome = divNome.innerHTML
    var novaDivNome = '<input type="text" id="txtNome" value="' + nome +'" > '
    divNome.innerHTML = novaDivNome
    var divEditar = document.getElementById("divBtn" + idCat)
    divEditar.innerHTML = '<button class="btn btn-danger" onclick="editar(' + idCat + ')">Salvar</button>'
}

function editar( idCat ){
    var novoNome = document.getElementById("txtNome").value
    if( novoNome != "" ){
        var req = new XMLHttpRequest()
        req.onreadystatechange = function(){
            if( this.readyState == 4 ){
                carregarCategorias()
            }
        }
        req.open("PUT", "http://localhost:8001/category/" + idCat , true)

        //req.setRequestHeader( "Content-type" , "application/x-www-form-urlencoded" );
        //req.send( "nome=" + novoNome );

        req.setRequestHeader( "Content-type" , "application/json" )
        req.send( JSON.stringify({ nome : novoNome }) )

    }
}