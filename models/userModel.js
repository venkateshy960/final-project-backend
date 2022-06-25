var mongoose = require("mongoose");

//schema
var userSchema = mongoose.Schema({
  created_at: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: true,
  },
  hobbie1: {
    type: String,
    required: false,
  },
  hobbie2: {
    type: String,
    required: false,
  },
  hobbie3: {
    type: String,
    required: false,
  },
  hobbie4: {
    type: String,
    required: false,
  },
  hobbie5: {
    type: String,
    required: false,
  },
  hobbie6: {
    type: String,
    required: false,
  },
  hobbie7: {
    type: String,
    required: false,
  },
  hobbie8: {
    type: String,
    required: false,
  },
});

const Users = mongoose.model("user schema", userSchema);
module.exports = Users;
