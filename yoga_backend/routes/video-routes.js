const express = require('express');

const {getAllVideos, addVideo} = require('../controllers/video-controller')

const videoRouter = express.Router();

videoRouter.get('/',getAllVideos);
videoRouter.post('/',addVideo)

module.exports = videoRouter;