import React, { useState } from 'react';
import { Formula } from './Formula';
import { Display } from './Display';
import { Buttons } from './Buttons';
import { multipleOperators, endsWithOperator } from '../helpers/index';

export const Calculator = () => {
	const [ formula, setFormula ] = useState('');
	const [ display, setDisplay ] = useState('0');

	const init = () => {
		setFormula('');
		setDisplay('0');
	};

	const isNumber = (event) => {
		let tempFormula = formula;
		let tempDisplay = display;

		//If the user last pressed = and then presses a number, then start a new formula
		let index = tempFormula.indexOf('=');
		if (index > 0) {
			tempFormula = '';
			tempDisplay = '0';
		}

		//don't let the formula start with 0. 005 becomes 5. If it is after a decimal, then 00 is fine
		if (tempFormula.endsWith('0') && !tempDisplay.includes('.')) {
			//if the display is > 1, then the formula can end in 0 (example 55000)
			tempFormula = tempDisplay - 0 > 1 ? tempFormula : tempFormula.slice(tempFormula.lenght, -1);
		}

		//the initial state of display starts from empty string when you start typing a number
		if (tempDisplay === '0') {
			tempDisplay = '';
		}

		//if the user last pressed an operator, delete it before you write the next number
		if (endsWithOperator(tempDisplay)) {
			tempDisplay = tempDisplay.slice(1);
		}

		tempDisplay = tempDisplay + event.target.value;
		tempFormula = tempFormula + event.target.value;

		//place a max digit limit
		if (tempDisplay.length > 21) {
			tempDisplay = tempDisplay.slice(tempDisplay.lenght, -1);
			tempFormula = tempFormula.slice(tempFormula.lenght, -1);
			alert('Max Digit Met');
		}

		setDisplay(tempDisplay);
		setFormula(tempFormula);
	};

	const isDecimal = () => {
		let tempFormula = formula;
		let tempDisplay = display;

		//If the user last pressed =, then start a new formula
		let index = tempFormula.indexOf('=');
		if (index > 0) {
			tempFormula = '';
			tempDisplay = '0';
		}

		//handle decimals
		if (endsWithOperator(tempDisplay) || tempDisplay === '0') {
			tempDisplay = '0.';
			tempFormula = tempFormula.endsWith('0') ? tempFormula + '.' : tempFormula + '0.';
		} else {
			tempFormula = tempDisplay.includes('.') ? tempFormula : tempFormula + '.';
			tempDisplay = tempDisplay.includes('.') ? tempDisplay : tempDisplay + '.';
		}

		//place a max digit limit
		if (tempDisplay.length > 21) {
			tempDisplay = tempDisplay.slice(tempDisplay.lenght, -1);
			tempFormula = tempFormula.slice(tempFormula.lenght, -1);
			alert('Max Digit Met');
		}

		setDisplay(tempDisplay);
		setFormula(tempFormula);
	};

	const isOperator = (event) => {
		let tempFormula = formula;

		//If the user last pressed =, then evaluate an remember the result
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
		//only show the first 12 decimals
		let result = Math.round(1000000000000 * eval(formula)) / 1000000000000;

		setFormula(formula + '=' + result);
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
