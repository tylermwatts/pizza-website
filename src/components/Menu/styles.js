import { css } from '@emotion/react'

const menuStyles = (theme) => css`
	background-color: ${theme.colors.bg.light};
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	color: ${theme.colors.text.black};
	h1 {
		font-size: ${theme.fontSize.xl};
		font-family: ${theme.fonts.heading}, serif;
		margin: 1rem auto 0;
	}
	h2 {
		font-size: ${theme.fontSize.lg};
		font-family: ${theme.fonts.fancy}, cursive;
		margin: 1rem auto 0;
		text-decoration: underline;
	}
	h3 {
		font-family: ${theme.fonts.heading}, serif;
		margin: 1rem auto 0;
	}
	p {
		margin: 1rem auto 0;
	}
	@media (min-width: ${theme.breakpoints.md}) {
		h1 {
			font-size: ${theme.fontSize.xxl};
			margin: 1rem auto;
		}
		h2 {
			font-size: ${theme.fontSize.xl};
			margin: 1rem auto;
		}
		h3 {
			font-size: ${theme.fontSize.lg};
			margin: 1rem auto;
		}
		p {
			margin: 1rem auto;
		}
	}
`

const dishCardStyles = (theme) => css`
	margin: 0 auto;
	width: 80%;
	@media (min-width: ${theme.breakpoints.md}) {
		margin: 0.5rem auto;
		width: 50%;
	}
`

export { menuStyles, dishCardStyles }
