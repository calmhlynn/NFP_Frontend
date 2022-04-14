import React, {useState} from "react";
import ChoiceBgColor from "./choiceBgColor";


type NFPChoice = "NextJS" | "FastAPI"

export default function LeftTopBar() {
	const [choice, setChoice] = useState<NFPChoice>()


	const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault()
		setChoice(event.currentTarget.value as NFPChoice)
	}

	return (
		<>
			{choice === "NextJS"
				?
				(<div className="flex justify-between items-center py-6 px-2 bg-gray-800 h-[100px] transition-colors duration-500">
						<ChoiceBgColor NFPChoice={choice}/>
						<div className="flex flex-col justify-between text-black text-white">
							<button
								onClick={onClick}
								value="NextJS">NextJS
							</button>
							<button
								onClick={onClick}
								value="FastAPI">FastAPI
							</button>
						</div>
					</div>
				) : choice === "FastAPI" ?
					(<div className="flex justify-between items-center py-6 px-2 bg-green-800 h-[100px] transition-colors duration-500">
						<ChoiceBgColor NFPChoice={choice}/>
						<div className="flex flex-col justify-between text-black text-white">
							<button
								onClick={onClick}
								value="NextJS">NextJS
							</button>
							<button
								onClick={onClick}
								value="FastAPI">FastAPI
							</button>
						</div>
					</div>) :
					(<div className="flex justify-between items-center py-6 px-2 bg-yellow-800 h-[100px] transition-colors duration-500">
						<ChoiceBgColor NFPChoice={choice}/>
						<div className="flex flex-col justify-between text-black text-white">
							<button
								onClick={onClick}
								value="NextJS">NextJS
							</button>
							<button
								onClick={onClick}
								value="FastAPI">FastAPI
							</button>
						</div>
					</div>)
			}
		</>
	)
}