const port = 42069;

const express = require('express');
const app = express();

app.use(express.static("build"));

app.listen(port, () => {console.log("Listening on port " + port)});
