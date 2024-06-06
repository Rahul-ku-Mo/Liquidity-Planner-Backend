/*
  Warnings:

  - You are about to drop the `Cashbox` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Cashbox";

-- CreateTable
CREATE TABLE "LiquidFunds" (
    "id" TEXT NOT NULL,
    "balance" DOUBLE PRECISION[],
    "source" TEXT NOT NULL,

    CONSTRAINT "LiquidFunds_pkey" PRIMARY KEY ("id")
);
