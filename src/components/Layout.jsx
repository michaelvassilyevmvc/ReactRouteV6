import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>
      <main className="container">
        <Outlet></Outlet>
      </main>
      <footer className='container'>{new Date().getFullYear()}</footer>
    </>
  )
}

export { Layout }