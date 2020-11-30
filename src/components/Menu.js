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
		font-size: ${theme.fontSize.xxl};
		font-family: ${theme.fonts.heading}, serif;
		margin: 1rem auto;
	}
	h2 {
		font-size: ${theme.fontSize.lg};
		font-family: ${theme.fonts.heading}, serif;
	}
	h3 {
		font-family: ${theme.fonts.heading}, serif;
	}
	.dish-card {
		margin: 0.5rem auto;
		width: 50%;
	}
`

const Menu = (props) => {
	const theme = useTheme()

	const menuItems = []

	const names = [
		'Pepperoni',
		'Sausage',
		'BBQ Chicken',
		'Sicilian',
		'Meat Lovers',
		'Veggie',
		'Vegan',
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
			name: names[i],
			desc:
				'A short description of the food item that includes ingredients and a taste profile.',
			price: `$${Math.ceil(Math.random() * 10 + 8)}`,
		})
	}

	return (
		<div css={menuStyles(theme)}>
			<h1>Check out our menu!</h1>
			<h2>This week's special:</h2>
			<DishCard
				props={{
					name: 'The Little Jerry',
					desc:
						'Red sauce base with pepperoni, mushrooms, and garlic, topped with Mozzarella and Parmesan cheese.',
					price: '$16',
				}}
			/>
			<h2>Our regular menu items:</h2>
			{menuItems.map((mi, index) => {
				return (
					<DishCard
						key={`dish-${index}`}
						props={mi}
						showHr={index !== menuItems.length - 1}
					/>
				)
			})}
		</div>
	)
}

const DishCard = ({ props, showHr = true }) => {
	return (
		<div className='dish-card'>
			<h3>{props.name}</h3>
			<p>{props.desc}</p>
			<p>{props.price}</p>
			{showHr && <hr />}
		</div>
	)
}

export default Menu
