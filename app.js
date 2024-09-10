function buscar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Imprime a seção no console (para fins de depuração, se necessário)
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campo pesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado </p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase ()

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada item de dados (assumindo que 'dados' é um array)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
        }
        console.log(dado.titulo.includes(campoPesquisa))
        // Constrói o HTML para cada resultado, formatando os dados do objeto 'dado'
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado </p>"
    }

    // Atribui o HTML construído à seção, substituindo o conteúdo existente
    section.innerHTML = resultados;
}
// console.log(dados);

