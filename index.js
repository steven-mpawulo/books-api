const express = require('express');
const app = express();
app.use(express.json());

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
// return all books
app.get('/books', (req, res) => {
    res.json(books);
});

// return only a single book
app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log(id);
    const book = books.find((book)=> {
        return book.id === id;
    });
    console.log(book);
    if (book){
        res.json(book);
    } else {
        res.status(204).end();
    }    
});

// add a new book
app.post('/books', (req, res) => {
    const body = req.body;
    if(body !== null){
        const booksLength = books.length;
        let id = booksLength + 1;
        console.log(body);
        newBody = {...body, id};
        books = {...books, ...newBody};
        console.log(books);
        res.status(201).send(newBody);
    } else {
        res.status(403);
    }

});

const Port = 3001;
app.listen(Port, () => {
    console.log("Started server at port:", Port);
});