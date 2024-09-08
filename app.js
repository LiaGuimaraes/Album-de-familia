function pesquisar() {
  // Seleciona a seção HTML onde os resultados serão exibidos.
  let section = document.getElementById("resultados-pesquisa");

  let campoPesquisa = document.getElementById("campo-pesquisa").value;

  if (!campoPesquisa) {
    section.innerHTML =
      "<p>Nada foi encontrado. Você precisa digitar algo.</p>";
    return;
  }

  campoPesquisa = campoPesquisa.toLowerCase();

  // Inicializa uma string vazia para armazenar os resultados HTML.
  let resultados = "";
  let titulo = "";
  let descricao = "";
  let tags = "";

  // Itera sobre cada objeto "cachorro" no array "cachorros".
  for (let cachorro of cachorros) {
    titulo = cachorro.titulo.toLowerCase();
    descricao = cachorro.descricao.toLowerCase();
    tags = cachorro.tags.toLocaleLowerCase();
    if (
      titulo.includes(campoPesquisa) ||
      descricao.includes(campoPesquisa) ||
      tags.includes(campoPesquisa)
    ) {
      // Cria uma nova div para representar um resultado.
      resultados += `<div class="item-resultado">
    
    <h2><a href="#" target="blank">${cachorro.titulo}</a></h2>
 
    <p class="descricao-meta">
      ${cachorro.descricao}
    </p>
   
    <a class="ancora-detalhes"
      href=${cachorro.linkRaca} target="_blank">
      Para saber mais sobre a raça clique aqui
    </a>
  </div>`;
    }
  }

  if (!resultados) {
    resultados = "<p>Nada foi encontrado</P>";
  }

  // Insere os resultados construídos na seção HTML.
  section.innerHTML = resultados;
}
