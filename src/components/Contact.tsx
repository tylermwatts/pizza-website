/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import { ThemedFunctionStyles, ThemeValues } from '../theme'

const contactStyles: ThemedFunctionStyles = (theme: ThemeValues) => css`
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

const Contact: React.VFC = () => {
	const theme = useTheme()
	return (
		<div css={contactStyles(theme)}>
			<h1>How to contact us:</h1>
			<p>
				By phone:{' '}
				<a target='_blank' rel='noreferrer' href='tel:5558675309'>
					555-867-5309
				</a>
			</p>
			<p>
				By email:{' '}
				<a target='_blank' rel='noreferrer' href='mailto:pizza@website.org'>
					pizza@website.org
				</a>
			</p>
		</div>
	)
}

export default Contact
