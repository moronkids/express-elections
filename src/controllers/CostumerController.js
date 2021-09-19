/* eslint-disable eqeqeq */
const Customer = require('../models/CustomerModels');

exports.createList = async (req, res) => {
  try {
    const newCalon = await Customer.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        calon: newCalon,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: err,
      data: {},
    });
  }
};
