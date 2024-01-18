
// export default VideoPreview;
import React, { useState } from 'react';
import './VideoPreview.css'; // Import your CSS file

const VideoPreview = ({ video }) => {
  const [showMore, setShowMore] = useState(false);

  const maxCharacters = window.innerWidth < 600 ? 50 : 220;

  const truncatedDescription = video.description.slice(0, maxCharacters);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="video-card">
      <a href={video.link} target="_blank" rel="noopener noreferrer">
        <div className="thumbnail-container">
          <img
            className="video-thumbnail"
            src={`https://yogabackend-n2oj.onrender.com/${video.thumbnail}`}
            alt="Video Thumbnail"
          />
        </div>
      </a>
      <div className="text-container">
        <h3 className="video-title">{video.title}</h3>
        <p className={`video-description ${showMore ? 'show-more' : ''}`}>
          {showMore ? video.description : truncatedDescription}
        </p>
        {video.description.length > 100 && (
          <button className="show-more-button" onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoPreview;
