import API from "../services/apiService";

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

const getCitiesSuccess = newCities => ({
    type: "GET_CITIES_SUCCESS",
    payload: newCities
});

const getCitiesStarted = () => ({
    type: "GET_CITIES_STARTED"
});

const getCitiesFailure = error => ({
    type: "GET_CITIES_FAILURE",
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
};