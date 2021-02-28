import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My New Website",
      body: "Lorem ipsum...",
      author: " mario",
      id: 1,
    },
    {
      title: "Welcome Party!",
      body: "Lorem ipsum...",
      author: " luigi",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "Lorem ipsum...",
      author: " princess",
      id: 3,
    },
  ]);

  return (
    <div className="home">
      {/* Set property names (props, title), and send it to BlogList component */}
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
