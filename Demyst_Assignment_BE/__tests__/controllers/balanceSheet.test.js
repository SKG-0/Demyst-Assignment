import request from "supertest";
import { app } from "../../src/server.js";

describe("Test Route: /app/fetch-balance-sheet POST api", () => {
	it("should return a 200 status code", async () => {
		const mockReqData = {
			businessName: "sample",
			yearEstablished: 2022,
			loanAmount: 200000,
			accountingProvider: "Xero",
		};
		await request(app).post("/app/fetch-balance-sheet").send(mockReqData).expect("Content-Type", /json/).expect(200);
	});

	it("should return missing request data error", async () => {
		const mockReqData = {
			businessName: "sample",
			yearEstablished: 2022,
			accountingProvider: "Xero",
		};
		await request(app).post("/app/fetch-balance-sheet").send(mockReqData).expect("Content-Type", /json/).expect(401);
	});
});
