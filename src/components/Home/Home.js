/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const homeStyles = (theme) => css`
	display: flex;
	justify-content: center;
	h1 {
		color: ${theme.colors.text.dark};
		font-family: ${theme.fonts.heading}, serif;
	}
`
const Home = (props) => {
	const theme = useTheme()
	return (
		<div css={homeStyles(theme)}>
			<h1>Pizza. As it should be.</h1>
		</div>
	)
}

export default Home
