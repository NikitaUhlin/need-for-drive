
const getImgPath = (path) => {
    let newPath
    if (path.indexOf('base64') >= 0)
        newPath = path
    else
        newPath = `https://api-factory.simbirsoft1.com${path}`
    return newPath
}
export default getImgPath
