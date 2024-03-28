import React, { useState } from 'react';
import Post from './components/Post';
import CreatePostForm from './components/CreatePostForm';

function App() {
  const [posts, setPosts] = useState([]);

  const handlePostSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return(
    <div>
      <h1>Fakebook!</h1>
      
        {/* CreatePostForm */}
       <CreatePostForm onPostSubmit={handlePostSubmit} />
       <div>
        {posts.map((post, index) => (
          <Post key={index} content={post.content} title={post.title} />
        ))}
      </div>
      
    </div>
  );
}
export default App
