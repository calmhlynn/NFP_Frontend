function setNumber(func1: Function, args1: Function): void;
function setNumber(func1: Function, args1: Function, func2?: Function, args2?: number): void;


function setNumber(func1: Function, args1: Function, func2?: Function, args2?: number): void {
	func1(args1);
	if (func2) func2(args2);
}


export default setNumber;