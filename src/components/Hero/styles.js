import { css } from '@emotion/react'

const heroStyles = (theme) => css`
	h1 {
		color: ${theme.colors.text.light};
		font-family: ${theme.fonts.heading}, serif;
		font-size: ${theme.fontSize.xl};
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
			1px 1px 0 #000;
		text-align: center;
		@media (min-width: ${theme.breakpoints.md}) {
			font-size: ${theme.fontSize.huge};
		}
	}
`

const pizzaHeroStyles = (theme, backgroundUrl) => css`
	background-image: url(${backgroundUrl});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 400px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: ${theme.breakpoints.md}) {
		height: 800px;
	}
`

export { heroStyles, pizzaHeroStyles }
