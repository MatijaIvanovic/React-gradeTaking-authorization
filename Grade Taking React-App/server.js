// Load env variables
if (process.env.NODE_ENV != 'production'){
    require("dotenv").config();
}
//importing dependecies
const express = require('express');
const cors = require('cors');
const connectToDb = require("./config/connectToDb");
const gradesController = require('./controllers/gradesController');
const usersController = require('./controllers/usersController');
const cookieParser = require('cookie-parser');
const requireAuth = require('./middleware/requireAuth');
//Creat an express app
const app = express();

//COnfigure express app
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:true,
    credentials:true,
}));
//Connect to database;
connectToDb();

// Routing
app.post('/signup', usersController.signup);
app.post('/login', usersController.login);
app.get('/logout', usersController.logout);
app.get('/check-auth', requireAuth, usersController.checkAuth);
app.get('/grade', requireAuth, gradesController.fetchGrades);
app.get('/grade/:id', requireAuth, gradesController.fetchGrade);
app.post('/grade', requireAuth, gradesController.createGrade);
app.put('/grade/:id', requireAuth, gradesController.updateGrade);
app.delete('/grade/:id', requireAuth ,gradesController.deleteGrade);

//Start
app.listen(process.env.PORT);
