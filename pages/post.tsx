import {useRef, useState} from "react";

interface Post{
	author: string;
	title?: string;
	body?: string;
	type: "html" | "md"
}


export default function Post() {


	const [post, setPost] = useState<Post>({
		author: "admin",
		title: "",
		body: "",
		type: "html",
	})

	const titleRef = useRef<HTMLTextAreaElement>(null);
	const bodyRef = useRef<HTMLTextAreaElement>(null);

	const onClick = () => {
		console.log(titleRef.current?.value);
		console.log(bodyRef.current?.value);
		const posting = {
			title: titleRef.current?.value,
			body: bodyRef.current?.value
		}
		setPost((prev) => ({...prev,
			title: titleRef.current?.value,
			body: bodyRef.current?.value}
		))
		console.log(post)
	}

	return (
		<div className="flex flex-col px-10">
			<textarea
				className="flex text-xl md:text-4xl py-4 md:py-2.5 px-5 md:px-20 mt-10 md:my-10 h-16 w-full rounded-l resize-none outline-none bg-neutral-900 border-white border"
				ref={titleRef}
			/>
			<textarea
				className="w-full py-3 px-3 h-96 md:h-[500px] rounded-l my-8 break-words resize-none bg-neutral-900 border-white border"
				ref={bodyRef}
			/>
			<div className="flex justify-end">
				<button className="w-24 border-white border rounded text-center px-6 py-3" onClick={onClick}>완료</button>
			</div>
		</div>
	);
}