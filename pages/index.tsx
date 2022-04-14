import type {NextPage} from 'next'
import React from "react";
import SubmitForm from "../components/submitForm";
import TitleText from "../components/titleText";


const Home: NextPage = () => {


	return (
		<>
			<TitleText/>
			<SubmitForm ok accept cancel/>
		</>
	)
}
export default Home