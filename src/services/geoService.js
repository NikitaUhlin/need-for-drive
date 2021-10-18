import axios from "axios";

class GeoService {
    constructor() {
        this.geo = axios.create({
            baseURL: "https://geocode-maps.yandex.ru/1.x/",
        });
    }

    getCoordinates(points) {
        const item = points.map((item) => this.getCoordinate(item.address))
        return Promise.all(item).then((values) => {
            const result = []
            values.map((item) => {
                points.map((point) => {
                    if (item.data.response.GeoObjectCollection.metaDataProperty.GeocoderResponseMetaData.request === point.address) {
                        const coord = item.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ')
                        result.push({
                            id: point.id,
                            coordinates: [parseFloat(coord[1]), parseFloat(coord[0])]
                        })
                    }
                })

            })
            return result
        })
    }

    getCoordinate(point) {
        return this.geo.get('', {
            params: {
                format: 'json',
                geocode: point,
                apikey: 'c2eeaac1-3b6e-4464-aa91-033699da3b02'
            }
        })
    }
}

const geo = new GeoService();
export default geo;