import sendResponse from "../helpers/sendResponse.js";
import balanceSheetData from "../data/sampleBalanceSheet.js";

export default async function fetchBalanceSheet(req, res) {
	try {
		const { businessName, yearEstablished, loanAmount, accountingProvider } = req.body;

		//Sending Sample balance sheet data to the frontend
		if (businessName && yearEstablished && loanAmount && accountingProvider) sendResponse(res, 200, false, balanceSheetData);
		else sendResponse(res, 401, true, "Data missing");
	} catch (error) {
		sendResponse(res, 500, true, "Internal Server Error");
		console.log(error);
	}
}
