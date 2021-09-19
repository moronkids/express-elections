/* eslint-disable eqeqeq */
const TypeTrx = require('../models/TypeTrxModels');

exports.createList = async (req, res) => {
  try {
    const newTrx = await TypeTrx.create(req.body);
    res.status(201).json({
      status: 'success',
      data: {
        trx: newTrx,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: err,
      data: {},
    });
  }
};
