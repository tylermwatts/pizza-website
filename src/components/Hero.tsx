/** @jsxImportSource @emotion/react */
import { css, SerializedStyles, useTheme } from '@emotion/react'
import { useQueryContext } from '../context/QueryContext'
import { ThemedFunctionStyles, ThemeValues } from '../theme'

const heroStyles: ThemedFunctionStyles = (theme) => css`
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

const pizzaHeroStyles: (
	theme: ThemeValues,
	backgroundUrl: string
) => SerializedStyles = (theme, backgroundUrl) => css`
	background-image: url(${backgroundUrl});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	height: 500px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (min-width: ${theme.breakpoints.md}) {
		height: 800px;
	}
`

const Hero: React.VFC = () => {
	const theme = useTheme()
	const { getHeroImage } = useQueryContext()

	const { loading, error, data } = getHeroImage

	if (loading) return null
	if (error) return <div>{`Error! ${error.message}`}</div>

	const { url: backgroundUrl } = data!.heroImage.image

	return (
		<div css={heroStyles(theme)}>
			<div css={pizzaHeroStyles(theme, backgroundUrl)}>
				<h1>
					Pizza.
					<br />
					As it should be.
				</h1>
			</div>
		</div>
	)
}

export default Hero
