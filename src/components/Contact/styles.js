import { css } from '@emotion/react'

export const contactStyles = (theme) => css`
	display: flex;
	flex-direction: column;
	h1 {
		font-family: ${theme.fonts.heading}, serif;
		margin: 1rem auto;
	}
	p {
		margin: 1rem auto;
	}
`
