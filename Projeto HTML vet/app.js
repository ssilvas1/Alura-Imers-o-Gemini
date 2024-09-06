function pesquisar() {
    let section         =  document.getElementById("resultados-pesquisa");

    let campoPesquisa   =  document.getElementById("campo-pesquisa").value
    // se o campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
section.innerHTML = "Nada foi encontrado resultado vazio"
return

    }

    campoPesquisa = campoPesquisa.toLowerCase ()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
   
    

    for (let dado of dados) {
titulo = dado.titulo.toLowerCase ()
descricao = dado.descricao.toLocaleLowerCase ()
tags = dado.tags.toLocaleLowerCase ()

      //se titulo includes campoPesquisa
      // então, faça...
      if (titulo.includes(campoPesquisa) || descricao.includes (campoPesquisa) || tags.includes (campoPesquisa)){
        //Cria um novo elemento do resultado
        resultados += `
        <div class="item-resultado">
          <h2> <a href="#" target="_blank">${dado.titulo}</a> </h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">  "mais informações</a>
      </div>
    `;
      if (!resultados) {
resultados = "<p>Nada foi encontrado resultado errado<p>"
return
}
      }
     
       
    }

    section.innerHTML = resultados
}


