/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const footerStyles = (theme) => css`
	position: absolute;
	bottom: 0;
	width: 100%;
	background-color: ${theme.colors.bg.dark};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100px;
	& > p {
		margin: 0;
		color: ${theme.colors.text.light};
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
