function carregarProdutos(){
    var req = new XMLHttpRequest()

    req.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){ //quando o servidor recebe a requisição o redstate é 4 
            var produtos = JSON.parse( this.responseText )
            var txt = '<div class="row"> '
            txt +=    '     <div class="col"> <strong> Código </strong></div>'
            txt +=    '     <div class="col"> <strong> Nome </strong> </div>'
            txt +=    '     <div class="col"> <strong> Preco </strong> </div>'
            txt +=    '     <div class="col"> <strong> Categoria </strong> </div>'
            txt +=    '</div> '
            
            produtos.forEach( prod => {
                txt +=     '<div class="row"> '
                txt +=    '     <div class="col"> ' + prod.id + ' </div>'
                txt +=    '     <div class="col"> ' + prod.nome + ' </div>'
                txt +=    '     <div class="col"> ' + prod.preco + ' </div>'
                txt +=    '     <div class="col"> ' + prod.categoria + ' </div>'
                txt +=    '</div> '
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
        if( this.readyState == 4 && this.status == 200){ //quando o servidor recebe a requisição o redstate é 4 
            var categorias = JSON.parse( this.responseText )
            var txt = '<div class="row"> '
            txt +=    '     <div class="col"> <strong> Código </strong></div>'
            txt +=    '     <div class="col"> <strong> Nome </strong> </div>'
            txt +=    '</div> '
            
            categorias.forEach( cat => {
                txt +=     '<div class="row"> '
                txt +=    '     <div class="col"> ' + cat.id + ' </div>'
                txt +=    '     <div class="col"> ' + cat.nome + ' </div>'
                txt +=    '</div> '
            })
            document.getElementById("divConteudo").innerHTML = txt
        }
    }

    
    req.open("GET", "http://localhost:8001/product", true)
    req.send()
}