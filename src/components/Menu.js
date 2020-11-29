/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const menuStyles = (theme) => css`
	background-color: ${theme.colors.bg.light};
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	color: ${theme.colors.text.dark};
	h1 {
		font-family: ${theme.fonts.heading}, serif;
		margin: 1rem auto;
	}
	.dish-card {
		margin: 0.5rem auto;
	}
`

const Menu = (props) => {
	const theme = useTheme()

	const menuItems = []

	const names = [
		'Spaghetti',
		'Pepperoni Pizza',
		'Hamburger',
		'Lasagna',
		'Rigatoni',
		'Ziti',
		'Fish Sticks',
	]

	for (let i = names.length - 1; i > 0; i--) {
		// Fisher-Yates Algorithm to randomize dish names
		const j = Math.floor(Math.random() * i)
		const temp = names[i]
		names[i] = names[j]
		names[j] = temp
	}

	for (let i = 0; i < 7; i++) {
		menuItems.push({
			key: `dish-${i}`,
			name: names[i],
			desc:
				'A short description of the food item that includes ingredients and a taste profile.',
			price: `$${Math.ceil(Math.random() * 10 + 8)}`,
		})
	}

	return (
		<div css={menuStyles(theme)}>
			<h1>Check out our menu!</h1>
			{menuItems.map((mi, index) => {
				return (
					<div className='dish-card' key={mi.key}>
						<h2>{mi.name}</h2>
						<p>{mi.desc}</p>
						<p>{mi.price}</p>
						{index !== menuItems.length - 1 && <hr />}
					</div>
				)
			})}
		</div>
	)
}

export default Menu
