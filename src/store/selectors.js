export const order = state => state.order

export const city = state => order(state).city

export const cities = state => state.cities

export const pickUps = state => state.pickUps

export const pickUp = state => order(state).pickUp

export const points = state => state.points

export const geolocationCity = state => state.geolocationCity

export const activeTab = state => state.activeTab

export const accessibleTab = state => state.accessibleTab