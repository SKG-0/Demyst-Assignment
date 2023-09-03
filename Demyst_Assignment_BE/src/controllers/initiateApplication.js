import sendResponse from "../helpers/sendResponse.js";

export default function initiateApplication(req, res) {
	const { isApplicationInitiated } = req.body;

	//Based on application initiation sending boolean messages to the frontend side
	if (isApplicationInitiated) sendResponse(res, 200, false, true);
	else sendResponse(res, 401, true, false);
}
