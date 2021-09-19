const express = require('express');

const router = express.Router();
const {
  createList,
  getCustomer,
} = require('../controllers/CostumerController'); // imp controller by destructuring

// router.param("id", checkID);
router
  .route('/')
  .get(getCustomer)
  .post(createList); // detail vesion

// router
//   .route('/:id')
//   .get(getListDetail)
//   .patch(updateCalon)
//   .delete(deleteCalon);

module.exports = router;
