//DEPENDENCIES:
const datetime = require ('node-datetime');
const dotenv = require ('dotenv');

//Intantiating environment variables
dotenv.config ();

const passKey = process.env.MPESA_PASSKEY;
const shortCode = process.env.MPESA_SHORT_CODE;

const newPassword = () => {
    const dt = datetime.create();
    const formattedDate = dt.format('YYYYMMDDHHmmss');

    const passswordString = `${shortCode}${passKey}${formattedDate}`;
    const base64EncodedPasswordString = Buffer.from(passswordString).toString('base64');
    return base64EncodedPasswordString;
};

module.exports = newPassword;
