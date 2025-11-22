import { create } from 'zustand'

export type SelectedFilters = {
	[categoryId: string]: string[]
}

interface FiltersState {
	selected: SelectedFilters
	toggleOption: (categoryId: string, optiodId: string) => void
	clearFilters: () => void
	setFilters: (filters: SelectedFilters) => void
}

export const useFiltersStore = create<FiltersState>(set => ({
	selected: {},
	toggleOption: (categoryId, optionId) =>
		set(state => {
			const existing = state.selected[categoryId] ?? []
			const isSelected = existing.includes(optionId)
			return {
				selected: {
					...state.selected,
					[categoryId]: isSelected
						? existing.filter(id => id !== optionId)
						: [...existing, optionId]
				}
			}
		}),
	clearFilters: () => set(() => ({ selected: {} })),
	setFilters: filters => set({ selected: filters })
}))
