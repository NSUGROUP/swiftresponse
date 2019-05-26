const port = 42069;

const express = require('express');
const path = require('path');
const users = require('users.json');
const app = express();

app.use("/", express.static("build"));
app.use((req, res) => res.sendFile(path.resolve(__dirname, '../build/index.html')));

app.listen(port, () => {console.log("Listening on port " + port)});
