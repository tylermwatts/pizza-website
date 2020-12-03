/** @jsxImportSource @emotion/react */
import { gql, useQuery } from '@apollo/client'
import { useTheme } from '@emotion/react'
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
import {
	desktopNavStyles,
	headerImgStyles,
	headerLinkStyles,
	headerStyles,
	iconStackStyles,
	iconStyles,
	logoTextStyles,
	mobileIconStackStyles,
	mobileNavStyles,
	navLinkStyles,
	openMobileNavStyles,
} from './styles'

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
