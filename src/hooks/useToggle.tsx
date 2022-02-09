import { useMemo, useState } from 'react'

type Handlers = Record<'on' | 'off' | 'toggle' | 'reset', () => void>

export const useToggle = (
	initialState: boolean = false
): [boolean, Handlers] => {
	const [state, setState] = useState<boolean>(initialState)
	const handlers = useMemo(
		() => ({
			on: () => {
				setState(true)
			},
			off: () => {
				setState(false)
			},
			toggle: () => {
				setState((state) => !state)
			},
			reset: () => {
				setState(initialState)
			},
		}),
		[initialState]
	)

	return [state, handlers]
}
