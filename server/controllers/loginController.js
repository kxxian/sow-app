import prisma from "../configs/prisma.js";
import jwt from "jsonwebtoken";

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign(
      { userId: user.id, email: user.email, contactPerson: user.contactPerson },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    res.json({
      message: "Login successful",
      token,
      user: { id: user.id, email: user.email },
    });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ message: error.code || error.message });
  }
};

export const userMe = async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.userId },
      select: {
        id: true,
        email: true,
        businessName: true,
        contactPerson: true,
      },
    });
    return res.json({ user });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(401).json({ message: "Invalid token" });
  }
};

export const getLang = async (req, res) => {
  try {
    const result = await prisma.language.findFirst({
      where: { id: 1 },
    });

    return res.json({ result });
  } catch (error) {
    res.status(500).json({ message: error.code || error.message });
    console.log(`Error: ${error}`);
  }
};

export const setLang = async (req, res) => {
  try {
    const { lang } = req.body;

    await prisma.language.update({
      where: { id: 1 },
      data: {
        lang,
      },
    });

    res.json({ message: "Language changed..." });
  } catch (error) {
    res.status(500).json({ message: error.code || error.message });
    console.log(`Error: ${error}`);
  }
};
