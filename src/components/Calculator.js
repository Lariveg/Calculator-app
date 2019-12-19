import React, { useState } from 'react';
import { Formula } from './Formula';
import { Display } from './Display';
import { Buttons } from './Buttons';

function multipleOperators(string, newVal) {
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
}

function endsWithOperator(string) {
	if (string.endsWith('+') || string.endsWith('-') || string.endsWith('/') || string.endsWith('*')) {
		return true;
	} else {
		return false;
	}
}

export const Calculator = () => {
	const [ formula, setFormula ] = useState('');
	const [ display, setDisplay ] = useState('0');

	const init = () => {
		setFormula('');
		setDisplay('0');
	};

	const maxDigitWarning = () => {
		if (display.lenght > 21) {
		}
	};

	const isNumber = (event) => {
		let tempFormula = formula;
		let tempDisplay = display;

		if (tempFormula.endsWith('0') && !tempDisplay.includes('.')) {
			tempFormula = tempDisplay - 0 > 1 ? tempFormula : tempFormula.slice(tempFormula.lenght, -1);
		}
		tempFormula = tempFormula + event.target.value;
		setFormula(tempFormula);

		if (tempDisplay === '0') {
			tempDisplay = '';
		}
		if (endsWithOperator(tempDisplay)) {
			tempDisplay = tempDisplay.slice(1);
		}
		setDisplay(tempDisplay + event.target.value);
	};

	const isDecimal = () => {
		let tempFormula = formula;
		let tempDisplay = display;

		if (endsWithOperator(tempDisplay) || tempDisplay === '0') {
			tempDisplay = '0.';
			tempFormula = tempFormula.endsWith('0') ? tempFormula + '.' : tempFormula + '0.';
		} else {
			tempDisplay = tempDisplay.includes('.') ? tempDisplay : tempDisplay + '.';
			tempFormula = tempDisplay.includes('.') ? tempFormula : tempFormula + '.';
		}

		setDisplay(tempDisplay);
		setFormula(tempFormula);
	};

	const isOperator = (event) => {
		let tempFormula = formula;

		//If the user pressed =, then evaluate an remember the result
		let index = tempFormula.indexOf('=');
		if (index > 0) {
			tempFormula = tempFormula.slice(index + 1);
		}

		//If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 x (-5))
		tempFormula = multipleOperators(tempFormula, event.target.value);

		tempFormula = tempFormula + event.target.value;
		setFormula(tempFormula);
		setDisplay(event.target.value);
	};

	const evaluate = () => {
		setFormula(formula + '=' + eval(formula));
		setDisplay(eval(formula));
	};

	return (
		<div className="calculator">
			<Formula formula={formula} />
			<Display display={display} />
			<Buttons
				evaluate={evaluate}
				init={init}
				isNumber={isNumber}
				isDecimal={isDecimal}
				isOperator={isOperator}
			/>
		</div>
	);
};
