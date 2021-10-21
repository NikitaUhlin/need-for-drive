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
};