// receive the blogs props from parent component (Home)
const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {
        // Loop through blogs
        blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
          </div>
        ))
      }
    </div>
  );
};

export default BlogList;
