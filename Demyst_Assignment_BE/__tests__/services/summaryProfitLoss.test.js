import sheet from "../../src/data/sampleBalanceSheet";
import getProfitLossSummary from "../../src/services/summaryProfitLoss";

describe("Test of Profit/Loss summary creating function", () => {
	it("Should return summary of profit/loss", () => {
		const summary = sheet.map((item) => ({ year: item.year, profitOrLoss: item.profitOrLoss }));
		const result = getProfitLossSummary(sheet);
		expect(result.length).toBe(summary.length);
		expect(result).toEqual(summary);
	});
});
