/* eslint-disable no-restricted-syntax */
import { filterItems } from '@/shared/temp/filterData.json'
import { useFiltersStore } from '@/store/filtersStore'

import Separator from '../Separator/Separator'

const FilterModalContent = () => {
	const { tempFilters, toggleTempOption } = useFiltersStore()

	return (
		<>
			{filterItems.map(category => (
				<div
					key={category.id}
					className="flex flex-col gap-4"
				>
					<h3 className="text-[24px] font-medium">{category.name}</h3>
					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4">
						{category.options.map(option => {
							const currentFilter = tempFilters.find(
								filter => filter.id === category.id
							)
							const isActive =
								currentFilter?.optionsIds.includes(option.id) ?? false

							return (
								<label
									key={option.id}
									className="flex items-center gap-4"
								>
									<input
										type="checkbox"
										className="size-5"
										checked={isActive}
										onChange={() => toggleTempOption(category.id, option.id)}
									/>
									{option.name}
								</label>
							)
						})}
					</div>
					<Separator />
				</div>
			))}
		</>
	)
}

export default FilterModalContent
