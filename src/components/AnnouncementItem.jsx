import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faEdit, faTrash, faThumbtack } from '@fortawesome/free-solid-svg-icons';
import CommentSection from './CommentSection';

const AnnouncementItem = ({ announcement, editAnnouncement, deleteAnnouncement, togglePin, likeAnnouncement }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(announcement.content);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const saveEdit = () => {
    editAnnouncement(announcement.id, { content: editedContent });
    setIsEditing(false);
  };

  return (
    <div className="announcement-item">
      <h2>{announcement.title}</h2>
      <small>{announcement.category} - {announcement.date}</small>
      <p>{isEditing ? <textarea value={editedContent} onChange={(e) => setEditedContent(e.target.value)} /> : announcement.content}</p>
       
       <div className="buttons">
        
      {/* Like Button */}
      <button className="btn like-button" onClick={() => likeAnnouncement(announcement.id)}>
        <FontAwesomeIcon icon={faThumbsUp} /> Like ({announcement.likes})
      </button>

      {/* Pin Button */}
      <button className="btn pin-button" onClick={() => togglePin(announcement.id)}>
        <FontAwesomeIcon icon={faThumbtack} /> {announcement.pinned ? 'Unpin' : 'Pin'}
      </button>

      {/* Edit Button */}
      {isEditing ? (
        <button className="btn save-button" onClick={saveEdit}><FontAwesomeIcon icon={faEdit} /> Save</button>
      ) : (
        <button className="btn edit-button" onClick={handleEdit}><FontAwesomeIcon icon={faEdit} /> Edit</button>
      )}

      {/* Delete Button */}
      <button className="btn delete-button" onClick={() => deleteAnnouncement(announcement.id)}>
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>
       </div>
      
      <CommentSection announcement={announcement} />

      <style jsx>{`
        .announcement-item {
          border: 1px solid #ddd;
           margin: 10px;
          padding: 15px;
          background-color: #fff;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .announcement-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
        }

        h2 {
          margin-top: 0;
          color: #333;
        }

        small {
          display: block;
          margin-bottom: 10px;
          color: #666;
        }

        p {
          margin: 10px 0;
          color: #444;
        }

        textarea {
          width: 100%;
          height: 100px;
          border: 1px solid #ddd;
           padding: 8px;
        }

        .buttons{
          display: flex;
         }
        .btn {
           border: none;
          border-radius: 5px;
          padding: 10px;
          color: #31363F;
          cursor: pointer;
          font-size: 0.9rem;
          margin-right: 10px;
          transition: background-color 0.3s, transform 0.3s;
          
        }

        .btn:hover {
          transform: translateY(-2px);
        }

       

      
      `}</style>
    </div>
  );
};

export default AnnouncementItem;
