module.exports = {
	getParamValue: () => {
		const result = {};
		const url = window.location.search.substring(1);
		const inputData = (key, val) => {
			if (result[key] === undefined) {
				result[key] = val;
			}
		};
		if (!url) return new Error('there is no query.');
		if (url.includes('&')) {
			url.split('&').forEach((x) => inputData(x.split('=')));
		} else {
			inputData(url.split('='));
		}
		return result;
	},
};
