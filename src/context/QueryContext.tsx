import { QueryResult, useQuery } from '@apollo/client'
import { createContext, useContext } from 'react'
import { GET_HEADER_IMAGE, GET_HERO_LARGE, MENU_ITEMS } from '../queries'

type Dish = {
	title: string
	description: string
	price: string
}

type DishCollection = {
	items: Dish[]
}

type HeaderImageData = {
	heroImage: {
		image: {
			headerBgUrl: string
		}
	}
}
type HeroImageData = {
	heroImage: {
		image: {
			url: string
		}
	}
}
type MenuItemData = {
	special: Dish
	starterCollection: DishCollection
	pizzaCollection: DishCollection
	dessertCollection: DishCollection
}

export interface IQueryContext {
	getHeaderImage: QueryResult<HeaderImageData>
	getHeroImage: QueryResult<HeroImageData>
	getMenuItems: QueryResult<MenuItemData>
}

export const QueryContext = createContext<IQueryContext>(
	undefined as unknown as IQueryContext
)
export const useQueryContext = (): IQueryContext => useContext(QueryContext)

const QueryContextProvider: React.FC = ({ children }) => {
	const getHeaderImage = useQuery<HeaderImageData>(GET_HEADER_IMAGE)
	const getHeroImage = useQuery<HeroImageData>(GET_HERO_LARGE)
	const getMenuItems = useQuery<MenuItemData>(MENU_ITEMS)

	return (
		<QueryContext.Provider
			value={{
				getHeaderImage,
				getHeroImage,
				getMenuItems,
			}}
		>
			{children}
		</QueryContext.Provider>
	)
}

export default QueryContextProvider
