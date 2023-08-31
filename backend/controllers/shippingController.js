import Shipping from "../models/shippingModel"

const shippingController = async (req, res) => {
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
            message: "error from detabase",
            error: error
        })
    }
}

export  {shippingController}