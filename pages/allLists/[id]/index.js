//在build-time先知道有幾個path要產生
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  const paths = users.map(user => ({
    params: {
      id: user.id.toString(),
    },
  }));

  return {
    paths: paths, //[{params: {id}}, {params: {id}}, ...]
    fallback: false,
  };
};

//在build-time, 根據產生的path來預先產生index.html
//如此也可避免進入沒有index.html的[id] page
export const getStaticProps = async (context) => {
  
  const { id } = await context.params;

  //根據pre-build的path來pre-fetch
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      list: user,
    },
  };
};

const DetailPage = ({ list }) => {
  return (
    <div>
      <h1>{list.name}</h1>
      <p>{list.email}</p>
      <p>{list.website}</p>
      <p>{list.address.city}</p>
    </div>
  );
};
 
export default DetailPage;