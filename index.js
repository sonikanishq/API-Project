const express = require("express");

//Database
const database = require("./database");

//Initialise express
const booky =  express();

/*
Route         /
Description   Get all the books
Access        PUBLIC
Parameter     NONE
Method        GET
*/
booky.get("/",(req,res) => {
    return res.json({books: database.books});
});

/*
Route         /is
Description   Get specific book on ISBN
Access        PUBLIC
Parameter     isbn
Method        GET
*/

booky.get("/is/:isbn",(req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if(getSpecificBook.length === 0) {
        return res.json({error: `No book found for the ISBN of ${req.params.isbn}`})
    }

    return res.json({book: getSpecificBook});
});

/*
Route         /c
Description   Get specific book on category
Access        PUBLIC
Parameter     category
Method        GET
*/

booky.get("/c/:category", (req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    )

    if(getSpecificBook.length ===0) {
        return res.json({error: `No book found for the catefgory of ${req.params.category}`})
    }

    return res.json({book: getSpecificBook});
});

/*
Route         /ln
Description   Get specific book on language
Access        PUBLIC
Parameter     language
Method        GET
*/

booky.get("/ln/:Language",(req,res) => {
    const getSpecificBook = database.books.filter(
        (book) => book.language === req.params.Language
    );

    if(getSpecificBook.length === 0) {
        return res.json({error: `No book found for the Language of ${req.params.Language}`})
    }

    return res.json({book: getSpecificBook});
});

/*
Route         /author
Description   Get book on author
Access        PUBLIC
Parameter     NONE
Method        GET
*/

booky.get("/author", (req,res) => {
    return res.json({authors: database.author});
});

/*
Route         /author/book
Description   Get specific book on authors book
Access        PUBLIC
Parameter     isbn
Method        GET
*/

booky.get("/author/book/:isbn", (req,res) => {
    const getSpecificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.isbn)
    );

    if(getSpecificAuthor.length===0){
        return res.json({error: `No author found for the book of ${req.params.isbn}`})};

    return res.json({author: getSpecificAuthor});
    
});

/*
Route         /author
Description   Get specific book on authors ID
Access        PUBLIC
Parameter     II
Method        GET
*/

booky.get("/author/:ID",(req,res) => {
    const getSpecificAuthor = database.author.filter(
        (author) => author.id === parseInt(req.params.ID)
    );

    if(getSpecificAuthor.length === 0) {
        return res.json({error: `No book found for the ID of ${req.params.ID}`})
    }

    return res.json({author: getSpecificAuthor});
});

/*
Route         /publications
Description   Get book on publication
Access        PUBLIC
Parameter     NONE
Method        GET
*/

booky.get("/publications",(req,res) => {
    return res.json({publication: database.publication});
});

/*
Route         /publications/book
Description   Get specific book on authors book
Access        PUBLIC
Parameter     isbn
Method        GET
*/

booky.get("/publications/book/:isbn", (req,res) => {
    const getSpecificPublication = database.publication.filter(
        (publication) => publication.books.includes(req.params.isbn)
    );

    if(getSpecificPublication.length===0){
        return res.json({error: `No publication found for the book of ${req.params.isbn}`})};

    return res.json({author: getSpecificPublication});
    
});

/*
Route         /publications
Description   Get specific book on authors ID
Access        PUBLIC
Parameter     ID
Method        GET
*/

booky.get("/publications/:ID",(req,res) => {
    const getSpecificPublication = database.publication.filter(
        (publication) => publication.id === parseInt(req.params.ID)
    );

    if(getSpecificPublication.length === 0) {
        return res.json({error: `No book found for the ID of ${req.params.ID}`})
    }

    return res.json({author: getSpecificPublication});
});

booky.listen(3000, () => {
    console.log("Server is up and running");
});
