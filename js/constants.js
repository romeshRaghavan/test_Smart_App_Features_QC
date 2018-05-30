//List of end points
let endPoints = {	
		OCR_URL : "https://vision.googleapis.com/v1/images:annotate?key=YOUR_API_KEY"
};

//List of Request Bodies
let reqBodies = {
	OCR_REQ_BODY : '{"requests": [{"image":{"content": "IMG_BODY_BASE64"},"features":[{"type": "TEXT_DETECTION"}]}]}'
};

//API keys
let apiKeys = {
		OCR_GOOGLE_KEY : "AIzaSyBEPMonG1v0hfhJFaQp5qxlV8srY2nM8z4"
}
