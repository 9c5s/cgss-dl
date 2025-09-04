import { Client } from "mishiro-core";

export async function checkVersion() {
	const client = new Client(
		"940464243:174481488:cf608be5-6d38-421a-8eb1-11a501132c0a",
	);

	const resVer = await client.check();
	console.log(resVer);
	return resVer;
}

if (require.main === module) {
	checkVersion();
}
