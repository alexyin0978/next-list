//hooks
import Link from "next/link";



const NotFound = () => {
  return (  
    <div className="not-found">
      <h1>Oooops...</h1>
      <h1>The page cannot be found.</h1>
      <p>Go back to
        <Link href='/'>
          <a> Homepage</a>
        </Link>
      </p>
    </div>
  );
}
 
export default NotFound;