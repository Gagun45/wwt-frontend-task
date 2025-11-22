/* eslint-disable no-restricted-syntax */
import { filterItems } from '@/shared/temp/filterData.json'
import { useFiltersStore } from '@/store/filtersStore'

import Separator from '../Separator/Separator'

const FilterModalContent = () => {
	const { selected, toggleOption } = useFiltersStore()
	return (
		<>
			{filterItems.map(category => (
				<>
					<div
						key={category.id}
						className="flex flex-col gap-4"
					>
						<h3 className="text-[24px] font-medium">{category.name}</h3>
						<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-4">
							{category.options.map(option => {
								const isActive =
									selected[category.id]?.includes(option.id) ?? false
								return (
									<label
										key={option.id}
										className="flex items-center gap-4"
									>
										<input
											checked={isActive}
											type="checkbox"
											className="size-5"
											onChange={() => toggleOption(category.id, option.id)}
										/>{' '}
										{option.name}
									</label>
								)
							})}
						</div>
					</div>
					<Separator />
				</>
			))}
		</>
	)
}
export default FilterModalContent
