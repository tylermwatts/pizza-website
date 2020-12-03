import { css } from '@emotion/react'

const menuStyles = (theme) => css`
	background-color: ${theme.colors.bg.light};
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	color: ${theme.colors.text.black};
	h2 {
		font-size: ${theme.fontSize.xl};
		font-family: ${theme.fonts.fancy}, cursive;
		margin: 1rem auto 0;
		text-decoration: underline;
	}
	h3 {
		font-size: ${theme.fontSize.lg};
		font-family: ${theme.fonts.heading}, serif;
		margin: 1rem auto 0;
	}
	p {
		margin: 1rem auto 0;
		line-height: 1.5rem;
	}
	@media (min-width: ${theme.breakpoints.md}) {
		h2 {
			font-size: ${theme.fontSize.xxl};
			margin: 1rem auto;
		}
		h3 {
			font-size: ${theme.fontSize.xl};
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
		width: 50%;
	}
`

export { menuStyles, dishCardStyles }
