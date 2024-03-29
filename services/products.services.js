const { product } = require("../models/products.model");


async function createProduct(params, callback) {
    if (!params.productName) {
        return callback(
            {
                message: "Product Name Required"
            },
            ""
        )
    }
    const productModel = product(params)
    productModel.save().then((response) => {
        return callback(null, response)
    }).catch((error) => {
        return callback(error)
    })
}
async function getProducts(params, callback) {
 
    const productName = params.productName
    var condition = productName ? {
        productName: { $regex: newRegExp(productName), $option: "i" }
    }: {}
    product.find().then((response) => {
        return callback(null, response)
    }).catch((error) => {
        return callback(error)
    })
}
async function getProductById(params, callback) {
    const productId = params.productId
    
    product
    .findById(productId).then((response) => {
        if(!response) callback("Product Id is invalid")
        else return callback(null, response)
    }).catch((error) => {
        return callback(error)
    })
}

async function updateProduct(params, callback) {
    const productId = params.productId
    
    product
    .findByIdAndUpdate(productId, params, {useFindAndModify: false}).then((response) => {
        if(!response) callback("Product Id is invalid")
        else return callback(null, response)
    }).catch((error) => {
        return callback(error)
    })
}

async function deleteProduct(params, callback) {
    const productId = params.productId
    
    product
    .findByIdAndRemove(productId).then((response) => {
        if(!response) callback("Product Id is invalid")
        else return callback(null, response)
    }).catch((error) => {
        return callback(error)
    })
}


module.exports = {
     createProduct,
     getProducts,
     getProductById,
     updateProduct,
     deleteProduct,
}