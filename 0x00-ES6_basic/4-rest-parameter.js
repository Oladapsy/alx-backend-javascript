export default function returnHowManyArguments(...args) {

	let sum = 0;
	for (let x of args) {
		sum += 1;
	}
	
	return sum;
};
