const updateOrder = (order) => {
    return {
        type: "UPDATE_ORDER",
        payload: order
    };
};

export {
    updateOrder
};