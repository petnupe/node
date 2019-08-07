const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// nodeapi = nome da database a ser utilizada
mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true});
requireDir('./src/models');

// Rotas
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', require('./src/routes'));
app.listen(3001);