const mongoose = require("mongoose");
mongoose.set('debug', true);
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    name: {
      type: String,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    password: {
      type: String,
      required: true
    }
  }
);

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  this.password = bcrypt.hashSync(this.password, 10);
  next();
});

module.exports = mongoose.model("Users", UserSchema, 'user');
