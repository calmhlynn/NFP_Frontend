import {pipe} from "@fxts/core";

export default function withHandler(){

	const myNameIs = (a: string) => a + "입니다.";



	const getName = pipe(
		"orsar",
		myNameIs,
		console.log
	)


}