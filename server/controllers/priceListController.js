import prisma from "../configs/prisma.js";

export const getPriceList = async (req, res) => {
  try {
    const list = await prisma.priceList.findMany({
      orderBy: { articleNumber: "desc" },
    });

    return res.json({ list });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ message: error.code || error.message });
  }
};
