import axios from "axios";

class ApiService {
    constructor() {
        this.api = axios.create({
            baseURL: "https://api-factory.simbirsoft1.com/api/db/",
            headers: { "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b" },
        });
    }

    get(url) {
        return this.api.get(url)
    }

    getCities() {
        return this.get("city");
    }
}

const API = new ApiService();
export default API;