const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  //  "id_transaksi": 1,
  //         "status": 0,
  //         "created_at": "2012-04-23T18:25:43.511Z",
  //         "jenis_layanan": "Mini ATM",
  //         "jenis_transaksi": "Setoran Pinjaman",
  //         "nominal_transaksi_idr": 1000000,
  //         "rating": 0,
  //         "agen": {
  //             "id": 2,
  //             "nama_outlet": "Abadi Link",
  //             "no_telp": "086786898798",
  //             "alamat_cust_provinsi": "JAWA BARAT",
  //             "alamat_cust_kabko": "BANDUNG",
  //             "alamat_cust_kecamatan": "SOREANG",
  //             "alamat_cust_lengkap": "Jl. Soreang No.181",
  //             "rating": 4.3
  //         },
  //         "customer": {
  //             "id": 1,
  //             "nama": "Agus Riyanto",
  //             "no_telp": "0867861221272",
  //             "alamat_cust_provinsi": "JAWA BARAT",
  //             "alamat_cust_kabko": "BANDUNG",
  //             "alamat_cust_kecamatan": "SOREANG",
  //             "alamat_cust_lengkap": "Jl. Soreang No.181"
  //         }
  //     },
  //     {
  //         "id_transaksi": 4,
  //         "status": 1,
  //         "created_at": "2012-04-23T18:25:43.511Z",
  //         "jenis_layanan":"Mini ATM",
  //         "jenis_transaksi": "Setoran Pinjaman",
  //         "nominal_transaksi_idr": 1000000,
  //         "rating": 0,
  //         "agen": {
  //             "id":1,
  //             "nama_outlet": "Berkah Jaya Agent",
  //             "no_telp": "086786898798",
  //             "alamat_cust_provinsi": "JAWA BARAT",
  //             "alamat_cust_kabko": "BANDUNG",
  //             "alamat_cust_kecamatan": "SOREANG",
  //             "alamat_cust_lengkap": "Jl. Soreang No.181",
  //             "rating": 4.3
  //         },
  //         "customer": {
  //             "id":3,
  //             "nama": "Bagus Aja",
  //             "no_telp": "0867861223271",
  //             "alamat_cust_provinsi": "JAWA BARAT",
  //             "alamat_cust_kabko": "BANDUNG",
  //             "alamat_cust_kecamatan": "SOREANG",
  //             "alamat_cust_lengkap": "Jl. Soreang No.181"
  //         }
  //     },{
  //         "id_transaksi": 5,
  //         "status": 0,
  //         "created_at": "2012-04-23T18:25:43.511Z",
  //         "jenis_layanan":"Mini ATM",
  //         "jenis_transaksi": "Setoran Pinjaman",
  //         "nominal_transaksi_idr": 1000000,
  //         "rating": 0,
  //         "agen": {
  //             "id":1,
  //             "nama_outlet": "Berkah Jaya Agent",
  //             "no_telp": "086786898798",
  //             "alamat_cust_provinsi": "JAWA BARAT",
  //             "alamat_cust_kabko": "BANDUNG",
  //             "alamat_cust_kecamatan": "SOREANG",
  //             "alamat_cust_lengkap": "Jl. Soreang No.181",
  //             "rating": 4.3
  //         },
  //         "customer": {
  //             "id":1,
  //             "nama": "Agus Riyanto",
  //             "no_telp": "0867861221272",
  //             "alamat_cust_provinsi": "JAWA BARAT",
  //             "alamat_cust_kabko": "BANDUNG",
  //             "alamat_cust_kecamatan": "SOREANG",
  //             "alamat_cust_lengkap": "Jl. Soreang No.181"
  //         }
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
const Customer = mongoose.model('Cutomer', customerSchema);
// const testCalon = new Calon({
//   name: "Adit Ardhan",
// });

module.exports = Customer;
// testCalon
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR :", err);
//   });
