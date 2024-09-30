const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getEditPage,
  postCreateUser,
  getCreatePage,
  postUpdateUser,
  postDeleteUser,
  postRemoveUser
} = require("../controllers/homeController");

router.get("/", getHomePage);
router.get("/update/:id", getEditPage);
router.get("/create", getCreatePage);
router.post("/create_user", postCreateUser);
router.post("/update_user", postUpdateUser);
router.post("/delete_user/:id", postDeleteUser);
router.post("/delete_user", postRemoveUser);


module.exports = router;
