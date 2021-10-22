const initialState = {
    order: {
        city: '',
        pickUp: ''
    },
    activeTab: 1,
    accessibleTab: 1,
    cities: [],
    pickUps: [],
    loading: false,
    error: null,
    points: [],
    geolocationCity: '',
    pointCity: '',
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

        case "GET_PICK_UP_STARTED":
            return {
                ...state,
                loading: true
            };
        case "GET_PICK_UP_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                pickUps: action.payload.data
            };
        case "GET_PICK_UP_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "GET_POINT_STARTED":
            return {
                ...state,
                loading: true
            };
        case "GET_POINT_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                points: action.payload
            };
        case "GET_POINT_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case "GET_POINT_CITY_STARTED":
            return {
                ...state,
                loading: true
            };
        case "GET_POINT_CITY_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                pointCity: action.payload.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
            };
        case "GET_POINT_CITY_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case "GET_GEOLOCATION_CITY_STARTED":
            return {
                ...state,
                loading: true
            };
        case "GET_GEOLOCATION_CITY_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                geolocationCity: action.payload.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.Address.formatted.split(', ')[1]
            };
        case "GET_GEOLOCATION_CITY_FAILURE":
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