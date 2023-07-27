const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<p></p>')
});

const Port = 3001;
app.listen(Port, () => {
    console.log("Started server at port:", Port);
});