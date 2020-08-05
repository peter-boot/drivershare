const express = require("express");
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 5000;

// route handlers
require('./routes/speakerRoutes')(app);


app.listen(5000, err => {
  console.log(`Listening on ${port}`);
});