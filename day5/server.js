const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const UserRoutes = require('./routes/user.routes');
const BlogRoutes= require('./routes/blog.routes')
const cookieParser = require('cookie-parser');
require('dotenv').config({path: './config/.env'})
require('./config/db');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');
const cors = require('cors');


const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false
}
app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());

//routes
app.use('/api/user', UserRoutes)

app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});


//server listen
app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})


