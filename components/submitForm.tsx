import React, {useState} from "react";
import {pipe} from "@fxts/core";

interface ButtonProps {
	ok: boolean;
	accept?: boolean;
	cancel?: boolean;
}

export default function SubmitForm({
	ok = true,
	accept,
	cancel
}: ButtonProps) {
	const [text, setText] = useState<string>("");


	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		pipe(
			text,
			console.log,
			_ => setText(""),
		)
	}

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.preventDefault();
		setText(e.target.value);

	}

	return (
		<div className="flex flex-col items-end w-72 w-auto">
			<input
				className="px-2 py-2 my-1 w-96 h-40 rounded border-white border-2 border-gray-700 bg-gray-800 text-white
									hover:ring-gray-500 hover:ring-offset-1 hover:ring-1"
				onChange={onChange}
				type="text"
				value={text}/>
			<div className="flex text-white">
				{cancel ? <button
						className="px-5 py-1 bg-black border-white border-2 rounded-xl w-auto ml-1
									hover:text-red-600 hover:ring-offset-1
									transition duration-200"
						onClick={onClick}
						type="submit">Cancel
					</button>
					: null
				}
				{accept ? <button
						className="px-5 py-1 bg-black border-white border-2 rounded-xl w-auto ml-1
									hover:text-blue-600 hover:ring-offset-1
									transition duration-200"
						onClick={onClick}
						type="submit">Accept
					</button>
					: null
				}
				{ok ? <button
						className="px-5 py-1 bg-black border-white border-2 rounded-xl w-auto ml-1
									hover:text-green-600 hover:ring-offset-1
									transition duration-300"
						onClick={onClick}
						type="submit">OK
					</button>
					: null
				}
			</div>
		</div>
	);
}