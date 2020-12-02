import { css } from '@emotion/react'

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
