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
    if(Object.keys(body).length === 0){
        res.status(401).end();
        console.log("Am here");
    } else {
       let booksLength = books.length;
       console.log(booksLength);
       console.log(body);
       let id = booksLength + 1;
       let newBody = {id, ...body}
       books = books.concat(newBody);
       console.log(books);
       res.status(200).json(newBody);
    }

});

// delete a book 
app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter((book) => {
        return book.id !== id;
    });

    res.status(204).end();


});

// update info of a certain book
app.patch('/books/:id', (req,res) => {
    const body = req.body;
    const id = Number(req.params.id);
    let bookIndex = books.findIndex((book) => {
        return book.id === id
    });
    console.log(bookIndex);
    console.log(books[bookIndex]);
    books[bookIndex].title = body.title;
    books[bookIndex].author = body.author;
    books[bookIndex].publisher = body.publisher;
    console.log(books[bookIndex]);
    res.json(books[bookIndex]);
   
    });

const Port = 3001;
app.listen(Port, () => {
    console.log("Started server at port:", Port);
});