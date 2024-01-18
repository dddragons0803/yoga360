// Videos.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoPreview from '../VideoPreview';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar.js';
import './videos.css';
import Navbar from '../Navbar/index.js';
const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [filteredVideos, setFilteredVideos] = useState([]);

  useEffect(() => {
    // Fetch videos from the backend
    const fetchVideos = async () => {
      try {
        // Replace 'http://localhost:5001/api/videos' with your actual backend API endpoint
        const response = await axios.get('https://yogabackend-n2oj.onrender.com/api/videos');
        // console.log(response)
        // Assuming the response data is an array of video objects
        setVideos(response.data);
        setFilteredVideos(response.data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };


    fetchVideos();

  }, []);


  const handleSearch = (searchTerm) => {
    const filtered = videos.filter((video) =>
      video.title.toLowerCase().includes(searchTerm.toLowerCase()) || video.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVideos(filtered)
  };


  return (
    <div className='main'>
      
        <Navbar />
      
      <div className='upper' >
        <h2>Yoga Videos</h2>
        <SearchBar onSearch={handleSearch} /> 
          <Link to='/upload'>
            <button className='bton'>Add Video</button>
          </Link>
      </div>
      <div className='component'>
        {filteredVideos.map((video) => (
          <VideoPreview key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Videos;



