export const transformOrder = (item) => (
    {
        orderStatusId: '5e26a1f0099b810b946c5d8b',
        cityId: item.city,
        pointId: item.pickUp,
        carId: item.car,
        color: item.selectColor,
        dateFrom: new Date(item.startDate).getTime(),
        dateTo: new Date(item.endDate).getTime(),
        rateId: item.selectRate,
        price: item.price,
        isFullTank: item.additional.includes(1),
        isNeedChildChair: item.additional.includes(2),
        isRightWheel: item.additional.includes(3)
    }
)
