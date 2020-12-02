/** @jsxImportSource @emotion/react */
import { gql, useQuery } from '@apollo/client'
import { useTheme } from '@emotion/react'
import { heroStyles, pizzaHeroStyles } from './styles'

const GET_HERO_LARGE = gql`
	query GetHeroLarge {
		heroImage(id: "4wZ7sB1RTr1Jm7UgLbyXHA") {
			image {
				url
			}
		}
	}
`

const Hero = (props) => {
	const theme = useTheme()

	const { loading, error, data } = useQuery(GET_HERO_LARGE)

	if (loading) return null
	if (error) return `Error! ${error.message}`

	const { url: backgroundUrl } = data.heroImage.image

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
