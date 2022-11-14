const express = require('express');
const router = express.Router();

const {
    getAllUser,
    getUserByID,
    addUser,
    deleteUserByID,
    updateUserByID,
  } = require("../controller/user.controllers");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/register", addUser);
router.delete("/:id", deleteUserByID);
router.put("/:id", updateUserByID);

module.exports = router;