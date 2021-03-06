const express = require('express');
const mongoose = require('mongoose');
//const bodyParser = require('body-parser');
const path = require('path');
const config = require('config');

const itemsRoutes = require('./routes/api/items');
const usersRoutes = require('./routes/api/users');
const authRoutes = require('./routes/api/auth');

//inicializamos express
const app = express();

//Bodyparser Middleware
app.use(express.json());

//DB Config
const db = config.get('mongoURI');

//Connect to Mongo
mongoose.connect(db, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Use Routes
app.use('/api/items', itemsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/auth', authRoutes);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));