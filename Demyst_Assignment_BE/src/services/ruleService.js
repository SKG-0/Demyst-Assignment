/*
Rules:
 -> 1. by default pre-assessment value will be 20%
 -> 2. If average profit is more than zero then pre-assessment value will be 60%
 -> 3. If average assets value is more than loan amount then pre-assessment value will be 100% 
*/

export default function calculatePreAssessment(balanceSheet, loanAmount) {
	//Calculating Total Profit and Total Assets
	const totalProfit = balanceSheet.reduce((sum, entry) => sum + entry.profitOrLoss, 0);
	const totalAssets = balanceSheet.reduce((sum, entry) => sum + entry.assetsValue, 0);

	//Calculating Average Profit and Assets
	const averageProfit = totalProfit / balanceSheet.length;
	const averageAssets = totalAssets / balanceSheet.length;

	//Pre-defined pre-assessment value
	let preAssessment = 20;

	//If average profit is positive number then pre-assessment value will be 60
	if (averageProfit > 0 && loanAmount > 0) preAssessment = 60;

	//If average assets value is more than loan amount then pre-assessment value will be 100
	if (averageAssets > loanAmount && loanAmount > 0) preAssessment = 100;

	return preAssessment;
}
