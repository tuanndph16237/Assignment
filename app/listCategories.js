import "regenerator-runtime/runtime";
import Category from "./models/Category";
import CategoryService from "./service/Categoryservice";
import FirebaseConstants from "./constant/FirebaseConstants";

$(document).ready(function() {


    const categoryService = new CategoryService(
        FirebaseConstants.realtimeDB, "Token"
    );
    try {
        const placeholder = $("#placeholder");
        categoryService.findAllCategories(cate).then((data) => {
            console.log(data);
            let list = ''
            for (const key in data) {
                const element = data[key];
                const { name } = element


                list = `
                <tr>
                <td>${key}</td>
                <td>${name}</td>
                <td>
                <a href='editCategory.html?id=${key}'>
                <i class="fa fa-pencil" aria-hidden="true"></i>Edit</a>
                <a href='deleteCategory.html?id=${key}'>
                <i class="fa fa-trash" aria-hidden="true"></i>Delete</a>
                </td>
                </tr>
                `;
            }
            placeholder.append(list);
        });
    } catch (error) {
        console.log(error);
    }

});