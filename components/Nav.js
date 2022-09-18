//hooks
import Link from "next/link";

//components
import Image from "next/image"; //this allows lazy load


const Nav = () => {
  return ( 
    <nav>
      <div className="logo">
        <Image 
        src='/Nextjs-logo.svg.png' 
        alt='next-logo'
        width={128}
        height={76.7}
        />
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