const express = require('express');
const dotenv = require("dotenv")
const cors = require('cors');
const startAdminCreationConsumer = require('./consumer/messageConsumer.js');

dotenv.config()

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Notification service is up and running');
});

startAdminCreationConsumer();

app.listen(port, () => {
    console.log(`Notification service listening on port ${port}`);
});