import User from "../models/userModels.js";
import braintree from 'braintree';
import dotenv from 'dotenv'

dotenv.config()

const gateway = new braintree.BraintreeGateway({
    environment: braintree.Environment.Sandbox,
    marchantId : process.env.BRAINTREE_MARCHAND_ID,
    publicKey : process.env.BRAINTREE_PUBLIC_KEY,
    privateKey : process.env.BRAINTREE_PRIVATE_KEY
})

const generatePaymentToken = async (req, res) => {
    console.log('payment integration started')
}

export { generatePaymentToken }