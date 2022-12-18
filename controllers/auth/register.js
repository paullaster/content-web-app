const register = (req, res) =>{
    const {...other} = req.body;
    res.json(other);
};
export default register;