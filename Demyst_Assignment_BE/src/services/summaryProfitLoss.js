export default function getProfitLossSummary(list) {
	return list.map((item) => ({ year: item.year, profitOrLoss: item.profitOrLoss }));
}
