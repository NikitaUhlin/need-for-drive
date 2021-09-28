const initialState = {
    order: {
        city: '',
        pickUp: ''
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_ORDER":
            return {
                ...state,
                order: {
                    ...state.order,
                    ...action.payload,
                }
            };
        default:
            return state;
    }
}

export default reducer