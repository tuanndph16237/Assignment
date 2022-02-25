import "regenerator-runtime/runtime";
import Category from "./models/Category";
import CategoryService from "./service/Categoryservice";
import FirebaseConstants from "./constant/FirebaseConstants";
import Urlhelper from "./helper/Urlhelper";


$(document).ready(function() {
    const categoryService = new CategoryService(
        FirebaseConstants.realtimeDB, "Token"
    );
    const url = location.href;
    const urlhelper = new Urlhelper();

    const id = urlhelper.readParam(url, 'id');
    categoryService.deleteCategory(id).then((data) => {
        location.href = "listCategories.html";
    });
});