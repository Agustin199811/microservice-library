import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import BooksComponents from "./Components/BooksComponents";
import MembersComponent from "./Components/MembersComponent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<BooksComponents />}></Route>
            <Route path="/library/books" element={<BooksComponents />}></Route>
            <Route
              path="/library/members"
              element={<MembersComponent />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
