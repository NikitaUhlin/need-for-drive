const isEmptyObj = (obj) => {
    for (let i in obj) {
        if (!!obj[i]) {
            return false
        }
    }
    return true;
}

export default isEmptyObj