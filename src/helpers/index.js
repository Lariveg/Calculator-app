export const multipleOperators = function(string, newVal) {
	if (string.endsWith('-')) {
		string = string.slice(0, -1);
		return newVal === '-' ? string : multipleOperators(string, newVal);
	} else if (string.endsWith('+') || string.endsWith('/') || string.endsWith('*')) {
		return newVal === '-' ? string : string.slice(0, -1);
	} else {
		return string;
	}
};

export const endsWithOperator = function(string) {
	return string.endsWith('+') || string.endsWith('-') || string.endsWith('/') || string.endsWith('*');
};

export const startsWithOperatorExceptMinus = function(string) {
	return string.startsWith('+') || string.startsWith('/') || string.startsWith('*');
};
