/** @jsxImportSource @emotion/react */
import { gql, useQuery } from '@apollo/client'
import { css, SerializedStyles, Theme, useTheme } from '@emotion/react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import {
	faFacebook,
	faInstagram,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faBars, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CSSProperties, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { animated, Transition } from 'react-spring/renderprops'
import { ThemedFunctionStyles, ThemeValues } from '../theme'

const headerStyles: ThemedFunctionStyles = (theme) => css`
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

const desktopNavStyles: ThemedFunctionStyles = (theme) => css`
	display: none;
	@media (min-width: ${theme.breakpoints.md}) {
		display: block;
		height: 100%;
		width: calc(100vw / 3);
		float: right;
	}
`

const headerImgStyles: (
	theme: ThemeValues,
	headerBgUrl: string
) => SerializedStyles = (theme, headerBgUrl) => css`
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

const iconStackStyles: ThemedFunctionStyles = (theme) => css`
	display: none;
	@media (min-width: ${theme.breakpoints.md}) {
		display: block;
		width: calc(100vw / 3);
		text-align: center;
	}
`

const logoTextStyles: ThemedFunctionStyles = (theme) => css`
	margin: 0 auto;
	font-family: ${theme.fonts.fancy}, cursive;
	font-size: 1.5rem;
	@media (min-width: ${theme.breakpoints.md}) {
		font-size: 2rem;
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
			1px 1px 0 #000;
	}
`

const openMobileNavStyles: ThemedFunctionStyles = (theme) => css`
	height: 45px;
	width: 48px;
	margin: 5px 2px;
	background: none;
	border: none;
	@media (min-width: ${theme.breakpoints.md}) {
		display: none;
	}
`

const mobileNavStyles: ThemedFunctionStyles = (theme) => css`
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

const mobileIconStackStyles: SerializedStyles = css`
	display: flex;
	flex-direction: column;
	& > * {
		margin: 0.5rem auto;
	}
`

const headerLinkStyles: ThemedFunctionStyles = (theme) => css`
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

const navLinkStyles: ThemedFunctionStyles = (theme) => css`
	width: 100%;
	font-size: 1.5rem;
	color: ${theme.colors.text.light};
	@media (min-width: ${theme.breakpoints.md}) {
		&:hover {
			color: ${theme.colors.text.gray};
		}
	}
`

const iconStyles: ThemedFunctionStyles = (theme) => css`
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

const Header: React.VFC = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false)

	const theme: Theme = useTheme()

	const { loading, error, data } = useQuery(GET_HEADER_IMAGE)

	if (loading) return null
	if (error) return <div>{`Error! ${error.message}`}</div>

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
									<FontAwesomeIcon
										style={props as CSSProperties}
										icon={faChevronRight}
									/>
							  )
							: (props) => (
									<FontAwesomeIcon
										style={props as CSSProperties}
										icon={faBars}
									/>
							  )
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

export interface HeaderLinkProps {
	to: string
	toggleNav?: () => any
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ to, toggleNav, children }) => {
	const theme = useTheme()

	return (
		<li onClick={toggleNav} css={headerLinkStyles(theme)}>
			<NavLink
				activeClassName='nav-link-active'
				css={navLinkStyles(theme)}
				exact
				to={to}
			>
				{children}
			</NavLink>
		</li>
	)
}

export interface IconLinkProps {
	icon: IconProp
	to: string
}

const IconLink: React.VFC<IconLinkProps> = ({ icon, to }) => {
	const theme = useTheme()

	return (
		<a target='_blank' rel='noreferrer' href={to}>
			<FontAwesomeIcon css={iconStyles(theme)} icon={icon} />
		</a>
	)
}

export default Header
