/* eslint-disable no-restricted-syntax */
import { useFiltersStore } from '@/store/filtersStore'
import { useModalStore } from '@/store/modalStore'

/* eslint-disable i18next/no-literal-string */
const FiltersModalFooter = () => {
	const { applyFilters, revertFilters } = useFiltersStore()
	const { closeModal } = useModalStore()
	return (
		<footer className="flex justify-center items-center gap-16">
			{/* <button className="rounded-2xl font-semibold text-white py-[20px] px-[70px] bg-custom-buttons-brand-200">
				Apply
			</button> */}
			<button
				onClick={() => {
					revertFilters()
					closeModal()
				}}
				className="bg-red-300"
			>
				Cancel
			</button>
			<button
				onClick={() => {
					applyFilters()
					closeModal()
				}}
				className="bg-green-300"
			>
				Confirm
			</button>
		</footer>
	)
}
export default FiltersModalFooter
