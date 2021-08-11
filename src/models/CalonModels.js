const mongoose = require('mongoose');

const calonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name cannot empty'],
  },
  gender: {
    type: String,
    required: [true, 'gender cannot empty'],
  },
  age: {
    type: Number,

  },
});
const Calon = mongoose.model('Calon', calonSchema);
// const testCalon = new Calon({
//   name: "Adit Ardhan",
// });

module.exports = Calon;
// testCalon
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("ERROR :", err);
//   });
