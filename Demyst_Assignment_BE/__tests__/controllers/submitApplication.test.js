import request from "supertest";
import { app } from "../../src/server.js";
import sheet from "../../src/data/sampleBalanceSheet.js";
import getProfitLossSummary from "../../src/services/summaryProfitLoss.js";
import calculatePreAssessment from "../../src/services/ruleService.js";

describe("Test Route: /app/submit-application POST api", () => {
	it("Should return a 200 status code", async () => {
		const mockReqData = {
			businessDetails: {
				businessName: "sample",
				yearEstablished: 2022,
				loanAmount: 20000,
				accountingProvider: "Xero",
			},
			balanceSheet: sheet,
		};
		const summary = getProfitLossSummary(sheet);
		const preAssessment = calculatePreAssessment(sheet, mockReqData.businessDetails.loanAmount);
		await request(app).post("/app/submit-application").send(mockReqData).expect("Content-Type", /json/).expect(200).expect({
			error: false,
			message: {
				preAssessment,
			},
		});
	});

	it("Should return missing request data error", async () => {
		const mockReqData = {
			businessDetails: {
				businessName: "sample",
				yearEstablished: 2022,
				loanAmount: 20000,
				accountingProvider: "Xero",
			},
		};
		await request(app).post("/app/submit-application").send(mockReqData).expect("Content-Type", /json/).expect(401);
	});
});
