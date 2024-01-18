// Your React component where users can upload links

import React, { useState } from 'react';
import './link-uploader.css'
import {useNavigate} from 'react-router-dom';

const LinkUploader = () => {
    let navigate = useNavigate();
  const [videoInfo, setVideoInfo] = useState({
    title: '',
    description: '',
    thumbnail: '',
    link: '',
  });

  const handleThumbnailChange = (e) => {
    const file = e.target.files[0];
    
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!allowedTypes.includes(file.type)) {
      alert('Only JPEG, PNG, and GIF images are allowed.');
      return;
    }
    // Validate file size
    const maxSize = 3 * 1024 * 1024; // 3MB
    if (file.size > maxSize) {
      alert('File size exceeds 3MB limit.');
      return;
    }
    // Convert the selected file to a data URL to display a preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setVideoInfo((prevInfo) => ({
        ...prevInfo,
        thumbnail: reader.result,
        thumbnailFile: file, 
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const formData = new FormData();
      formData.append('title', videoInfo.title);
      formData.append('description', videoInfo.description);
      formData.append('link', videoInfo.link);
      formData.append('thumbnail', videoInfo.thumbnailFile); // Append the file

      const response = await fetch('hhttps://yogabackend-n2oj.onrender.com/api/videos', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Video successfully uploaded
        // console.log('Video uploaded successfully!');
        alert("Video uploaded successfully!");
        navigate('/videos');
      } else {
        // Handle error
        alert('error uploading video')
        console.error('Error uploading video');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVideoInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className='uploader'>
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" value={videoInfo.title} onChange={handleChange} />
      </label>
      <br />
      <label>
        Description:
        <textarea name="description" value={videoInfo.description} onChange={handleChange} />
      </label>
      <br />
      <label>
        Thumbnail Image:
        <input type="file" accept="image/*" onChange={handleThumbnailChange} />
        {videoInfo.thumbnail && (
            <img src={videoInfo.thumbnail} alt="Thumbnail Preview" className="thumbnail-preview" />
          )}
      </label>
      <br />
      <label>
        Video Link:
        <input type="text" name="link" value={videoInfo.link} onChange={handleChange} />
      </label>
      <br />
      <button type="submit">Upload Video</button>
    </form>
    </div>
  );
};

export default LinkUploader;
