export const multipleOperators = function(string, newVal) {
	if (string.endsWith('-')) {
		if (newVal === '-') {
			string = string.slice(string.lenght, -1);
			return string;
		} else {
			string = string.slice(string.lenght, -1);
			return multipleOperators(string, newVal);
		}
	} else if (string.endsWith('+') || string.endsWith('/') || string.endsWith('*')) {
		if (newVal === '-') {
			return string;
		} else {
			string = string.slice(string.lenght, -1);
			return string;
		}
	} else {
		return string;
	}
};

export const endsWithOperator = function(string) {
	if (string.endsWith('+') || string.endsWith('-') || string.endsWith('/') || string.endsWith('*')) {
		return true;
	} else {
		return false;
	}
};
