import React, { useState } from 'react';
import './index.css';
import AnnouncementBoard from './components/AnnouncementBoard';
import AddAnnouncementForm from './components/AddAnnouncementForm';

const App = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Company Meeting', content: 'Annual meeting on Friday.', category: 'Events', date: '2024-09-14', pinned: false, likes: 0, comments: [] },
    { id: 2, title: 'New Office Policy', content: 'Updated remote work policy.', category: 'HR', date: '2024-09-13', pinned: false, likes: 0, comments: [] },
    // Add more announcements as needed
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const likeAnnouncement = (id) => {
    setAnnouncements(announcements.map(announcement =>
      announcement.id === id ? { ...announcement, likes: announcement.likes + 1 } : announcement
    ));
  };

  const addAnnouncement = (newAnnouncement) => {
    setAnnouncements([...announcements, { ...newAnnouncement, id: announcements.length + 1, likes: 0, comments: [] }]);
  };

  const editAnnouncement = (id, updatedAnnouncement) => {
    setAnnouncements(announcements.map(announcement =>
      announcement.id === id ? { ...announcement, ...updatedAnnouncement } : announcement
    ));
  };

  const deleteAnnouncement = (id) => {
    setAnnouncements(announcements.filter(announcement => announcement.id !== id));
  };

  const togglePin = (id) => {
    setAnnouncements(announcements.map(announcement =>
      announcement.id === id ? { ...announcement, pinned: !announcement.pinned } : announcement
    ));
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesSearch = announcement.title.toLowerCase().includes(searchQuery) ||
      announcement.content.toLowerCase().includes(searchQuery);

    const matchesCategory = selectedCategory ? announcement.category === selectedCategory : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="App">
      <h1>Company News and Announcement Board</h1>
 <div className="top-search-bar">
  
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search announcements..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      {/* Category Filter */}
      <div className="category-filter">
        <select value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Events">Events</option>
          <option value="HR">HR</option>
          <option value="Updates">Updates</option>
          <option value="General">General</option>
        </select>
      </div>
 </div>

      {/* Add Announcement Form */}
      <AddAnnouncementForm addAnnouncement={addAnnouncement} />

      {/* Announcement Board */}
      <AnnouncementBoard
        announcements={filteredAnnouncements}
        addAnnouncement={addAnnouncement}
        editAnnouncement={editAnnouncement}
        deleteAnnouncement={deleteAnnouncement}
        togglePin={togglePin}
        likeAnnouncement={likeAnnouncement}
      />
    </div>
  );
};

export default App;
