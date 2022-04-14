import '../styles/globals.css'
import type {AppProps} from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
	console.log("this is _app components")
	return (
		<>
			<div className="mx-2 my-2">
				{/*<LeftBar/>*/}
				<div className="max-w-4xl w-full mx-auto">
					<Component {...pageProps} />
				</div>
			</div>
		</>
	)
}

export default MyApp
