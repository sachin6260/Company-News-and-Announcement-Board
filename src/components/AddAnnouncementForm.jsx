// src/components/AddAnnouncementForm.jsx
import React, { useState } from 'react';

const AddAnnouncementForm = ({ addAnnouncement }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && content && category) {
      const newAnnouncement = {
        title,
        content,
        category,
        date: new Date().toISOString().split('T')[0], // Current date
        pinned: false,
      };

      addAnnouncement(newAnnouncement);

      // Clear the form fields
      setTitle('');
      setContent('');
      setCategory('');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="add-announcement-form">
      <h2>Add New Announcement</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Select Category</option>
            <option value="Events">Events</option>
            <option value="HR">HR</option>
            <option value="Updates">Updates</option>
            <option value="General">General</option>
          </select>
        </div>
        <button type="submit">Add Announcement</button>
      </form>
    </div>
  );
};

export default AddAnnouncementForm;
