export const order = state => state.order

export const city = state => order(state).city

export const cities = state => state.cities

export const pickUps = state => state.pickUps

export const cars = state => state.cars

export const pickUp = state => order(state).pickUp

export const car = state => order(state).car

export const selectColor = state => order(state).selectColor

export const selectRate = state => order(state).selectRate

export const startDate = state => order(state).startDate

export const endDate = state => order(state).endDate

export const additional = state => order(state).additional

export const points = state => state.points

export const rate = state => state.rate

export const carCategory = state => state.carCategory

export const pointCity = state => state.pointCity

export const geolocationCity = state => state.geolocationCity

export const loading = state => state.loading

export const activeTab = state => state.activeTab

export const accessibleTab = state => state.accessibleTab

export const orderId = state => state.orderId