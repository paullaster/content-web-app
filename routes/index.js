import {Router} from 'express';


Router.get( '', (req, res) => {
    res.send ("This is from Router")
});

export default Router;