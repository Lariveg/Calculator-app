import React from 'react';

export const Buttons = (props) => {
	return (
		<div className="buttons">
			<button id="clear" className="clear" value="AC" onClick={props.init}>
				AC
			</button>
			<button id="divide" className="operator" value="/" onClick={props.isOperator}>
				/
			</button>
			<button id="multiply" className="operator" value="x" onClick={props.isOperator}>
				x
			</button>
			<button id="seven" className="number" value="7" onClick={props.isNumber}>
				7
			</button>
			<button id="eight" className="number" value="8" onClick={props.isNumber}>
				8
			</button>
			<button id="nine" className="number" value="9" onClick={props.isNumber}>
				9
			</button>
			<button id="subtract" className="operator" value="-" onClick={props.isOperator}>
				-
			</button>
			<button id="four" className="number" value="4" onClick={props.isNumber}>
				4
			</button>
			<button id="five" className="number" value="5" onClick={props.isNumber}>
				5
			</button>
			<button id="six" className="number" value="6" onClick={props.isNumber}>
				6
			</button>
			<button id="add" className="operator" value="+" onClick={props.isOperator}>
				+
			</button>
			<button id="one" className="number" value="1" onClick={props.isNumber}>
				1
			</button>
			<button id="two" className="number" value="2" onClick={props.isNumber}>
				2
			</button>
			<button id="three" className="number" value="3" onClick={props.isNumber}>
				3
			</button>
			<button id="equals" className="equals" value="=" onClick={props.evaluate}>
				=
			</button>
			<button id="zero" className="number zero" value="0" onClick={props.isNumber}>
				0
			</button>
			<button id="decimal" className="number" value="." onClick={props.isDecimal}>
				.
			</button>
		</div>
	);
};
