import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import reportWebVitals from './reportWebVitals'

const { REACT_APP_SPACE_ID, REACT_APP_ACCESS_TOKEN } = process.env

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
	uri: `https://graphql.contentful.com/content/v1/spaces/${REACT_APP_SPACE_ID}?access_token=${REACT_APP_ACCESS_TOKEN}`,
	cache: new InMemoryCache(),
})

ReactDOM.render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>,
	document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
