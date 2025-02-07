const express = require('express');
const Book = require('../models/Book');
const router = express.Router();

router.get('/', async (req, res) => {
    const books = await Book.findAll();
    res.json(books);
});

router.post('/', async (req, res) => {
    const { title, author, coverImageUrl } = req.body;
    const book = await Book.create({ title, author, coverImageUrl });
    res.json(book);
});

module.exports = router;
