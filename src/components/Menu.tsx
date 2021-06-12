/** @jsxImportSource @emotion/react */
import { gql, useQuery } from '@apollo/client'
import { css, useTheme } from '@emotion/react'
import { ThemedFunctionStyles } from '../theme'

const menuStyles: ThemedFunctionStyles = (theme) => css`
	background-color: ${theme.colors.bg.light};
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	color: ${theme.colors.text.black};
	h2 {
		font-size: ${theme.fontSize.xl};
		font-family: ${theme.fonts.fancy}, cursive;
		margin: 1rem auto 0;
		text-decoration: underline;
	}
	h3 {
		font-size: ${theme.fontSize.lg};
		font-family: ${theme.fonts.heading}, serif;
		margin: 1rem auto 0;
	}
	p {
		margin: 1rem auto 0;
		line-height: 1.5rem;
	}
	@media (min-width: ${theme.breakpoints.md}) {
		h2 {
			font-size: ${theme.fontSize.xxl};
			margin: 1rem auto;
		}
		h3 {
			font-size: ${theme.fontSize.xl};
			margin: 1rem auto;
		}
		p {
			margin: 1rem auto;
		}
	}
`

const dishCardStyles: ThemedFunctionStyles = (theme) => css`
	margin: 0 auto;
	width: 80%;
	@media (min-width: ${theme.breakpoints.md}) {
		width: 50%;
	}
`

const MENU_ITEMS = gql`
	query GetMenuItems {
		special(id: "187WuNBMK1nc5Y8jU7DPUq") {
			title
			description
			price
		}
		starterCollection(order: rank_ASC) {
			items {
				title
				description
				price
			}
		}
		pizzaCollection(order: rank_ASC) {
			items {
				title
				description
				price
			}
		}
		dessertCollection(order: rank_ASC) {
			items {
				title
				description
				price
			}
		}
	}
`

export type Dish = {
	title: string
	description: string
	price: string
}

const Menu: React.VFC = () => {
	const theme = useTheme()
	const { loading, error, data } = useQuery(MENU_ITEMS)

	if (loading) return null
	if (error) return <div>`Error! ${error.message}`</div>

	const special: Dish = data.special
	const starters: Dish[] = data.starterCollection.items
	const pizzas: Dish[] = data.pizzaCollection.items
	const desserts: Dish[] = data.dessertCollection.items

	return (
		<div css={menuStyles(theme)}>
			<h2>This week's special</h2>
			<DishCard dish={special} showHr={false} />
			<h2>Starters</h2>
			{starters.map((starter, index) => {
				return (
					<DishCard
						key={`starter-${index}`}
						dish={starter}
						showHr={index !== starters.length - 1}
					/>
				)
			})}
			<h2>Pizza</h2>
			{pizzas.map((pizza, index) => {
				return (
					<DishCard
						key={`pizza-${index}`}
						dish={pizza}
						showHr={index !== pizzas.length - 1}
					/>
				)
			})}
			<h2>Desserts</h2>
			{desserts.map((dessert, index) => {
				return (
					<DishCard
						key={`pizza-${index}`}
						dish={dessert}
						showHr={index !== desserts.length - 1}
					/>
				)
			})}
		</div>
	)
}

export interface DishCardProps {
	dish: Dish
	showHr: boolean
}

const DishCard: React.VFC<DishCardProps> = ({ dish, showHr }) => {
	const theme = useTheme()

	return (
		<div css={dishCardStyles(theme)}>
			<h3>{dish.title}</h3>
			<p>{dish.description}</p>
			<p>${dish.price}</p>
			{showHr && <hr />}
		</div>
	)
}

export default Menu
