const validator = require("validator");

const rString = {
  type: String,
  required: true
};
const dString = {
  type: String,
  default: "",
  required: false
};
const uString = {
  type: String,
  required: false
};
const rNumber = {
  type: Number,
  required: true,
  default: 0
};
const dNumber = {
  type: Number,
  default: 0,
  required: false
};
const uNumber = {
  type: Number,
  required: false
};
const rBool = {
  type: Boolean,
  required: true
};
const dBool = {
  type: Boolean,
  default: false,
  required: false
};
const uBool = {
  type: Boolean,
  required: false
};
const rEnum = values => ({
  type: String,
  enum: values,
  required: true
});
const dEnum = values => ({
  type: String,
  enum: values,
  default: values[0]
});
const uEnum = values => ({
  type: String,
  enum: values,
  required: false
});
const dUDate = {
  type: Number,
  default: function() {
    return Math.round(Date.now() / 1000);
  },
  required: false
};
const rDate = {
  type: Date,
  required: true
};
const rArray = {
  type: Array,
  required: true
};
const dArray = {
  type: Array,
  default: [],
  required: false
};
const uArray = {
  type: Array,
  required: false
};
const rEmail = {
  type: String,
  required: true,
  validate: { validator: validator.isEmail, message: "Invalid email" }
};

module.exports = {
  rString,
  dString,
  uString,
  rNumber,
  dNumber,
  uNumber,
  rBool,
  dBool,
  uBool,
  dUDate,
  rDate,
  rEnum,
  dEnum,
  uEnum,
  rArray,
  dArray,
  uArray,
  rEmail
};
