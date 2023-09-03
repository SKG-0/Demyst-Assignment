import axios from "axios";

import type { ApplicationType } from "../pages/BalanceSheetReview";
import type { IsApplicationInitiated } from "../pages/Application";

//Business Details Data Object Structure
export interface DataObjectType {
	businessName: string;
	yearEstablished: number;
	loanAmount: number;
	accountingProvider: string;
}

//Backend URLS
const BACKEND: string = "http://localhost:5000/app";

export const initiateApplicationURI = `${BACKEND}/initiate-application`;
export const fetchBalanceSheetURI = `${BACKEND}/fetch-balance-sheet`;
export const submitApplicationURI = `${BACKEND}/submit-application`;

//Helper reusable function to interact with backend
export default async function simulateBackendCall(url: string, method: "POST" | "GET", data?: DataObjectType | IsApplicationInitiated | ApplicationType) {
	try {
		let response;
		switch (method) {
			case "POST":
				if (data) response = await axios.post(url, data);
				else throw "Missing Parameters";
				break;
			default:
				response = await axios.get(url);
		}
		return response.data;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
