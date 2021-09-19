const mongoose = require('mongoose');

const typeTrxSchema = new mongoose.Schema({
  nama_layanan: {
    type: String,
    required: [true, 'nama layanan cannot empty'],
  },
  detail_trx: [
    {
      nama_trx: {
        type: String,
        required: [true, 'nama trx cannot empty'],
      },
    },
  ],
  //   name: {
  //     type: String,
  //     required: [true, 'name cannot empty'],
  //   },
  //   gender: {
  //     type: String,
  //     required: [true, 'gender cannot empty'],
  //   },
  //   age: {
  //     type: Number,

//   },
});
const TypeTrx = mongoose.model('Type', typeTrxSchema);

module.exports = TypeTrx;
