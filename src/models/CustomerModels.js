const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  id_transaksi: {
    type: Number,
    required: [true, 'id_transaksi cannot empty'],
  },
  status: {
    type: Number,
    required: [true, 'status cannot empty'],
  },
  jenis_layanan: {
    type: String,
    required: [true, 'jenis layanan cannot empty'],
  },
  jenis_transaksi: {
    type: String,
    required: [true, 'jenis transaksi cannot empty'],
  },
  nominal_transaksi_idr: {
    type: String,
    required: [true, 'jenis transaksi cannot empty'],
  },
  rating: {
    type: String,
    required: [true, 'rating cannot empty'],
  },
  agen: {
    id: {
      type: Number,
      required: [true, 'rating cannot empty'],
    },
    nama_outlet: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    no_telp: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    alamat_agen_provinsi: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    alamat_agen_kabko: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    alamat_agen_kecamatan: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    alamat_agen_lengkap: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    rating: {
      type: Number,
      required: [true, 'rating cannot empty'],
    },
  },

  customer: {
    id: {
      type: Number,
      required: [true, 'rating cannot empty'],
    },
    nama: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    no_telp: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    alamat_cust_provinsi: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    alamat_cust_kabko: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    alamat_cust_kecamatan: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
    alamat_cust_lengkap: {
      type: String,
      required: [true, 'rating cannot empty'],
    },
  },
});
const Customer = mongoose.model('Cutomer', customerSchema);

module.exports = Customer;
