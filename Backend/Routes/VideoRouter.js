import express from "express";

import { MediaUploaderSingle } from "../utils/MediaUploaderSingle.js"; // Use new uploader
import { VideoGET } from "../Controllers/VideoController/VideoGET.js";
import { VideoPOST } from "../Controllers/VideoController/VideoPOST.js";
import { VideoDELETE } from "../Controllers/VideoController/VideoDELETE.js";

export const VideoRouter = express.Router();

// Routes
VideoRouter.get("/", VideoGET);
VideoRouter.post("/", MediaUploaderSingle(), VideoPOST); // Updated uploader function
VideoRouter.delete("/:id", VideoDELETE);
