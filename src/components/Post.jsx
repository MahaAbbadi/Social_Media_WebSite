import React, { useState } from 'react';
import Comment from './Comment';
import ManageComments from './ManageComments';
import './post.css';

function Post(props) {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([
        "This is a test comment!",
        "This is another test comment!",
    ]);
    const [newComment, setNewComment] = useState('');

    function handleLike() {
        setLikes(likes + 1);
    }

    const addComment = (e) => {
        e.preventDefault();
        if (!newComment) return;
        setComments([...comments, newComment]);
        setNewComment('');
    };

    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <p>Likes: {likes}</p>
            <button onClick={handleLike}>Like</button>

            <ManageComments comments={comments} />

            <form onSubmit={addComment}>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
                <button type="submit">Comment</button>
            </form>
        </div>
    );
}

export default Post;