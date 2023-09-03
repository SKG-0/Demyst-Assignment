import request from "supertest";
import { app } from "../../src/server.js";

describe("Test Route: /app/initiate-application POST api", () => {
	it("Should return a 200 status code", async () => {
		const mockReqData = {
			isApplicationInitiated: true,
		};
		await request(app).post("/app/initiate-application").send(mockReqData).expect("Content-Type", /json/).expect(200);
	});
	it("Should return missing request data error", async () => {
		const mockReqData = {};
		await request(app).post("/app/initiate-application").send(mockReqData).expect("Content-Type", /json/).expect(401);
	});
});
