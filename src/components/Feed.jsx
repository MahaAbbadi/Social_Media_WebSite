import React from 'react';

function Feed({ posts }) {
  return (
    <div>
      <h2>Feed</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post, index) => (
            <tr key={index}>
              <td>{post.title}</td>
              <td>{post.content}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Feed;
