import timeStamp from "../../../utils/timestamp";
const lipaNaMpesaOnline = ( req, res) => {
    const token = req.accessToken;
    const auth = 'Basic ' + token;
    const timestamp = timeStamp ();
    res.json ({token, auth, timestamp});
};
export default lipaNaMpesaOnline;