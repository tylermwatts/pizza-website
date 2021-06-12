/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { ThemedFunctionStyles, ThemeValues } from '../theme'

const footerStyles: ThemedFunctionStyles = (theme: ThemeValues) => css`
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

const Footer: React.VFC = () => {
	const theme = useTheme()
	return (
		<footer css={footerStyles(theme)}>
			<p>© Tyler Watts 2021</p>
			<p>All rights reserved.</p>
		</footer>
	)
}

export default Footer
