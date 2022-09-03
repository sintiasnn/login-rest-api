const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

//connect to db
mongoose.connect(
    process.env.DB_CONNECT, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    },
    () => console.log("Connected to DB")
);


//Middleware
app.use(express.json());

//import routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

//Route middleware
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(5000, () => console.log('server up and running'));
