
import {readFileSync, writeFileSync} from "fs";

function loadJSON() {
	return JSON.parse(readFileSync('data.json').toString());
}

function saveJSON(json) {
	return writeFileSync('data.json', JSON.stringify(json))
}

function send() {
	const sender = document.getElementById('email-address').value;
	const email = document.getElementById('email-content').value;
	if (sender.length > 5) {
		console.log(sender, email);
		let data = loadJSON();
		data.push([sender, email]);
		saveJSON(data);
	}
}

export default send;