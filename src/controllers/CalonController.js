/* eslint-disable eqeqeq */
const Calon = require('../models/CalonModels');

exports.createList = async (req, res) => {
  try {
    const newCalon = await Calon.create(req.body);
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

exports.getList = async (req, res) => {
  try {
    // 1. Filtering
    const queryObj = { ...req.query };
    const excludedField = ['sort', 'fields', 'page', 'limit']; // when u want to secure ur db
    excludedField.forEach((el) => delete queryObj[el]);
    // 1.1 Adv Filtering greater than.. etc
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    console.log(JSON.parse(queryStr), 'heh');

    // 2. Sorting
    let AllData = Calon.find(JSON.parse(queryStr));
    if (req.query.sort) {
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy, 'tes');
      AllData = AllData.sort(sortBy);
    } else {
      AllData = AllData.sort('-name');
    }

    // 3 field limitiing
    if (req.query.fields) {
      const fields = await req.query.fields.split(',').join(' ');
      AllData = AllData.select(fields);
    } else {
      AllData = AllData.select('-__v');
    }
    // 4 pagination
    // page2&limit=10, 1-10, page 1, 11-20
    const page = req.query.page * 1 || 1;
    const limit = req.query.limit * 1 || 100;
    // const limit = 1;
    const skip = await (page - 1) * limit;
    console.log(Number.isInteger(page), Number.isInteger(limit));
    AllData = AllData.limit(limit).skip(skip);

    if (req.query.page) {
      const numCust = await Calon.countDocuments();
      if (skip >= numCust) throw new Error('this page does`nt exist');
    }
    // execute query
    const qry = await AllData;
    res.status(200).json({
      status: 'success',
      data: qry,
    });
  } catch (err) {
    console.log(err.message, 'error');
    res
      .status(404) // http status
      .json({
        status: 'failed',
        message: err.message,
        data: {},
      });
  }
};

exports.getListDetail = async (req, res) => {
  try {
    const id = await Calon.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      data: id,
    });
  } catch (err) {
    console.log(err);
    res.status(200).json({
      status: 'failed',
      message: 'Calon ID not found',
      data: {},
    });
  }
};

exports.updateCalon = async (req, res) => {
  try {
    const update = await Calon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(update);
    if (update !== null) {
      res.status(200).json({
        status: 'success',
        data: update,
      });
    }
    res.status(404).json({
      status: 'failed',
      data: null,
      message: 'id not found',
    });
  } catch (err) {
    res.status(404).json({
      status: 'failed',
      data: err,
    });
  }
};

exports.deleteCalon = async (req, res) => {
  try {
    console.log(req.params.id, 'cek');
    const deleteCalon = await Calon.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: deleteCalon,
    });
  } catch (err) {
    // console.log(err);
    res.status(404).json({
      status: 'failed',
      data: err,
    });
  }
};
