const initialState = {
    loading: false,
    data: [],
    errorMsg: ''
};

const PokemonMultipleReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "POKEMON_MULTIPLE_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ''
            };
        case "POKEMON_MULTIPLE_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: 'Não foi possível encontrar Pokemons'
            };
        case "POKEMON_MULTIPLE_SUCCESS":
            return {
                ...state,
                loading: false,
                errorMsg: '',
                data: {
                    ...state.data,
                    [action.pokemonName]: payload
                }
            };
        default:
            return state
    }
};

export default PokemonMultipleReducer;