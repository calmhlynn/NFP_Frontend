import {ApolloConsumer, gql, useQuery} from "@apollo/client";


const GET_USER = gql`
    query GetData{
		    hello
    }
`
const GET_TWEET = gql`
    query GetTweet{
        tweet {
            id
            text
        }
    }
`

const USER_VAR = {
	id: 1
}

interface User {
	id: number;
	firstName: string;
	lastName: string;
	fullName: string;
}

export default function GraphQL() {

	const { loading, error, data } = useQuery(GET_USER);



	console.log(data)

	if (loading) return 'Loading...';
	if (error) return `Error! ${error.message}`

	return (
		<>
			<div>
				{data.hello}
			</div>
			<ApolloConsumer>
				{client => 'We have access to the client!' /* do stuff here */}
			</ApolloConsumer>
		</>
	)
}
