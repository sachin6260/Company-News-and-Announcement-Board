import React, { useState } from 'react';

const CommentSection = ({ announcement }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(announcement.comments || []);

  const addComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <div className="comment-section">
      <h4>Comments</h4>
      <div className="comments-list">
        {comments.map((cmt, index) => (
          <p key={index} className="comment">{cmt}</p>
        ))}
      </div>
      <div className="comment-input">
        <input 
          type="text" 
          value={comment} 
          onChange={(e) => setComment(e.target.value)} 
          placeholder="Add a comment" 
          className="input-field"
        />
        <button onClick={addComment} className="post-button">Post</button>
      </div>
      <style jsx>{`
        .comment-section {
          margin-top: 20px;
          padding: 10px;
          border-top: 1px solid #ddd;
          background-color: #f9f9f9;
        }

        h4 {
          margin-top: 0;
          color: #333;
        }

        .comments-list {
          margin-bottom: 10px;
        }

        .comment {
          background-color: #fff;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 5px;
        }

        .comment-input {
          display: flex;
          flex-direction: column;
        }

        .input-field {
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          margin-bottom: 10px;
        }

        .post-button {
          background-color: #76ABAE;
          border: none;
           color: white;
          padding: 10px;
          cursor: pointer;
          font-size: 0.9rem;
          transition: background-color 0.3s, transform 0.3s;
        }

        .post-button:hover {
          background-color: #7ccbd0;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default CommentSection;
