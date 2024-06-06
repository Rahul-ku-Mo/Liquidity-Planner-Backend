import express from "express";

import {
  getInflows,
  getOutflows,
  updateInflowInfo,
  updateOutflowInfo,
  updateLiquidFundInfo,
  getLiquidFunds,
  createInflow,
  createOutflow,
  createBulkOutflows,
  createLiquidFunds,
} from "../controllers/fundController";

const router = express.Router();

router
  .get("/inflows", getInflows)
  .post("/inflows", createInflow)
  .put("/inflows/:id", updateInflowInfo);

router
  .get("/outflows", getOutflows)
  .post("/outflows", createOutflow)
  .post("/bulkOutflows", createBulkOutflows)
  .put("/outflows/:id", updateOutflowInfo);

router
  .get("/liquidFunds", getLiquidFunds)
  .post("/liquidFunds", createLiquidFunds)
  .put("/liquidFunds/:id", updateLiquidFundInfo);

export default router;
