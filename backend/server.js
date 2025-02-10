require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/books');
const uploadRoute = require('./routes/upload');
const { sequelize } = require('./config/database');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/books', bookRoutes);
app.use('/api/upload', uploadRoute);

const PORT = process.env.PORT || 5000;
sequelize.sync().then(() => {
    console.log('Database connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.log('Error connecting to database:', err));
const cors = require("cors");
app.use(cors({ origin: "*" })); // Allow frontend to call backend
