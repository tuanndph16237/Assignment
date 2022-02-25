import "regenerator-runtime/runtime";
import Category from "./models/Category";
import CategoryService from "./service/Categoryservice";
import FirebaseConstants from "./constant/FirebaseConstants";

$(document).ready(function() {
    $("#save").on("click", () => {
        const categoryIdCtrl = S("#categoryId");
        const name = $("#name").val();

        const cate = new Category(null, name);

        const categoryService = new CategoryService(
            "https://ecma-9ee8e-default-rtdb.firebaseio.com/", "Token"
        );
        try {
            CategoryService.insertCategory(cate).then((data) => {
                categoryIdCtrl.val(data);
            });
        } catch (error) {
            console.log(error);
        }

        console.log(cate);

        console.log("save click");
    });
});