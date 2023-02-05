import nc from "next-connect";
import User from "../../../models/User";
import bcrypt from "bcrypt";
import db from "../../../utils/db";

const handler = nc();

handler.put(async (req, res) => {
  try {
    await db.connectDb();
    const { user_id, password } = req.body;
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(400).json({ message: "User does not exists" });
    }

    const cryptedPassword = await bcrypt.hash(password, 12);

    await User.updateOne({
      password: cryptedPassword,
    });
    // sendEmail(email, url, "", "Reset your Password", resetEmailTemplate);

    res.status(200).json({
      email: user.email,
    });
    await db.disconnectDb();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
