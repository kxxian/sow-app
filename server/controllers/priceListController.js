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

export const getOnePriceList = async (req, res) => {
  try {
    const { id } = req.params;
    const item = await prisma.priceList.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!item) {
      return res.status(404).json({ message: "Price list not found" });
    }

    return res.json({ item });
  } catch (error) {
    console.log(`Error: ${error}`);
    res.status(500).json({ message: error.code || error.message });
  }
};

export const updatePriceList = async (req, res) => {
  try {
    const priceDetails = req.body;

    const inPrice = (priceDetails.inPrice = parseFloat(priceDetails.inPrice));
    const price = (priceDetails.price = parseFloat(priceDetails.price));
    const inStock = (priceDetails.inStock = parseFloat(priceDetails.inStock));

    if (Number.isNaN(inPrice) || Number.isNaN(price) || Number.isNaN(inStock)) {
      return res
        .status(400)
        .json({ message: "In Price, Price, or In Stock should be a number." });
    }

    priceDetails.inPrice = inPrice;
    priceDetails.price = price;
    priceDetails.inStock = inStock;

    const listing = await prisma.priceList.update({
      where: { id: priceDetails.id },
      data: priceDetails,
    });

    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    return res.json({
      message: "Price List updated successfully",
      listing,
    });
  } catch (error) {
    console.log(`Error ${error}`);
    res.status(500).json({ message: error.code || error.message });
  }
};
