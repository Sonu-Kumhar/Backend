const express = require("express")
const postRouter = express.Router()
const multer = require("multer")
const upload = multer({ storage:multer.memoryStorage() })
const postController = require("../controllers/post.controller")


/**
 * POST /api/posts  [protected]
 */

postRouter.post("/", upload.single("myimg") , postController.createPostController)

module.exports = postRouter;