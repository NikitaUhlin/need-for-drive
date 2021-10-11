const initialState = {
    order: {
        city: '',
        pickUp: ''
    },
    activeTab: 1,
    accessibleTab: 1,
    cities: [],
    loading: false,
    error: null
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

        case "UPDATE_ACTIVE_TAB":
            return {
                ...state,
                activeTab: action.payload
            };

        case "UPDATE_ACCESSIBLE_TAB":
            return {
                ...state,
                accessibleTab: action.payload
            };

        case "GET_CITIES_STARTED":
            return {
                ...state,
                loading: true
            };
        case "GET_CITIES_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                cities: action.payload.data
            };
        case "GET_CITIES_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        default:
            return state;
    }
}

export default reducer