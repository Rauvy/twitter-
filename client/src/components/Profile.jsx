import React from 'react'
import '../../public/styles/profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Header */}
      <div className="profile-header">
        <div className="cover-photo"></div>
        <div className="profile-info">
          <div className="profile-picture"></div>
          <div className="profile-details">
            <h2 className="profile-name">John Doe</h2>
            <p className="profile-handle">@johndoe</p>
            <p className="profile-bio">Web Developer | Tech Enthusiast | Coffee Lover ☕</p>
            <div className="profile-stats">
              <span><strong>500</strong> Following</span>
              <span><strong>1.2K</strong> Followers</span>
            </div>
          </div>
        </div>
        <button className="edit-profile-button">Edit Profile</button>
      </div>

      {/* Navigation Tabs */}
      <div className="profile-tabs">
        <button className="tab active">Tweets</button>
        <button className="tab">Replies</button>
        <button className="tab">Media</button>
        <button className="tab">Likes</button>
      </div>

      {/* Content */}
      <div className="profile-content">
        <div className="tweet">
          <div className="tweet-header">
            <img className="tweet-avatar" src="https://via.placeholder.com/50" alt="avatar" />
            <div className="tweet-details">
              <span className="tweet-name">John Doe</span>
              <span className="tweet-handle">@johndoe</span>
              <span className="tweet-time">· 2h</span>
            </div>
          </div>
          <p className="tweet-text">This is a sample tweet! Excited to share more updates. 🚀</p>
          <div className="tweet-actions">
            <span>❤️</span>
            <span>🔁</span>
            <span>💬</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
