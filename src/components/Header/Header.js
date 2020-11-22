/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import pizzaHeader from '../../img/pizza-header.jpg'

const headerStyles = (theme) => css`
	position: relative;
	width: 100vw;
	background-color: #0f0f0f;
	color: ${theme.colors.text.light};
	display: inline-flex;
	justify-content: space-between;
	align-items: center;
	.header-img {
		background-image: linear-gradient(
				to right,
				rgba(0, 0, 0, 0) 60%,
				rgba(15, 15, 15, 100)
			),
			url(${pizzaHeader});
		height: 100px;
		width: 250px;
		background-position: bottom;
	}
	img {
		float: left;
	}
	nav {
		float: right;
	}
	ul {
		display: flex;
		flex-direction: row;
	}
`

const Header = (props) => {
	const theme = useTheme()
	return (
		<header css={headerStyles(theme)}>
			<div className='header-img' />
			<nav>
				<ul>
					<HeaderLink to='/'>Home</HeaderLink>
					<HeaderLink to='menu'>Menu</HeaderLink>
					<HeaderLink to='about'>About</HeaderLink>
					<HeaderLink to='contact'>Contact</HeaderLink>
				</ul>
			</nav>
		</header>
	)
}

const HeaderLink = (props) => {
	const headerLinkStyles = (theme) => css`
		list-style: none;
		margin: 0 1rem;
		font-family: ${theme.fonts.fancy}, cursive;
		a {
			font-size: 1.5rem;
			&:link {
				color: ${theme.colors.text.light};
			}
			&:link:active {
				color: red;
			}
			&:hover {
				color: ${theme.colors.text.gray};
			}
			&:visited {
				color: ${theme.colors.text.darkGray};
			}
		}
	`
	const theme = useTheme()

	return (
		<li css={headerLinkStyles(theme)}>
			<a href={props.to}>{props.children}</a>
		</li>
	)
}

export default Header
