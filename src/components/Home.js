import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  // run json-server to watch db.json in port 8000
  // npx json-server --watch data/db.json --port 8000

  // set initial data from blogs to null
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    // Get blogs from data/db.json
    fetch("http://localhost:8000/blogs")
      // convert to json
      .then((res) => {
        return res.json();
      })
      // set data to blogs state
      .then((data) => {
        setBlogs(data);
      });

    // this only runs once since the second arg of useEffect is []
  }, []);

  return (
    <div className="home">
      {
        // since fetch is returning a promise, it needs time to load the blog. Only output the BlogList component when fetch is done loading the blogs, otherwise an error will occur since the initial value of blogs is null.

        // Conditional Templating
        // This will evaluate the left side of && if true,
        // once left side is true, it will execute the statements in its right side.
        blogs && <BlogList blogs={blogs} title="All Blogs" />
      }
    </div>
  );
};

export default Home;
