const initialState = {
    loading: false,
    totalSupply: 0,
    cost: 0,
    error: false,
    errorMsg: '',
    paused: false,
}

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHECK_DATA_REQUEST':
            return {
                ...state,
                loading: true,
                error: false,
                errorMsg: '',
            }
        case 'CHECK_DATA_SUCCESS':
            return {
                ...state,
                loading: false,
                totalSupply: action.payload.totalSupply,
                cost: action.payload.cost,
                error: false,
                errorMsg: '',
                paused: action.payload.paused,
            }
        case 'CHECK_DATA_FAILED':
            return {
                ...initialState,
                loading: false,
                error: true,
                errorMsg: action.payload,
            }
        default:
            return state
    }
}

export default dataReducer
