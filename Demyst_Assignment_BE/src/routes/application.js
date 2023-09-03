import express from "express";
import initiateApplication from "../controllers/initiateApplication.js";
import fetchBalanceSheet from "../controllers/balanceSheet.js";
import submitApplication from "../controllers/submitApplication.js";

const router = express.Router();

router.post("/initiate-application", initiateApplication);
router.post("/fetch-balance-sheet", fetchBalanceSheet);
router.post("/submit-application", submitApplication);

export default router;
