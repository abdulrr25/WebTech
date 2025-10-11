import { useEffect, useState } from "react";
import axios from "axios"; 

export default function DemoAxios() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setPosts([]);
      })

  }, []); 

  
  return (
    <div>
      <h1>Posts</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}> 
              <td>{post.id}</td>
              <td>{post.userId}</td>
              <td>{post.title}</td>
              <td>{post.body.substring(0, 100) + '...'}</td> 
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}