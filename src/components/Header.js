/** @jsxImportSource @emotion/react */
import { gql, useQuery } from '@apollo/client'
import { css, useTheme } from '@emotion/react'
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { animated, Transition } from 'react-spring/renderprops'

const headerStyles = (theme) => css`
	position: fixed;
	width: 100%;
	background-color: ${theme.colors.bg.dark};
	color: ${theme.colors.text.light};
	height: 50px;
	display: flex;
	align-items: center;
	svg {
		color: ${theme.colors.text.light};
		font-size: ${theme.fontSize.lg};
	}
	@media (min-width: ${theme.breakpoints.md}) {
		height: 100px;
		justify-content: space-between;
		img {
			float: left;
		}
		ul {
			display: flex;
			flex-direction: row;
			justify-content: flex-end;
			align-items: center;
			height: 100%;
			margin: 0;
			padding: 0;
		}
	}
`

const desktopNavStyles = (theme) => css`
	display: none;
	@media (min-width: ${theme.breakpoints.md}) {
		display: block;
		height: 100%;
		width: calc(100vw / 3);
		float: right;
	}
`

const headerImgStyles = (theme, headerBgUrl) => css`
	background: none;
	margin: 0 auto;
	padding-left: 50px;
	@media (min-width: ${theme.breakpoints.md}) {
		display: flex;
		align-items: center;
		justify-content: left;
		background-image: linear-gradient(
				to right,
				rgba(0, 0, 0, 0) 50%,
				rgba(15, 15, 15, 100)
			),
			url(${headerBgUrl});
		width: 250px;
		height: 100%;
		background-repeat: no-repeat;
		background-position: bottom;
		margin-right: calc(100vw / 3 - 250px);
		padding-left: 0;
	}
`

const iconStackStyles = (theme) => css`
	display: none;
	@media (min-width: ${theme.breakpoints.md}) {
		display: block;
		width: calc(100vw / 3);
		text-align: center;
	}
`

const logoTextStyles = (theme) => css`
	margin: 0 auto;
	font-family: ${theme.fonts.fancy}, cursive;
	font-size: 1.5rem;
	@media (min-width: ${theme.breakpoints.md}) {
		font-size: 2rem;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
			1px 1px 0 #000;
	}
`

const openMobileNavStyles = (theme) => css`
	height: 45px;
	width: 48px;
	margin: 5px 2px;
	background: none;
	border: none;
	@media (min-width: ${theme.breakpoints.md}) {
		display: none;
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
	ul {
		margin-left: -2.5rem;
	}
	@media (min-width: ${theme.breakpoints.md}) {
		display: none;
	}
`

const mobileIconStackStyles = css`
	display: flex;
	flex-direction: column;
	& > * {
		margin: 0.5rem auto;
	}
`

const headerLinkStyles = (theme) => css`
	list-style: none;
	font-family: ${theme.fonts.fancy}, cursive;
	width: auto;
	margin: 0 auto;
	display: flex;
	.nav-link-active {
		color: ${theme.colors.text.black};
		background-color: ${theme.colors.bg.light};
	}
	@media (min-width: ${theme.breakpoints.md}) {
		flex-grow: 1;
		text-align: center;
		&:hover {
			color: ${theme.colors.text.gray};
		}
		&:active {
			color: red;
		}
		.nav-link-active {
			border: 2px solid ${theme.colors.bg.light};
			border-radius: 1.5rem;
			&:hover {
				background-color: ${theme.colors.bg.dark};
				color: ${theme.colors.text.light};
			}
		}
	}
`

const navLinkStyles = (theme) => css`
	width: 100%;
	font-size: 1.5rem;
	color: ${theme.colors.text.light};
	@media (min-width: ${theme.breakpoints.md}) {
		&:hover {
			color: ${theme.colors.text.gray};
		}
	}
`

const iconStyles = (theme) => css`
	color: ${theme.colors.text.light};
	height: 25px;
	width: 25px;
	margin: 1 rem auto;
	&:hover {
		color: ${theme.colors.text.darkGray};
	}
	@media (min-width: ${theme.breakpoints.md}) {
		height: 50px;
		width: 50px !important;
		margin: 0 25px;
	}
`

const GET_HEADER_IMAGE = gql`
	query GetHeaderImage {
		heroImage(id: "1HZgnvhPR3ReB7W1mQ16uP") {
			image {
				headerBgUrl: url
			}
		}
	}
`

const Header = (props) => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

	const theme = useTheme()

	const { loading, error, data } = useQuery(GET_HEADER_IMAGE)

	if (loading) return null
	if (error) return `Error! ${error.message}`

	const { headerBgUrl } = data.heroImage.image

	const toggleNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen)
	}

	return (
		<header css={headerStyles(theme)}>
			<div css={headerImgStyles(theme, headerBgUrl)}>
				<p css={logoTextStyles(theme)}>Pizza Website</p>
			</div>
			<div css={iconStackStyles(theme)}>
				<IconLink icon={faFacebook} to={'https://facebook.com/pizza-website'} />
				<IconLink
					icon={faInstagram}
					to={'https://instagram.com/pizza-website'}
				/>
				<IconLink icon={faTwitter} to={'https://twitter.com/pizza-website'} />
			</div>
			<nav css={desktopNavStyles(theme)}>
				<ul>
					<HeaderLink to='/'>Home</HeaderLink>
					<HeaderLink to='menu'>Menu</HeaderLink>
					<HeaderLink to='about'>About</HeaderLink>
					<HeaderLink to='contact'>Contact</HeaderLink>
				</ul>
			</nav>
			<button onClick={toggleNav} css={openMobileNavStyles(theme)}>
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
								<HeaderLink toggleNav={toggleNav} to='/'>
									Home
								</HeaderLink>
								<HeaderLink toggleNav={toggleNav} to='menu'>
									Menu
								</HeaderLink>
								<HeaderLink toggleNav={toggleNav} to='about'>
									About
								</HeaderLink>
								<HeaderLink toggleNav={toggleNav} to='contact'>
									Contact
								</HeaderLink>
							</ul>
							<div css={mobileIconStackStyles}>
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
	const theme = useTheme()

	return (
		<li onClick={props?.toggleNav} css={headerLinkStyles(theme)}>
			<NavLink
				activeClassName='nav-link-active'
				css={navLinkStyles(theme)}
				exact
				to={props.to}
			>
				{props.children}
			</NavLink>
		</li>
	)
}

const IconLink = (props) => {
	const theme = useTheme()

	return (
		<a target='_blank' rel='noreferrer' href={props.to}>
			<FontAwesomeIcon css={iconStyles(theme)} icon={props.icon} />
		</a>
	)
}

export default Header
