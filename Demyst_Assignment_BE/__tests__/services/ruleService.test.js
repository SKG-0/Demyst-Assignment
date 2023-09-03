import sheet from "../../src/data/sampleBalanceSheet";
import calculatePreAssessment from "../../src/services/ruleService";

describe("Test of Pre Assessment calculator function", () => {
	it("Should return 100", () => {
		const result = calculatePreAssessment(sheet, 2000);
		expect(result).toBe(100);
	});
	it("Should return 60", () => {
		const result = calculatePreAssessment(sheet, 200000);
		expect(result).toBe(60);
	});
	it("Should return 20", () => {
		const result = calculatePreAssessment(sheet, 0);
		expect(result).toBe(20);
	});
});
