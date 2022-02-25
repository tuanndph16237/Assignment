import axios from "axios";
class CategoryService {
    constructor(realtimeDb, accessToken) {
        this.collectionName = "categories.json";
        this.realtimeDb = realtimeDb;
        this.accessToken = accessToken;
    }
    insertCategory = async(id, entity) => {
        const response = await axios.post(
            this.realtimeDb + this.collectionName, entity
        );
        const insertedId = await response.data.name;

        return insertedId;
    };
    updateCategory = async(id, entity) => {
        const response = await axios.put(
            `${this.realtimeDB}${id}categories/${id}.json`, entity
        );
        return response.data;
    };
    findById = async(id, entity) => {
        `${this.realtimeDB}${id}categories/${id}.json`,
        entity

        return response.data;
    };
    findAllCategories = async(entity) => {
        const response = await axios.get(
            this.realtimeDb + this.collectionName
        );
        return response.data;
    };
    findAllCategories = async(entity) => {
        const response = await axios.get(
            this.realtimeDb + this.collectionName
        );
        return response.data;
    };
}
export default CategoryService;