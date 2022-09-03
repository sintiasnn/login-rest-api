const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT1, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log("Connected to DB")
);


//Middleware
app.use(express.json());

//import routes
const authRoute = require('./routes/auth');

//Route middleware
app.use('/api/user', authRoute);

app.listen(5000, () => console.log('server up and running'));
