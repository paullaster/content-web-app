//dependencies
import JWT from "jsonwebtoken";
import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
dotenv.config ();

//Internal dependencies
import db from "../../utils/database.connection";

const login = (req, res) => {
  const { password, email } = req.body;

    const query = `SELECT `
};
export default login;
