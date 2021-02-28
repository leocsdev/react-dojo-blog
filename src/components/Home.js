import { useState } from "react";

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
      {
        // Loop through blogs
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>

            <p>Written by: {blog.author}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Home;
