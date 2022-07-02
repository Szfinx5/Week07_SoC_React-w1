function BlogPost({ blog }) {
  //console.log(blog);
  return (
    <div className="BlogPost">
      <h1>{blog.title}</h1>
      <h2>by {blog.author}</h2>
      <p>{blog.datePosted}</p>
      <p>
        <img src={blog.imageSrc} alt={blog.imageAlt}></img>
      </p>
      <p>{blog.content}</p>
    </div>
  );
}

export default BlogPost;
