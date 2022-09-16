//hooks
import Link from "next/link";



const Nav = () => {
  return ( 
    <nav>
      <div className="logo">
        <h1>Next List App</h1>
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/allLists/'>
        <a>All Lists</a>
      </Link>
    </nav>
   );
};
 
export default Nav;