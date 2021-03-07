const User = require('../models/user.model');

module.exports = {
    async index (req, res) {
        res.json(await User.find());
    },
    async create (req, res) {
        const {name} = req.body;

        let user = await User.findOne({name});
        if(!user){
            res.json(await User.create({name}));
        } else {
            return res.status(500).json(user);
        }
    }
}