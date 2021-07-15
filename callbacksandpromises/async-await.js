function step1(value, flag) {
	return new Promise((resolve, reject) => {
		if (!flag) {
			resolve(value + 10);
		} else {
			reject('Something wrong');
		}
	});
}
function step2(value, flag) {
	return new Promise((resolve, reject) => {
		if (!flag) {
			resolve(value + 10);
		} else {
			reject('Something wrong');
		}
	});
}
function step3(value, flag) {
	return new Promise((resolve, reject) => {
		if (!flag) {
			resolve(value + 10);
		} else {
			reject('Something wrong');
		}
	});
}
function step4(value, flag) {
	return new Promise((resolve, reject) => {
		if (!flag) {
			resolve(value + 10);
		} else {
			reject('Something wrong');
		}
	});
}
async function result() {
	let result1 = await step1(10, false);
	let result2 = await step2(result1, false);
	let result3 = await step3(result2, false);
	let result4 = await step4(result3, false);
	return result4;
}


result().then((result) => console.log(result)).catch((error) => console.log(error));
