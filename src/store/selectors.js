export const order = state => state.order

export const city = state => order(state).city

export const cities = state => state.cities

export const pickUp = state => order(state).pickUp

export const activeTab = state => state.activeTab

export const accessibleTab = state => state.accessibleTab