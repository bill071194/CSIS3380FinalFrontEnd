import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookList from "./BookList";
import AddBook from "./AddBook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<BookList />} />
          <Route path="/create-book" element={<AddBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
