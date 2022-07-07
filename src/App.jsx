import { Routes, Route } from "react-router-dom";

import { Homepage } from "./pages/Homepage";
import { About } from "./pages/Aboutpage";
import { Blogpage } from "./pages/Blogpage";
import { Singlepage } from "./pages/Singlepage";
import { Notfoundpage } from "./pages/Notfoundpage";

import { Layout } from "./components/Layout";
import "./index.css";
import { Createpost } from "./pages/Createpost";
import { Editpost } from "./pages/Editpost";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/posts" element={<Blogpage />}></Route>
          <Route path="/posts/:id/" element={<Singlepage />}></Route>
          <Route path="/posts/new" element={<Createpost></Createpost>}></Route>
          <Route path="/posts/:id/edit" element={<Editpost></Editpost>}></Route>
          <Route path="*" element={<Notfoundpage />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
