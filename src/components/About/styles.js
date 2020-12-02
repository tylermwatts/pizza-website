import { css } from '@emotion/react'

export const aboutStyles = (theme) => css`
	margin: 0 2rem;
	h1 {
		color: ${theme.colors.text.black};
		font-family: ${theme.fonts.heading}, serif;
		text-align: center;
		font-size: ${theme.fontSize.xl};
	}
	@media (min-width: ${theme.breakpoints.md}) {
		h1 {
			font-size: ${theme.fontSize.huge};
		}
	}
`
