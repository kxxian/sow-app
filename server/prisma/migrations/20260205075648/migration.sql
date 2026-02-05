-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "businessName" TEXT NOT NULL,
    "contactPerson" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "postalNumber" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PriceList" (
    "id" TEXT NOT NULL,
    "articleNumber" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "inPrice" DOUBLE PRECISION NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "unit" TEXT NOT NULL,
    "inStock" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "PriceList_pkey" PRIMARY KEY ("id")
);
