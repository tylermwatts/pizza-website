import { css } from '@emotion/react'

export const homeStyles = (theme) => css`
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 80%;
	margin: 0 auto;
	h1 {
		text-align: center;
		font-family: ${theme.fonts.heading};
	}
	@media (min-width: ${theme.breakpoints.md}) {
		width: 50%;
	}
`
