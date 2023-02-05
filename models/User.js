import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Please enter your full name",
    },
    email: {
      type: String,
      required: "Please enter your email address",
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: "Please enter a password",
    },
    role: {
      type: String,
      default: "user",
    },
    image: {
      type: String,
      default:
        "https://res.cloudinary.com/dqyluhs6m/image/upload/v1674726611/default-avatar_dkvfzi.jpg",
    },
    emailVerified: {
      type: Boolean,
      default: false,
    },
    defaultPaymentMethod: {
      type: String,
      default: "",
    },
    address: [
      {
        firstName: {
          type: String,
        },
        lastName: {
          type: String,
        },
        phoneNumber: {
          type: String,
        },
        address1: {
          type: String,
        },
        address2: {
          type: String,
        },
        city: {
          type: String,
        },
        zipCode: {
          type: String,
        },
        country: {
          type: String,
        },
        active: {
          type: Boolean,
          default: false,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User =  mongoose.models.User || mongoose.model("User", userSchema);

export default User;
