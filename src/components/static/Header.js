/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import pizzaHeader from '../../img/pizza-header.jpg'

const headerStyles = (theme) => css`
	position: fixed;
	height: 100px;
	width: 100%;
	background-color: ${theme.colors.bg.dark};
	color: ${theme.colors.text.light};
	display: flex;
	justify-content: space-between;
	align-items: center;
	.header-img {
		display: flex;
		align-items: center;
		justify-content: center;
		background-image: linear-gradient(
				to right,
				rgba(0, 0, 0, 0) 60%,
				rgba(15, 15, 15, 100)
			),
			url(${pizzaHeader});
		width: 250px;
		height: 100%;
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
		margin: 0;
	}
	.logo-text {
		font-family: ${theme.fonts.fancy}, cursive;
		font-size: 2rem;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
			1px 1px 0 #000;
	}
`

const Header = (props) => {
	const theme = useTheme()
	return (
		<header css={headerStyles(theme)}>
			<div className='header-img'>
				<p className='logo-text'>Pizza Website</p>
			</div>
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
				color: ${theme.colors.text.light};
			}
			&:visited:hover {
				color: ${theme.colors.text.gray};
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
