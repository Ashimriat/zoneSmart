const makeTimestamp = () => {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	const milliseconds = date.getMilliseconds();
	return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

export const log = message => {
	if (typeof message === 'object') {
		console.log(`[${makeTimestamp()}]:`);
		console.log(message);
	} else {
		console.log(`[${makeTimestamp()}]: ${message}`);
	}
}
