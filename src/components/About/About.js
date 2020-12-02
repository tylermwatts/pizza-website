/** @jsxImportSource @emotion/react */
import { useTheme } from '@emotion/react'
import { aboutStyles } from './styles'

const About = (props) => {
	const theme = useTheme()
	return (
		<div css={aboutStyles(theme)}>
			<h1>All about my pizza website</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis
				dui a fermentum imperdiet. Nunc et mi ultricies, porta tellus eu,
				consectetur quam. Nam auctor ullamcorper nisl, ac suscipit nibh dictum
				nec. Morbi fringilla arcu enim, nec vulputate eros facilisis consequat.
				Morbi tempus, dolor nec finibus semper, orci ex hendrerit lorem, eu
				aliquet tortor nulla feugiat nisi. Quisque bibendum quam non enim
				venenatis, et vestibulum sapien bibendum. Etiam a fringilla augue, eu
				egestas nisi. Donec placerat varius risus, nec ornare enim consequat
				eget. Duis fringilla placerat ante vitae lobortis. Fusce eget volutpat
				nisi, et faucibus metus.
			</p>
			<p>
				Pellentesque accumsan scelerisque volutpat. Fusce in malesuada lorem.
				Donec efficitur eget orci in feugiat. Nullam nulla augue, aliquam vitae
				interdum varius, facilisis sit amet nisi. Pellentesque interdum, leo et
				tempus efficitur, massa quam eleifend ante, ac pellentesque felis neque
				sed dolor. Ut auctor sed ex vel iaculis. Sed posuere nunc mi, ut
				efficitur libero posuere eget. Nunc facilisis auctor aliquam. Nullam
				placerat vehicula urna id maximus. Sed nisl ligula, congue ut risus
				eget, porta facilisis enim. Donec euismod egestas urna, non fermentum
				tortor facilisis vitae. Vestibulum ante ipsum primis in faucibus orci
				luctus et ultrices posuere cubilia curae;
			</p>
			<p>
				Fusce pellentesque imperdiet ex at auctor. Morbi nec elementum orci.
				Nunc at lobortis purus. Nulla eu diam quis tortor congue accumsan vel
				vitae ex. In blandit velit magna, eget accumsan sapien convallis et.
				Vivamus commodo a nisi ac euismod. Sed tempor suscipit quam. Vivamus
				efficitur sollicitudin massa, sit amet pretium enim malesuada at.
				Quisque ultricies, risus at luctus vestibulum, enim dolor dictum risus,
				vel sagittis quam libero vitae mi. Mauris erat elit, efficitur laoreet
				posuere quis, condimentum at odio. Vestibulum pretium odio non nisl
				feugiat ullamcorper.
			</p>
			<p>
				Duis in ex et ligula tincidunt tincidunt. Proin ullamcorper ipsum orci,
				vel mattis ante vulputate quis. Praesent dui libero, lacinia in purus
				ac, congue auctor velit. Cras porttitor eros sed tempus imperdiet.
				Mauris et lectus sed urna dapibus placerat eget et massa. Donec turpis
				nibh, efficitur eu risus a, sodales placerat diam. Integer vulputate
				dignissim dictum. Morbi mollis lacinia purus. Duis lectus dolor, dapibus
				quis lobortis lacinia, feugiat molestie risus. Maecenas sagittis sapien
				eget arcu facilisis, at volutpat est consequat.
			</p>
			<p>
				In molestie arcu id laoreet sagittis. Aenean porttitor nec metus ut
				volutpat. Suspendisse et eros dui. Proin metus mi, semper mollis
				vulputate nec, commodo vel ante. Nulla facilisi. Duis orci est, lacinia
				quis porttitor vitae, blandit pretium metus. Lorem ipsum dolor sit amet,
				consectetur adipiscing elit. Nunc scelerisque lacus odio, nec laoreet
				nisl consequat fermentum.
			</p>
		</div>
	)
}

export default About
