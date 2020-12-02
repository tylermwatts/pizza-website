/** @jsxImportSource @emotion/react */
import { css, ThemeProvider } from '@emotion/react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Menu from './components/Menu'
import ScrollToTop from './components/ScrollToTop'
import { theme } from './theme'

const appStyles = css`
	position: relative;
	min-height: 100vh;
`

const pageWrapperStyles = css`
	padding: 50px 0;
	@media (min-width: ${theme.breakpoints.md}) {
		padding: 100px 0;
	}
`

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Router>
				<ScrollToTop />
				<div css={appStyles}>
					<Header />
					<div css={pageWrapperStyles}>
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
				</div>
			</Router>
		</ThemeProvider>
	)
}

export default App
