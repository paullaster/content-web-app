//DEPENDENCIES:
import datetime from 'node-datetime';
import * as dotenv from 'dotenv';

//Intantiating environment variables
dotenv.config ();

const passKey = process.env.MPESA_PASSKEY;
const shortCode = process.env.MPESA_SHORT_CODE;

const newPassword = () => {};
