const express = require("express");
const { createAuther, getAuthers,  getOneAuther, updateAuther, deleteAuther } = require("../controllers/autherController");
const router = express.Router();


router.route("/").get(getAuthers).post(createAuther);
router.route("/:id").get(getOneAuther).put(updateAuther).delete(deleteAuther);

module.exports = router;