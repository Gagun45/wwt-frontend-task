import { create } from 'zustand'

import type { FilterType } from '@/shared/api/types/Filter'
import type { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'

export type SelectedFilters = {
	[categoryId: string]: string[]
}

interface FiltersState {
	appliedFilters: SearchRequestFilter
	tempFilters: SearchRequestFilter

	toggleTempOption: (filterId: string, optionId: string) => void
	applyFilters: () => void
	revertFilters: () => void
	resetFilters: () => void
}

export const useFiltersStore = create<FiltersState>((set, get) => ({
	filterItems: [],
	appliedFilters: [],
	tempFilters: [],
	toggleTempOption: (filterId, optionId) =>
		set(state => {
			const temp = [...state.tempFilters]
			const index = temp.findIndex(filter => filter.id === filterId)
			if (index >= 0) {
				const currentOptions = temp[index].optionsIds
				const newOptions = currentOptions.includes(optionId)
					? currentOptions.filter(id => id !== optionId)
					: [...currentOptions, optionId]
				temp[index] = { ...temp[index], optionsIds: newOptions }
			} else {
				temp.push({
					id: filterId,
					type: 'OPTION' as FilterType,
					optionsIds: [optionId]
				})
			}
			// If category length changed to 0 ---> remove it instead of keeping with empty optionsIds array
			const parsedTemp = temp.filter(category => category.optionsIds.length > 0)
			return { tempFilters: parsedTemp }
		}),
	applyFilters: () => {
		const { tempFilters } = get()
		set({ appliedFilters: [...tempFilters] })
	},
	revertFilters: () => {
		const { appliedFilters } = get()
		set({ tempFilters: [...appliedFilters] })
	},
	resetFilters: () => set({ appliedFilters: [], tempFilters: [] })
}))
