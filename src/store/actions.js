import API from "../services/apiService";
import geo from "../services/geoService";

const updateOrder = (order) => ({
    type: "UPDATE_ORDER",
    payload: order
});

const updateActiveTab = (activeTab) => ({
    type: "UPDATE_ACTIVE_TAB",
    payload: activeTab
});

const updateAccessibleTab = (accessibleTab) => ({
    type: "UPDATE_ACCESSIBLE_TAB",
    payload: accessibleTab
});

const getCities = () => {
    return dispatch => {
        dispatch(getCitiesStarted());

        API.getCities()
            .then(res => {
                dispatch(getCitiesSuccess(res.data));
            })
            .catch(err => {
                dispatch(getCitiesFailure(err.message));
            });
    };
};

const getCitiesSuccess = newItem => ({
    type: "GET_CITIES_SUCCESS",
    payload: newItem
});

const getCitiesStarted = () => ({
    type: "GET_CITIES_STARTED"
});

const getCitiesFailure = error => ({
    type: "GET_CITIES_FAILURE",
    payload: error
});

const getPickUp = () => {
    return dispatch => {
        dispatch(getPikUpStarted());

        API.getPickUp()
            .then(res => {
                dispatch(getPikUpSuccess(res.data));
            })
            .catch(err => {
                dispatch(getPikUpFailure(err.message));
            });
    };
};

const getPikUpSuccess = newItem => ({
    type: "GET_PICK_UP_SUCCESS",
    payload: newItem
});

const getPikUpStarted = () => ({
    type: "GET_PICK_UP_STARTED"
});

const getPikUpFailure = error => ({
    type: "GET_PICK_UP_FAILURE",
    payload: error
});

const getCars = () => {
    return dispatch => {
        dispatch(getCarsStarted());

        API.getCars()
            .then(res => {
                dispatch(getCarsSuccess(res.data));
            })
            .catch(err => {
                dispatch(getCarsFailure(err.message));
            });
    };
};

const getCarsSuccess = newItem => ({
    type: "GET_CARS_SUCCESS",
    payload: newItem
});

const getCarsStarted = () => ({
    type: "GET_CARS_STARTED"
});

const getCarsFailure = error => ({
    type: "GET_CARS_FAILURE",
    payload: error
});

const getCarCategory = () => {
    return dispatch => {

        API.getCarCategory()
            .then(res => {
                dispatch(getCarCategorySuccess(res.data));
            })
            .catch(err => {
                dispatch(getCarCategoryFailure(err.message));
            });
    };
};

const getCarCategorySuccess = newItem => ({
    type: "GET_CAR_CATEGORY_SUCCESS",
    payload: newItem
});

const getCarCategoryFailure = error => ({
    type: "GET_CAR_CATEGORY_FAILURE",
    payload: error
});

const getPoint = (payload) => {
    return dispatch => {
        dispatch(getPointStarted());

        geo.getCoordinates(payload)
            .then(res => {
                dispatch(getPointSuccess(res));
            })
            .catch(err => {
                dispatch(getPointFailure(err.message));
            });
    };
};

const getPointCity = (payload) => {
    return dispatch => {
        dispatch(getPointCityStarted());

        geo.getCoordinate(payload)
            .then(res => {
                dispatch(getPointCitySuccess(res));
            })
            .catch(err => {
                dispatch(getPointCityFailure(err.message));
            });
    };
};

const getGeolocationCity = (payload) => {
    return dispatch => {
        dispatch(getGeolocationCityStarted());

        geo.getGeoCity(payload)
            .then(res => {
                dispatch(getGeolocationCitySuccess(res));
            })
            .catch(err => {
                dispatch(getGeolocationCityFailure(err.message));
            });
    }
}

const getGeolocationCitySuccess = newItem => ({
    type: "GET_GEOLOCATION_CITY_SUCCESS",
    payload: newItem
});

const getGeolocationCityStarted = () => ({
    type: "GET_GEOLOCATION_CITY_STARTED"
});

const getGeolocationCityFailure = error => ({
    type: "GET_GEOLOCATION_CITY_FAILURE",
    payload: error
});

const getPointSuccess = newItem => ({
    type: "GET_POINT_SUCCESS",
    payload: newItem
});

const getPointStarted = () => ({
    type: "GET_POINT_STARTED"
});

const getPointFailure = error => ({
    type: "GET_POINT_FAILURE",
    payload: error
});

const getPointCitySuccess = newItem => ({
    type: "GET_POINT_CITY_SUCCESS",
    payload: newItem
});

const getPointCityStarted = () => ({
    type: "GET_POINT_CITY_STARTED"
});

const getPointCityFailure = error => ({
    type: "GET_POINT_CITY_FAILURE",
    payload: error
});

const getRate = () => {
    return dispatch => {
        dispatch(getRateStarted());

        API.getRate()
            .then(res => {
                dispatch(getRateSuccess(res.data));
            })
            .catch(err => {
                dispatch(getRateFailure(err.message));
            });
    };
};

const getRateSuccess = newItem => ({
    type: "GET_RATE_SUCCESS",
    payload: newItem
});

const getRateStarted = () => ({
    type: "GET_RATE_STARTED"
});

const getRateFailure = error => ({
    type: "GET_RATE_FAILURE",
    payload: error
});

const createOrder = (order) => {
    return dispatch => {
        dispatch(createOrderStarted());

        API.createOrder(order)
            .then(res => {
                dispatch(createOrderSuccess(res.data));
            })
            .catch(err => {
                dispatch(createOrderFailure(err.message));
            });
    };
};

const createOrderSuccess = newItem => ({
    type: "CREATE_ORDER_SUCCESS",
    payload: newItem
});

const createOrderStarted = () => ({
    type: "CREATE_ORDER_STARTED"
});

const createOrderFailure = error => ({
    type: "CREATE_ORDER_FAILURE",
    payload: error
});


export {
    updateOrder,
    updateActiveTab,
    updateAccessibleTab,
    getCitiesSuccess,
    getCitiesStarted,
    getCitiesFailure,
    getCities,
    getPikUpSuccess,
    getPikUpStarted,
    getPikUpFailure,
    getPickUp,
    getPointSuccess,
    getPointStarted,
    getPointFailure,
    getPoint,
    getGeolocationCity,
    getPointCity,
    getCars,
    getCarCategory,
    getRate,
    createOrder
};