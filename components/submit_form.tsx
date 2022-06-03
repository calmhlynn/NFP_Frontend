import React, {useState} from "react";
import {pipe} from "@fxts/core";
import {useForm} from "react-hook-form";

// interface ButtonProps {
// 	ok: boolean;
// 	accept?: boolean;
// 	cancel?: boolean;
// }

export default function SubmitForm() {
	const [text, setText] = useState<string>("");

	const { register, handleSubmit, reset } = useForm();

	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		pipe(
			text,
			console.log,
			_ => setText(""),
		)
	}

	const onSubmit = handleSubmit(data => console.log(data));


	const onCancel = () => reset();


	return (
		<form onSubmit={onSubmit}>
			<div className="flex flex-col items-center w-full">
				<input
					className="w-4/5 h-36 mx-2 rounded border-white border-2 border-gray-700 bg-gray-800 text-white
									hover:ring-gray-500 hover:ring-offset-1 hover:ring-1"
					{...register("text", { required: true })}
				/>
				<div className="flex justify-end w-4/5 text-white mt-5">
					<button
						className="px-5 py-1 bg-black border-white border-2 rounded-xl w-auto ml-1
									hover:text-red-600 hover:ring-offset-1
									transition duration-200"
						type="submit"
						onClick={onCancel}
					>Cancel
					</button>
					<button
						className="px-5 py-1 bg-black border-white border-2 rounded-xl w-auto ml-1
									hover:text-green-600 hover:ring-offset-1
									transition duration-300"
						type="submit">OK
					</button>
				</div>

			</div>
		</form>
	);
}