import { gql } from '@apollo/client'

export const GET_HEADER_IMAGE = gql`
	query GetHeaderImage {
		heroImage(id: "1HZgnvhPR3ReB7W1mQ16uP") {
			image {
				headerBgUrl: url
			}
		}
	}
`

export const GET_HERO_LARGE = gql`
	query GetHeroLarge {
		heroImage(id: "4wZ7sB1RTr1Jm7UgLbyXHA") {
			image {
				url
			}
		}
	}
`

export const MENU_ITEMS = gql`
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
