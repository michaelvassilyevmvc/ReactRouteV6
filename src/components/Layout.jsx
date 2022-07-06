import { Outlet } from 'react-router-dom';
import { CustomLink } from './CustomLink';

const Layout = () => {

  
  return (
    <>
      <header>
        <CustomLink to="/"  >Home</CustomLink>
        <CustomLink to="/posts" >Blog</CustomLink>
        <CustomLink to="/about" >About</CustomLink>
      </header>
      <main className="container">
        <Outlet></Outlet>
      </main>
      <footer className='container'>{new Date().getFullYear()}</footer>
    </>
  )
}

export { Layout }