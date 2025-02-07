import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/books`).then(res => setBooks(res.data));
    }, []);

    return (
        <div>
            <h2>Available Books</h2>
            <ul>
                {books.map(book => (
                    <li key={book.id}>
                        <img src={book.coverImageUrl} alt={book.title} width="100" />
                        <strong>{book.title}</strong> by {book.author}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
