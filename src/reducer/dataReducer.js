const INITIAL_STATE = {
    Global: [],
    Countries: []
}

const dataReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'GLOBAL':
            return {
                ...state,
                Global: action.payload
            }
        case 'COUNTRIES' :
            return {
                ...state,
                Countries: action.payload
            }
        default : 
            return state
    }   
}

export default dataReducer