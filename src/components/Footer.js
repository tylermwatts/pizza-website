/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

export const footerStyles = (theme) => css`
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: ${theme.colors.bg.dark};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 50px;
	& > p {
		margin: 0 1rem;
		color: ${theme.colors.text.light};
	}
	@media (min-width: ${theme.breakpoints.md}) {
		flex-direction: column;
		height: 100px;
		& > p {
			display: block;
			margin: 0;
		}
	}
`

const Footer = (props) => {
	const theme = useTheme()
	return (
		<footer css={footerStyles(theme)}>
			<p>© Tyler Watts 2020</p>
			<p>All rights reserved.</p>
		</footer>
	)
}

export default Footer
