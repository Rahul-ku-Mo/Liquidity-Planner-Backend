import { Request, Response } from "express";
import prisma from "../db/prisma";

export const getInflows = async (req: Request, res: Response) => {
  try {
    const inflows = await prisma.inflow.findMany();

    if (inflows) {
      res.status(200).json({
        status: 200,
        message: "Success",
        data: inflows,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error getting inflow",
      error: error.message,
    });
  }
};

export const createInflow = async (req: Request, res: Response) => {
  const { source } = req.body;

  const amount = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 10000)
  );

  try {
    const inflow = await prisma.inflow.create({
      data: {
        source: source,
        amount: amount,
      },
    });

    res.status(201).json({
      status: 201,
      message: "Success",
      data: inflow,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error getting outflow",
      error: error.message,
    });
  }
};

export const createOutflow = async (req: Request, res: Response) => {
  const { source } = req.body;

  const amount = Array.from({ length: 12 }, () =>
    Math.floor(Math.random() * 10000)
  );
  try {
    const outflow = await prisma.outflow.create({
      data: {
        source: source,
        amount: amount,
      },
    });

    res.status(201).json({
      status: 201,
      message: "Success",
      data: outflow,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error getting outflow",
      error: error.message,
    });
  }
};

export const createBulkOutflows = async (req: Request, res: Response) => {
  const { source }: { source: string[] } = req.body;

  try {
    for (let i = 0; i < source.length; i++) {
      const amount = Array.from({ length: 12 }, () =>
        Math.floor(Math.random() * 10000)
      );

      await prisma.outflow.create({
        data: {
          source: source[i],
          amount: amount,
        },
      });
    }

    res.status(201).json({
      status: 201,
      message: "Success",
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error getting outflow",
      error: error.message,
    });
  }
};

export const getOutflows = async (req: Request, res: Response) => {
  try {
    const outflows = await prisma.outflow.findMany();

    if (outflows) {
      res.status(200).json({
        status: 200,
        message: "Success",
        data: outflows,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error getting outflow",
      error: error.message,
    });
  }
};

export const getLiquidFunds = async (req: Request, res: Response) => {
  const liquidFunds = await prisma.liquidFunds.findMany();
  try {
    if (liquidFunds) {
      res.status(200).json({
        status: 200,
        message: "Success",
        data: liquidFunds,
      });
    }
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error getting liquid funds",
      error: error.message,
    });
  }
};
export const createLiquidFunds = async (req: Request, res: Response) => {
  const { source, amount } = req.body;

  try {
    const liquidFunds = await prisma.liquidFunds.create({
      data: {
        source: source,
        balance: amount,
      },
    });

    res.status(201).json({
      status: 201,
      message: "Success",
      data: liquidFunds,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error creating liquid funds",
      error: error.message,
    });
  }
};

export const updateInflowInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { amount } = req.body;

  try {
    const inflow = await prisma.inflow.update({
      where: { id: id },
      data: {
        amount: amount,
      },
    });

    res.status(200).json({
      status: 200,
      message: "Success",
      data: inflow,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error updating inflow",
      error: error.message,
    });
  }
};
export const updateOutflowInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { amount } = req.body;

  try {
    const outflow = await prisma.outflow.update({
      where: { id: id },
      data: {
        amount: amount,
      },
    });

    res.status(200).json({
      status: 200,
      message: "Success",
      data: outflow,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error updating inflow",
      error: error.message,
    });
  }
};

export const updateLiquidFundInfo = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { balance } = req.body;

  try {
    const liquidFund = await prisma.liquidFunds.update({
      where: { id: id },
      data: {
        balance: balance,
      },
    });

    res.status(200).json({
      status: 200,
      message: "Success",
      data: liquidFund,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 500,
      message: "Error updating liquid funds",
      error: error.message,
    });
  }
}