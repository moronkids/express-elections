const express = require("express");

const router = express.Router();
const {
  getList,
  getListDetail,
  createList,
  updateCalon,
  deleteCalon,
} = require("../controllers/CalonController"); // imp controller by destructuring

// router.param("id", checkID);
router.route("/").get(getList).post(createList); // detail vesion
router.route("/:id").get(getListDetail).patch(updateCalon).delete(deleteCalon);
module.exports = router;
