const initialState = {
    loading: false,
    data: [],
    errorMsg: '',
    count: 0
};

const PokemonListReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "POKEMON_LIST_LOADING":
            return {
                ...state,
                loading: true,
                errorMsg: ''
            };
        case "POKEMON_LIST_FAIL":
            return {
                ...state,
                loading: false,
                errorMsg: 'Não foi possível carregar o Pokemon'
            }
        case "POKEMON_LIST_SUCCESS":
            return {
                ...state,
                loading: false,
                data: payload.results,
                errorMsg: '',
                count: payload.count
            }
        default:
            return state
    }
}

export default PokemonListReducer;