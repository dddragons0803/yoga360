const Video = require('../model/Video');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');
const { constants } = require('../constants');
const fs = require('fs');

const getAllVideos = asyncHandler(async (req, res) => {
  try {
    const videos = await Video.find();
    console.log(videos)
    const videosWithLinks = videos.map((video) => {
      return {
        ...video.toObject(),
        thumbnailFilename: video.thumbnail ? `/uploads/${video.thumbnail}` : null,
      };
    });
  console.log(videosWithLinks)
    res.json(videosWithLinks);
    console.log("all video fetched");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

const addVideo = asyncHandler(async (req, res) => {

  const { title, description, link } = req.body;


  // Validate required fields
  if (!title || !description || !link) {
    return res.status(400).json({ message: 'Title, description, and link are required fields.' });
  }

  
  let thumbnail = null;

  // Handle file upload if a file is provided in the request
  if (req.file) {
    const imagePath = `uploads/${Date.now()}_${req.file.originalname}`;
    await fs.promises.writeFile(imagePath, req.file.buffer);
    thumbnail = imagePath;
  }
  console.log(thumbnail)
  
  const video = new Video({
    title,
    description,
    thumbnail,
    link,
  });



  try {
    const newVideo = await video.save();
    res.status(201).json(newVideo);

  } catch (error) {
 
    res.status(400).json({ message: error.message });
  }
});

module.exports = { getAllVideos, addVideo };
