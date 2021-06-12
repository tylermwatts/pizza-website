import { SerializedStyles } from '@emotion/react';
export type ThemeValues = Record<string, any>
export type ThemedFunctionStyles = (theme: ThemeValues) => SerializedStyles

export const theme: ThemeValues = {
	breakpoints: {
		xs: '375px',
		sm: '768px',
		md: '1080px',
		lg: '1440px',
	},
	colors: {
		bg: {
			light: '#f2f2f2',
			dark: '#0f0f0f',
		},
		text: {
			black: '#0f0f0f',
			gray: '#c4c4c4',
			darkGray: '#adadad',
			light: '#f2f2f2',
			white: '#fbfbfb',
		},
	},
	fonts: {
		heading: 'Roboto Slab',
		fancy: 'Pacifico',
		sans: 'Open Sans',
	},
	fontSize: {
		xs: '.25rem',
		sm: '.50rem',
		md: '.75rem',
		base: '1rem',
		lg: '1.5rem',
		xl: '2.5rem',
		xxl: '3rem',
		xxxl: '4rem',
		huge: '6rem',
	},
}
