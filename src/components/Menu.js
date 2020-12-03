/** @jsxImportSource @emotion/react */
import { gql, useQuery } from '@apollo/client'
import { css, useTheme } from '@emotion/react'

const menuStyles = (theme) => css`
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

const dishCardStyles = (theme) => css`
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

const Menu = (props) => {
	const theme = useTheme()
	const { loading, error, data } = useQuery(MENU_ITEMS)

	if (loading) return null
	if (error) return `Error! ${error.message}`

	const special = data.special
	const starters = data.starterCollection.items
	const pizzas = data.pizzaCollection.items
	const desserts = data.dessertCollection.items

	return (
		<div css={menuStyles(theme)}>
			<h2>This week's special</h2>
			<DishCard props={special} showHr={false} />
			<h2>Starters</h2>
			{starters.map((starter, index) => {
				return (
					<DishCard
						key={`starter-${index}`}
						props={starter}
						showHr={index !== starters.length - 1}
					/>
				)
			})}
			<h2>Pizza</h2>
			{pizzas.map((pizza, index) => {
				return (
					<DishCard
						key={`pizza-${index}`}
						props={pizza}
						showHr={index !== pizzas.length - 1}
					/>
				)
			})}
			<h2>Desserts</h2>
			{desserts.map((dessert, index) => {
				return (
					<DishCard
						key={`pizza-${index}`}
						props={dessert}
						showHr={index !== desserts.length - 1}
					/>
				)
			})}
		</div>
	)
}

const DishCard = ({ props, showHr = true }) => {
	const theme = useTheme()

	return (
		<div css={dishCardStyles(theme)}>
			<h3>{props.title}</h3>
			<p>{props.description}</p>
			<p>${props.price}</p>
			{showHr && <hr />}
		</div>
	)
}

export default Menu
