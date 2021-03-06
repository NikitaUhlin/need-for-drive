export const initialState = {
    order: {
        city: '',
        pickUp: '',
        car: '',
        selectColor: '',
        selectRate: '',
        startDate: null,
        endDate: null,
        additional: [],
        price: 0
    },
    activeTab: 1,
    accessibleTab: 1,
    cities: [],
    pickUps: [],
    loading: true,
    error: null,
    points: [],
    geolocationCity: '',
    pointCity: '',
    cars: [],
    carCategory: [{
        id: '',
        title: 'Все модели'
    }],
    rate: [],
    confirmedOrder: {}

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

        case "GET_CARS_STARTED":
            return {
                ...state,
                loading: true
            };

        case "GET_CARS_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                cars: action.payload.data
            };

        case "GET_CARS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case "GET_RATE_STARTED":
            return {
                ...state,
                loading: true
            };

        case "GET_RATE_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                rate: action.payload.data
            };

        case "GET_RATE_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case "GET_CAR_CATEGORY_SUCCESS":
            const category = action.payload.data.map((item) => (
                {
                    id: item.id,
                    title: item.name
                }
            ))

            return {
                ...state,
                error: null,
                carCategory: [...state.carCategory,
                ...category]
            };

        case "GET_CAR_CATEGORY_FAILURE":
            return {
                ...state,
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
            const pointCity = action.payload.data.response.GeoObjectCollection.featureMember[0]

            return {
                ...state,
                loading: false,
                error: null,
                pointCity: pointCity ? pointCity.GeoObject.Point.pos : null
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

        case "CREATE_ORDER_STARTED":
            return {
                ...state,
                loading: true
            };

        case "CREATE_ORDER_SUCCESS":
            localStorage.setItem('order_id', action.payload.data.id)

            return {
                ...state,
                loading: false,
                error: null,
                confirmedOrder: action.payload.data
            };

        case "CREATE_ORDER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case "CHANGE_ORDER_STARTED":
            return {
                ...state,
                loading: true
            };

        case "CHANGE_ORDER_SUCCESS":
            localStorage.removeItem('order_id')

            return {
                ...state,
                loading: false,
                error: null,
                confirmedOrder: action.payload.data
            };

        case "CHANGE_ORDER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case "GET_ORDER_STARTED":
            return {
                ...state,
                loading: true
            };

        case "GET_ORDER_SUCCESS":
            return {
                ...state,
                loading: false,
                error: null,
                confirmedOrder: action.payload.data
            };

        case "GET_ORDER_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload
            };

        case "RESET":
            return initialState;

        default:
            return state;
    }
}

export default reducer