import React, { useState } from 'react';
import { Formula } from './Formula';
import { Display } from './Display';
import { Buttons } from './Buttons';

export const Calculator = () => {
	const [ formula, setFormula ] = useState('');
	const [ display, setDisplay ] = useState('0');

	const init = () => {
		setFormula('');
		setDisplay('0');
	};

	const maxDigitWarning = () => {};
	const isNumber = (event) => {
		console.log(event.target.value);
		let tempFormula = formula;
		if (tempFormula.startsWith('0')) {
			tempFormula = '';
		}
		setFormula(tempFormula + event.target.value);

		let tempDisplay = display;
		if (tempDisplay === '0') {
			tempDisplay = '';
		}
		if (
			tempDisplay.includes('+') ||
			tempDisplay.includes('-') ||
			tempDisplay.includes('*') ||
			tempDisplay.includes('/')
		) {
			tempDisplay = tempDisplay.slice(1);
		}
		setDisplay(tempDisplay + event.target.value);
	};
	const isDecimal = (event) => {};
	const isOperator = (event) => {
		let tempFormula = formula;
		let index = tempFormula.indexOf('=');
		if (index > 0) {
			tempFormula = tempFormula.slice(index + 1);
		}
		if (tempFormula.endsWith('-') && event.target.value !== '-') {
			tempFormula = tempFormula.slice(0, tempFormula.length - 1);
		} else if (tempFormula.endsWith('-') && event.target.value === '-') {
			tempFormula = tempFormula.slice(0, tempFormula.length - 1);
		} else if (
			(tempFormula.endsWith('+') || tempFormula.endsWith('*') || tempFormula.endsWith('/')) &&
			event.target.value !== '-'
		) {
			tempFormula = tempFormula.slice(0, tempFormula.length - 1);
		}
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
