//components
import Nav from "../components/Nav";
import Footer from "../components/Footer";



const Layout = ({children}) => {
  return ( 
    <div className="content">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
 
export default Layout;