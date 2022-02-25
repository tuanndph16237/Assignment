import axios from "axios";
class ProductService {
    constructor(realtimeDb, accessToken) {
        this.collectionName = "products.json";
        this.realtimeDb = realtimeDb;
        this.accessToken = accessToken;
    }
    insertProduct = async(entity) => {
        const response = await axios.post(
            this.realtimeDb + this.collectionName, entity
        );
        const insertedId = await response.data.name;

        return insertedId;
    };
    updateProduct = async(id, entity) => {
        const response = await axios.put(
            `${this.realtimeDB}products/${id}.json`, entity
        );
        return response.data;
    };
    deleteProduct = async(id) => {
        const response = await axios.delete(
            `${this.realtimeDB}products/${id}.json`,
        );
        return response.data;
    };
    findById = async(id) => {
        `${this.realtimeDB}${id}products/${id}.json`

        return response.data;
    };
    findAllProducts = async(entity) => {
        const response = await axios.get(
            this.realtimeDb + this.collectionName
        );
        return response.data;
    };
}
export default ProductService;