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
    const categoryIdCtrl = $("#categoryId");
    const nameCtrl = $("#name");
    CategoryService.findbyId.then(data => {
        const { name } = data;

        categoryIdCtrl.val(id);
        nameCtrl.val(name);
    })
    $("#update").on("click", () => {

        const cate = new Category(null, nameCtrl.val());
        try {
            CategoryService.updateCategory(categoryIdCtrl.val(), cate).then((data) => {
                console.log('category is updated');
            });
        } catch (error) {
            console.log(error);
        }

    });
});