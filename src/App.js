/** @jsxImportSource @emotion/react */
import { ThemeProvider } from '@emotion/react'
import Header from './components/Header/Header'
import Home from './components/Home/Home'

const theme = {
	backgroundColor: 'lightgray',
	colors: {
		text: {
			dark: '#0f0f0f',
			gray: '#c4c4c4',
			darkGray: '#6e6e6e',
			light: '#f1f1f1',
			white: '#fbfbfb',
		},
	},
	fonts: {
		heading: 'Castoro',
		fancy: 'Pacifico',
		sans: 'Open Sans',
	},
}

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Header />
			<Home />
		</ThemeProvider>
	)
}

export default App
