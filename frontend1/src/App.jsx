import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddBook from "./pages/AddBook";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="container">
                <h1>📚 BookCircle</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/add">Add Book</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<AddBook />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
