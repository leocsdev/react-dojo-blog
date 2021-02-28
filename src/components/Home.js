import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "Lorem ipsum...",
      author: "mario",
      id: 1,
    },
    {
      title: "Welcome Party!",
      body: "Lorem ipsum...",
      author: "luigi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "Lorem ipsum...",
      author: "princess",
      id: 3,
    },
    {
      title: "Web dev top tips",
      body: "Lorem ipsum...",
      author: "mario",
      id: 4,
    },
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // run a function everytime there's a re-render (happens in initial reload or theres update in the state )
  useEffect(() => {
    console.log("Use effect ran.");
  });

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
