const express = require('express');

const router = express.Router();
const {
  createList,
} = require('../controllers/TrxController'); // imp controller by destructuring

// router.param("id", checkID);
router
  .route('/')
  .post(createList); // detail vesion

module.exports = router;
