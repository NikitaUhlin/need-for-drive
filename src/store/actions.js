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

export {
    updateOrder,
    updateActiveTab,
    updateAccessibleTab
};