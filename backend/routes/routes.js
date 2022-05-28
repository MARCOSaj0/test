const route = require('express').Router();
const user_cont = require('../controller/controller');
const {body, validationResult} = require('express-validator');

route.post('/createUser',
    body('email').isEmail(),
    body('mob_no').isNumeric().isLength(10),
    body('desc').isLength({max: 300}),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
    user_cont.cre_user 
);

route.get('/getAllUser', user_cont.get_list );

module.exports = route;