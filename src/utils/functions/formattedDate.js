export const formatDate = (date) => {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
    const month = date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()
    const year = date.getFullYear()
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()

    return `${day}.${month}.${year} ${hours}:${minutes}`
}
