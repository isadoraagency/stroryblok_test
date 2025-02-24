import {Outlet} from 'react-router-dom';
// import '../assets/styles/main.scss';
// import Header from "./Header";
// import Footer from "./Footer";

const Layout = () => {

  return (
    <>
      {/*{ !isHomePage && <Header></Header> }*/}
      <main>
        <Outlet />
      </main>
      {/*<Footer></Footer>*/}
    </>
  );
};

export default Layout;
