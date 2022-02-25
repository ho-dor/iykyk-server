const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 4000;
const routes = express.Router();

app.listen(PORT, () => {
    console.log("Listening...");
});