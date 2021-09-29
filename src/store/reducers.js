const initialState = {
    order: {
        city: '',
        pickUp: ''
    },
    activeTab: 1,
    accessibleTab: 1,

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
        default:
            return state;
    }
}

export default reducer