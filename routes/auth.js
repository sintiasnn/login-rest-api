const router = require('express').Router();
const User = require('../model/User');
const bcrypt = require("bcryptjs");
const Joi = require("@hapi/joi");

router.post("/register", async (req, res) => {
});

router.post("/login", async (req, res) => {
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
  
    const user = await User.findOne({ email: req.body.email });
  
    if (!user) return res.status(400).send("Email or password is wrong");
  
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Email or password is wrong");
  
    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header("auth-token", token).send(token);
});

module.exports = router;