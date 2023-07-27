const express = require('express');
const app = express();

let books = [
    {
        id: 1,
        title: "Forgiven",
        author: "Ali",
        publisher: "Stain Ltd"
    },
    {
        id: 2,
        title: "War",
        author: "Zack",
        publisher: "CRE Ltd"
    },
    {
        id: 3,
        title: "Happiness",
        author: "Steve",
        publisher: "Mock Ltd"
    },
    {
        id: 4,
        title: "Earth",
        author: "Smith",
        publisher: "Stain Ltd"
    },
    {
        id: 5,
        title: "Beyond",
        author: "Henry",
        publisher: "DR Ltd"
    },
];

app.get('/', (req, res) => {
    res.send('Hello world')
});

const Port = 3001;
app.listen(Port, () => {
    console.log("Started server at port:", Port);
});