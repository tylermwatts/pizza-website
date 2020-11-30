/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import pizzaHero from '../img/pizza-hero.jpg'

const heroStyles = (theme) => css`
	h1 {
		color: ${theme.colors.text.light};
		font-family: ${theme.fonts.heading}, serif;
		font-size: ${theme.fontSize.xl};
		text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
			1px 1px 0 #000;
		text-align: center;
		@media (min-width: 1080px) {
			font-size: ${theme.fontSize.huge};
		}
	}
	.pizza-hero {
		background-image: url(${pizzaHero});
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		height: 400px;
		display: flex;
		justify-content: center;
		align-items: center;
		@media (min-width: 1080px) {
			height: 800px;
		}
	}
`

const Hero = (props) => {
	const theme = useTheme()
	return (
		<div css={heroStyles(theme)}>
			<div className='pizza-hero'>
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
