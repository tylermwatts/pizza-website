/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import { footerStyles } from './styles'

const Footer = (props) => {
	const theme = useTheme()
	return (
		<footer css={footerStyles(theme)}>
			<p>© Tyler Watts 2020</p>
			<p>All rights reserved.</p>
		</footer>
	)
}

export default Footer
