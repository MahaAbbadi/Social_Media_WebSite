import React, { useState } from 'react';


function CreatePostForm({ onPostSubmit }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  let handleNewSubmission = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    onPostSubmit({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleNewSubmission}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={handleContentChange}
      />
      <button type="submit">Create Post</button>
    </form>
  );
}

export default CreatePostForm;

