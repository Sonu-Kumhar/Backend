const express = require("express")
const postRouter = express.Router()
const multer = require("multer")
const upload = multer({ storage:multer.memoryStorage() })
const postController = require("../controllers/post.controller")


/**
 * POST /api/posts  [protected]
 */

postRouter.post("/", upload.single("myimg") , postController.createPostController)

/**
 * GET /api/posts [protected]
 */
postRouter.get("/", postController.getPostController)


/**
 * GET /api/posts/details/:postid
 * - return an detail about specific post with the id. also check whether the post belongs to the user that the request come from
 */

postRouter.get("/details/:postid", postController.getPostDetailsController)

module.exports = postRouter;