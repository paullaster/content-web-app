const paymentApiCallBack = ( req, res) => {
    const callBackResultDescription = req.body.Body.stkCallback.ResultDesc;
    const callBackMetaData = req.body.Body.stkCallback.CallbackMetadata;
    if (!callBackMetaData) {
        res.status(404).json({})
    };
};
export default paymentApiCallBack;