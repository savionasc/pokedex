
//variaveis pra lidar com os elementos da tela
let listaSelecaoPokemons = document.querySelectorAll('.pokemon')
let pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    //evento clique do usuário
    pokemon.addEventListener('click', () => {
        let cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        let idPokemonSelecionado = pokemon.attributes.id.value
        
         let idCartaoselecionado = 'cartao-'+idPokemonSelecionado
        let cartaoPokemonParaAbrir = document.getElementById(idCartaoselecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        let pokemonAtivoListagem = document.querySelector('.ativo')
        pokemonAtivoListagem.classList.remove('ativo')

        let pokemonNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonNaListagem.classList.add("ativo") 
    })
})


