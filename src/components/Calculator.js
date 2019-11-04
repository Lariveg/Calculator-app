import React, { useState } from 'react';
import { Formula } from './Formula';
import { Display } from './Display';
import { Buttons } from './Buttons';

export const Calculator = () => {
	const [ formula, setFormula ] = useState('');
	const [ display, setDisplay ] = useState(0);

	const init = () => {
		setFormula('');
		setDisplay(0);
	};

	const maxDigitWarning = () => {};
	const isNumber = () => {};
	const isDecimal = () => {};
	const isOperator = () => {};
	const evaluate = () => {};

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
