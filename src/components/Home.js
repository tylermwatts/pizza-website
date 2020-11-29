/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import Hero from './Hero'

const Home = (props) => {
	const theme = useTheme()
	return (
		<div>
			<Hero />
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					flexDirection: 'column',
					margin: '0 1rem',
				}}
			>
				<h1
					style={{ textAlign: 'center', fontFamily: `${theme.fonts.heading}` }}
				>
					Lorem ipsum dolor sit amet
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