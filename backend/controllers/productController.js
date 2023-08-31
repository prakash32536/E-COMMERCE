import formidable from "formidable";
import Product from '../models/productModels.js';
import fs from "fs";
import _ from "lodash";
import User from "../models/userModels.js";

//create ptoduct controler

const createProductController = async (req, res) => {
  try {
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "image could not be uploaded"
        })
      }
      let product = new Product(fields)
      if (files.photo) {
        if (files.photo.size > 1000000) {
          res.status(400).json({
            error: "File size should lessthen 10 mb"
          })
        }
        else {
          product.photo.data = fs.readFileSync(files.photo.filepath);
          product.photo.contentType = files.photo.mimetype;

          product.save();
          if (product) {
            res.status(200).json({
              _id: product._id,
              name: product.name,
              description: product.description,
              message: "Product successfully created"
            })
          }
        }
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export { createProductController };

// get all products api

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate('category');
    return res.status(200).json(products)
  } catch (error) {
    console.log("error", error)
    res.status(400).json({
      error: error
    })
  }
}

export { getProducts };

//get product photo by id

const getProductPhotoById = async (req, res) =>{
  try{
    const product = await Product.findById(req.params.productId)
    if(product){
      if(product.photo.data){
        res.set('Content-Type',product.photo.contentType)
        return res.send(product.photo.data)
      }else{
        res.status(400).json({
          message: "product photo is not available"
        })
      }
    }else{
      res.status(400).json({
        message: "product not available"
      })
    }
  }catch (error){
    console.log("error", error)
    res.status(400).json({
      message: "server error"
    })
  }
}

export {getProductPhotoById}

// get product by id

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId)
    if (product) {
      res.status(200).json({
        result: product
      })
    }
    else if (!product) {
      res.status(400).json({
        message: "product not found"
      })
    }
  } catch (error) {
    res.status(400).json({
      error: error
    })
  }
}

export { getProductById }

// update a product 

const updateProductById = async (req, res) => {
  try {
    let user = await User.findById(req.params.userId).select(["-password"])
    let product = await Product.findById(req.params.productId)
    let form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(400).json({
          error: "image could not be uploaded"
        })
      }
      const { name, description, price, shipping, category, quantity } = fields
      if (!name || !description || !price || !shipping || !category || !quantity) {
        res.status(400).json({
          messgae: "all fields are required"
        })
      }
      if (user.role !== 1) {
        res.status(400).json({
          message: "permission denied"
        })
      } else {
        //it updates the require data inside the product
        product = _.extend(product, fields)
      }

      if (files.photo) {
        if (files.photo.size > 1000000) {
          res.status(400).json({
            error: "File size should lessthen 10 mb"
          })
        }
        else {
          product.photo.data = fs.readFileSync(files.photo.filepath);
          product.photo.contentType = files.photo.mimetype;

          product.save();
          if (product) {
            res.status(200).json({
              _id: product._id,
              name: product.name,
              description: product.description,
              message: "Product successfully created"
            })
          }
        }
      } else {
        res.status(400).json({
          message: "Please upload the image"
        })
      }
    })

  } catch (error) {
    res.statsu(400).json({
      error: error
    })
  }
}

export { updateProductById } 