import React from 'react';
import AnnouncementItem from './AnnouncementItem';

const AnnouncementBoard = ({ announcements, editAnnouncement, deleteAnnouncement, togglePin, likeAnnouncement }) => {
  return (
    <div className="announcement-board">
      {announcements.map((announcement) => (
        <AnnouncementItem
          key={announcement.id}
          announcement={announcement}
          editAnnouncement={editAnnouncement}
          deleteAnnouncement={deleteAnnouncement}
          togglePin={togglePin}
          likeAnnouncement={likeAnnouncement}
        />
      ))}
      <style jsx>{`
        .announcement-board {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          padding: 20px;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBoard;
