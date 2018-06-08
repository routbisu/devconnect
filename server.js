const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();

// DB Config
const db = require('./config/key').mongoURI;

// Connect to MongoDB
mongoose.connect(db).then(() => console.log('Mongo DB connected!'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.json({ message: 'Welcome to DevConnect API' }));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000;


app.listen(port, () => { console.log(`Server running on port ${port}`); });