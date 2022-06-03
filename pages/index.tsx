import type {NextPage} from 'next'
import React, {SyntheticEvent, useEffect, useState} from "react";
import AOS from "aos";
import "aos/dist/aos.css"
import router from 'next/router';
import Link from 'next/link';

const Home: NextPage = () => {

	const [go, setGo] = useState<boolean>(false);

	useEffect(() => {
		AOS.init({ duration: 1000 });

		setGo(true);
	}, [])


	const onClick = (event: SyntheticEvent<HTMLButtonElement>) => {
		console.log(event.currentTarget.value)
		router.push(`/${event.currentTarget.value}`)
	}


	return (
		<>
			<div className={`text-4xl sm:text-8xl font-semibold w-auto text-center my-8 select-none ${go ? `translate-x-5` : null} duration-1000`}>
				Ordinary Space.
			</div>
			<Link href="/calendar">
				<a className="flex justify-center items-center w-full text-2xl hover:text-green-400 transition-colors">
					calander
				</a>
			</Link>
			{/*<SubmitForm/>*/}
		</>
	)
}
export default Home