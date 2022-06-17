import { Routes, Route, Link } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import { Notfoundpage } from "./pages/Notfoundpage";

function App() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/posts" element={<Blogpage></Blogpage>}></Route>
        <Route path="*" element={<Notfoundpage></Notfoundpage>}></Route>
      </Routes>
    </>
  );
}

export default App;
