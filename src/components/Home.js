import { useState } from "react";
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
    // Filter out blog to be removed from blogs

    const newBlogs = blogs.filter((blog) => blog.id !== id);

    // Render new list of blogs after removing the blog deleted
    setBlogs(newBlogs);
  };

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
    </div>
  );
};

export default Home;
