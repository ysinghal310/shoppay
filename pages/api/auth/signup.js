import nc from "next-connect";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import db from "../../../utils/db";
import { validateEmail } from "../../../utils/validation";
import { createActivationToken } from "../../../utils/tokens";
import { sendEmail } from "../../../utils/sendEmail";
import { activateEmailTemplate } from "../../../emails/activateEmailTemplate";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }
    if (!validateEmail(email)) {
      return res.status(400).json({ message: "Invalid Email." });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists." });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be atleast 6 characters." });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: cryptedPassword });

    const addedUser = await newUser.save();

    const activation_token = createActivationToken({
      id: addedUser._id.toString(),
    });

    const url = `${process.env.BASE_URL}/activate/${activation_token}`;

    const response = sendEmail(
      email,
      url,
      "",
      "Activate Your Account",
      activateEmailTemplate
    );
    await db.disconnectDb();

    res.json({
      message:
        "Registered Successfully! Please activate your account to get started",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
