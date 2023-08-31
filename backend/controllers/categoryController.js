import Category from "../models/categoryModels.js";
import User from "../models/userModels.js";
import _ from "lodash";

const categoryController = async (req, res) => {
    try {
        const { name } = req.body
        const categoryExist = await Category.findOne({ name })
        if (categoryExist) {
            console.log("exist")
            res.status(400).json({
                message: "category already exists"
            })
        }
        else if (!categoryExist) {
            const category = await Category.create(req.body)
            if (category) {
                res.status(200).json({
                    category: category
                })
            }
        }
    }
    catch (error) {
        res.status(400).json({
            message: "error from detabase",
            error: error
        })
    }
}

// get all category api

const getCategory = async (req, res) => {
    try {
        let match = {};
        if(req.query.category){
            match.category = parseInt(req.qurey.category)
        }
        const category = await Category.aggregate([ { $match : match}])
        return res.status(200).json(category)
    } catch (error) {
        res.status(400).json({
            error: error
        })
    }
}

// update category by id

const updateCategoryById = async (req, res) => {
    let user = await User.findById(req.params.userId).select(["-password"])
    let category = await Category.findById(req.params.categoryId)
    const from = req.body;
    const { name } = from;

    if (user.role === 1) {
        if (!name) {
            res.status(400).json({
                message: "all fields are required "
            })
        } else {
            category = _.extend(category, from)
            category.save();
            if (category) {
                res.status(200).json({
                    _id: category._id,
                    name: category.name,
                    message: "category successfully Updated"
                })
            }
        }
    } else{
        res.status(400).json({
            message: "permission denied"
        })
    }

}

export { categoryController, getCategory, updateCategoryById }