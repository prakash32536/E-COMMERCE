import Shipping from "../models/shippingModels.js"

const saveShippingController = async (req, res) => {
    try {
            const shipping = await Shipping.create(req.body)
            if (shipping) {
                res.status(200).json({
                    shipping: shipping
                })
            }
    }
    catch (error) {
        res.status(400).json({
            message: "error from backend",
            error: error
        })
    }
}

const getShippingController = async (req, res) =>{
    try{
      const shippingDetails = await Shipping.find({'userId': `${req.params.userId}`})
      if(shippingDetails){
        res.status(200).json({
            result: shippingDetails
        })
      }else{
        res.status(200).json({
            message: 'address is not available',
            result: []
        })
      }
    }catch ( error){
        res.status(400).json({
            message: "error from backend",
            error: error
        })
    }
}

export  {saveShippingController, getShippingController}