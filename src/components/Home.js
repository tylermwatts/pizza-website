/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import Hero from './Hero'

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
		h1 {
			font-size: ${theme.fontSize.xxl};
		}
	}
`

const Home = (props) => {
	const theme = useTheme()
	return (
		<div>
			<Hero />
			<div css={homeStyles(theme)}>
				<h1>
					We here at the pizza website know a thing or two about pizzas and
					websites.
				</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis
					dui a fermentum imperdiet. Nunc et mi ultricies, porta tellus eu,
					consectetur quam. Nam auctor ullamcorper nisl, ac suscipit nibh dictum
					nec. Morbi fringilla arcu enim, nec vulputate eros facilisis
					consequat. Morbi tempus, dolor nec finibus semper, orci ex hendrerit
					lorem, eu aliquet tortor nulla feugiat nisi. Quisque bibendum quam non
					enim venenatis, et vestibulum sapien bibendum. Etiam a fringilla
					augue, eu egestas nisi. Donec placerat varius risus, nec ornare enim
					consequat eget. Duis fringilla placerat ante vitae lobortis. Fusce
					eget volutpat nisi, et faucibus metus.
				</p>
			</div>
		</div>
	)
}

export default Home
