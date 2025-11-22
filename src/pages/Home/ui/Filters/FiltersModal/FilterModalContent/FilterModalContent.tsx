import { filterItems } from '@/shared/temp/filterData.json'

import Separator from '../Separator/Separator'

const FilterModalContent = () => {
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
							{category.options.map(option => (
								<label
									key={option.id}
									className="flex items-center gap-4"
								>
									<input
										type="checkbox"
										className="size-5"
									/>{' '}
									{option.name}
								</label>
							))}
						</div>
					</div>
					<Separator />
				</>
			))}
		</>
	)
}
export default FilterModalContent
