var mongoose = require("mongoose");

var userSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "Role is required"],
      enum: ["admin", "organisation", "donor", "hospital"],
    },
    name: {
      type: String,
      required: function () {
        return ["admin", "user"].includes(this.role);
      },
    },
    organisationName: {
      type: String,
      required: function () {
        return this.role === "organisation";
      },
    },
    hospitalName: {
      type: String,
      required: function () {
        return this.role === "hospital";
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
