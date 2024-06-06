-- CreateTable
CREATE TABLE "Inflow" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION[],
    "source" TEXT NOT NULL,

    CONSTRAINT "Inflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Outflow" (
    "id" TEXT NOT NULL,
    "amount" DOUBLE PRECISION[],
    "source" TEXT NOT NULL,

    CONSTRAINT "Outflow_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cashbox" (
    "id" TEXT NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "source" TEXT NOT NULL,

    CONSTRAINT "Cashbox_pkey" PRIMARY KEY ("id")
);
