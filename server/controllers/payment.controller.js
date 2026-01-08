const getRazorpayApiKey = (req, res, next) => {

    res.status(200).json({
        success:true,
        message:'Razorpay API Key',
        key: ProcessingInstruction.env.RAZORPAY_KEY_ID
    })
}

const buySubscription = (req, res, next) => {}

const verifySubscription = (req, res, next) => {}

const cancelSubscription = (req, res, next) => {}

const allPayments = (req, res, next) => {}

export {getRazorpayApiKey, buySubscription, verifySubscription, cancelSubscription, allPayments}