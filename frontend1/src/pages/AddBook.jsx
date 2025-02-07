import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function AddBook() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [coverImage, setCoverImage] = useState(null);
    const navigate = useNavigate();

    const handleFileChange = (e) => {
        setCoverImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let coverImageUrl = "";
        if (coverImage) {
            const formData = new FormData();
            formData.append("file", coverImage);

            const uploadResponse = await axios.post(`${API_URL}/upload`, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            coverImageUrl = uploadResponse.data.url;
        }

        await axios.post(`${API_URL}/books`, { title, author, coverImageUrl });
        navigate("/");
    };

    return (
        <div>
            <h2>📝 Add a New Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Author</label>
                    <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label className="form-label">Cover Image</label>
                    <input type="file" className="form-control" onChange={handleFileChange} />
                </div>
                <button type="submit" className="btn btn-success">Upload Book</button>
            </form>
        </div>
    );
}

export default AddBook;
