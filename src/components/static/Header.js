/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { animated, Transition } from 'react-spring/renderprops'
import pizzaHeader from '../../img/pizza-header.jpg'

const headerStyles = (theme) => css`
	position: fixed;
	width: 100%;
	background-color: ${theme.colors.bg.dark};
	color: ${theme.colors.text.light};
	height: 50px;
	display: flex;
	align-items: center;
	.icon {
		color: ${theme.colors.text.light};
		height: 25px;
		width: 25px;
		margin: 1 rem auto;
		&:hover {
			color: ${theme.colors.text.darkGray};
		}
		@media (min-width: 1080px) {
			height: 50px;
			width: 50px;
			margin: 0 25px;
		}
	}
	@media (min-width: 1080px) {
		height: 100px;
		justify-content: space-between;
		img {
			float: left;
		}
		ul {
			display: flex;
			flex-direction: row;
			margin: 0;
			padding: 0;
			justify-content: flex-end;
		}
	}
	.logo-text {
		margin: 0;
		font-family: ${theme.fonts.fancy}, cursive;
		font-size: 1.5rem;
		@media (min-width: 1080px) {
			font-size: 2rem;
			text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
				1px 1px 0 #000;
		}
	}
	.icon-stack {
		display: none;
		@media (min-width: 1080px) {
			display: block;
			width: calc(100vw / 3);
			text-align: center;
		}
	}
	.header-img {
		background: none;
		margin: 0 auto;
		padding-left: 50px;
		@media (min-width: 1080px) {
			display: flex;
			align-items: center;
			justify-content: center;
			background-image: linear-gradient(
					to right,
					rgba(0, 0, 0, 0) 50%,
					rgba(15, 15, 15, 100)
				),
				url(${pizzaHeader});
			width: 250px;
			height: 100%;
			background-position: bottom;
			margin-right: calc(100vw / 3 - 250px);
		}
	}
	.desktop-nav {
		display: none;
		@media (min-width: 1080px) {
			display: block;
			width: calc(100vw / 3);
			float: right;
		}
	}
	.open-mobile-nav {
		height: 45px;
		width: 48px;
		margin: 5px 2px;
		background: none;
		border: none;
		@media (min-width: 1080px) {
			display: none;
		}
		& > svg {
			color: ${theme.colors.text.light};
			font-size: ${theme.fontSize.lg};
		}
	}
`

const mobileNavStyles = (theme) => css`
	display: block;
	background-color: ${theme.colors.bg.dark};
	position: absolute;
	top: 50px;
	left: 0;
	right: 0;
	width: 100%;
	text-align: center;
	@media (min-width: 1080px) {
		display: none;
	}
	ul {
		margin-left: -2.5rem;
	}
	.mobile-contact-icon-stack {
		display: flex;
		flex-direction: column;
		& > * {
			margin: 0.5rem auto;
		}
	}
`

const Header = (props) => {
	const [isMobileNavOpen, setIsMobileNaveOpen] = useState(false)

	const theme = useTheme()

	const toggleNav = () => {
		setIsMobileNaveOpen(!isMobileNavOpen)
	}

	return (
		<header css={headerStyles(theme)}>
			<div className='header-img'>
				<p className='logo-text'>Pizza Website</p>
			</div>
			<div className='icon-stack'>
				<IconLink icon={faFacebook} to={'https://facebook.com/pizza-website'} />
				<IconLink
					icon={faInstagram}
					to={'https://instagram.com/pizza-website'}
				/>
				<IconLink icon={faTwitter} to={'https://twitter.com/pizza-website'} />
			</div>
			<nav className='desktop-nav'>
				<ul>
					<HeaderLink to='/'>Home</HeaderLink>
					<HeaderLink to='menu'>Menu</HeaderLink>
					<HeaderLink to='about'>About</HeaderLink>
					<HeaderLink to='contact'>Contact</HeaderLink>
				</ul>
			</nav>
			<button onClick={toggleNav} className='open-mobile-nav'>
				<Transition
					items={isMobileNavOpen}
					from={{
						position: 'absolute',
						top: '9px',
						right: isMobileNavOpen ? '14px' : '12px',
						opacity: 0,
					}}
					enter={{ opacity: 1 }}
					leave={{ opacity: 0 }}
					config={{ duration: 150 }}
				>
					{(isMobileNavOpen) =>
						isMobileNavOpen
							? (props) => (
									<FontAwesomeIcon style={props} icon={faChevronRight} />
							  )
							: (props) => <FontAwesomeIcon style={props} icon={faBars} />
					}
				</Transition>
			</button>
			<Transition
				items={isMobileNavOpen}
				from={{ transform: 'translateX(100%)' }}
				enter={{ transform: 'translateX(0)' }}
				leave={{ transform: 'translateX(100%)' }}
			>
				{(isMobileNavOpen) =>
					isMobileNavOpen &&
					((props) => (
						<animated.nav style={props} css={mobileNavStyles(theme)}>
							<ul>
								<HeaderLink to='/'>Home</HeaderLink>
								<HeaderLink to='menu'>Menu</HeaderLink>
								<HeaderLink to='about'>About</HeaderLink>
								<HeaderLink to='contact'>Contact</HeaderLink>
							</ul>
							<div className='mobile-contact-icon-stack'>
								<IconLink
									icon={faFacebook}
									to={'https://facebook.com/pizza-website'}
								/>
								<IconLink
									icon={faInstagram}
									to={'https://instagram.com/pizza-website'}
								/>
								<IconLink
									icon={faTwitter}
									to={'https://twitter.com/pizza-website'}
								/>
							</div>
						</animated.nav>
					))
				}
			</Transition>
		</header>
	)
}

const HeaderLink = (props) => {
	const headerLinkStyles = (theme) => css`
		list-style: none;
		font-family: ${theme.fonts.fancy}, cursive;
		width: 100%;
		margin: 0 auto;
		@media (min-width: 1080px) {
			margin-right: 2rem;
		}
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

const IconLink = (props) => (
	<a target='_blank' rel='noreferrer' href={props.to}>
		<FontAwesomeIcon className='icon' icon={props.icon} />
	</a>
)

export default Header
