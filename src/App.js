/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from '@emotion/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Menu from './components/Menu'
import Footer from './components/static/Footer'
import Header from './components/static/Header'

const theme = {
	colors: {
		bg: {
			light: '#f2f2f2',
			dark: '#0f0f0f',
		},
		text: {
			dark: '#0f0f0f',
			gray: '#c4c4c4',
			darkGray: '#adadad',
			light: '#f2f2f2',
			white: '#fbfbfb',
		},
	},
	fonts: {
		heading: 'Roboto Slab',
		fancy: 'Pacifico',
		sans: 'Open Sans',
	},
	fontSize: {
		xs: '.25rem',
		sm: '.50rem',
		md: '.75rem',
		base: '1rem',
		lg: '1.25rem',
		xl: '1.5rem',
		xxl: '1.75rem',
		xxxl: '2rem',
		huge: '6rem',
	},
}

const appStyles = css`
	position: relative;
	min-height: 100vh;
	.page-wrapper {
		padding: 100px 0;
	}
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div css={appStyles}>
				<Router>
					<Header />
					<div className='page-wrapper'>
						<Switch>
							<Route path='/menu'>
								<Menu />
							</Route>
							<Route path='/about'>
								<About />
							</Route>
							<Route path='/contact'>
								<Contact />
							</Route>
							<Route path='/'>
								<Home />
							</Route>
						</Switch>
					</div>
					<Footer />
				</Router>
			</div>
		</ThemeProvider>
	)
}

export default App
