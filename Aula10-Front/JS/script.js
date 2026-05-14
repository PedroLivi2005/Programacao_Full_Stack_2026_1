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
            document.getElementById("divCategorias").innerHTML = txt
                  
        }
    }
    req.open("GET", "http://localhost:8001/category", true)
    req.send()
}

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
            document.getElementById("divProdutos").innerHTML = txt
                  
        }
    }
    req.open("GET", "http://localhost:8001/product", true)
    req.send()
}