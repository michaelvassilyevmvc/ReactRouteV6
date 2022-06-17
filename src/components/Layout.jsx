import { Outlet } from "react-router-dom";
import { CustomLink } from "./CutomLink";

// const setActive = ({ isActive }) => (isActive ? "active-link" : "");

const Layout = () => {
  return (
    <>
      <header>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/posts">Blog</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </header>
      <main className="container">
        <Outlet></Outlet>
      </main>
      <footer className="container">2021</footer>
    </>
  );
};

export { Layout };
