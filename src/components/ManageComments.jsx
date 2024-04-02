import React from 'react';
import Comment from './Comment';

function ManageComments({ comments }) {
  return (
    <div>
      <h3>Comments</h3>
      {comments.map((comment, index) => (
        <Comment key={index} content={comment} />
      ))}
    </div>
  );
}

export default ManageComments;    