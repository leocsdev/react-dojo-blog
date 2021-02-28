import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // run json-server to watch db.json in port 8000
  // npx json-server --watch data/db.json --port 8000
  const [blogs, setBlogs] = useState(null);

  // Loading message set to true
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);

          // once fetching is done, set isPending to false
          setIsPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="home">
      {
        // Show loading message while fetching
        isPending && <div>Loading...</div>
      }
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
