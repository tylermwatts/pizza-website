/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import { contactStyles } from './styles'

const Contact = (props) => {
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
