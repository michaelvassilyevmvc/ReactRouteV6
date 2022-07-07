import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Singlepage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <div>
            <Link to={`/posts/${id}/edit`}>
              <h3>Edit</h3>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export { Singlepage };