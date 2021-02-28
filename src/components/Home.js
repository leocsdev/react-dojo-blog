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

  const [name, setName] = useState("Mario");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  useEffect(() => {
    console.log("Use effect ran.");
    console.log(name);
  }, [name]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <button onClick={() => setName("Luigi")}>change name</button>
      <p>{name}</p>
    </div>
  );
};

export default Home;
