/* eslint-disable no-restricted-syntax */

/* eslint-disable i18next/no-literal-string */
import { useEffect, useRef } from 'react'

import { useFiltersStore } from '@/store/filtersStore'
import { useModalStore } from '@/store/modalStore'

import ConfirmationModal from './ConfirmationModal/ConfirmationModal'

const FiltersModalFooter = () => {
	const confirmationRef = useRef<HTMLDialogElement>(null)
	const { isConfirmationOpen, openConfirmation, closeConfirmation } =
		useModalStore()
	const { resetFilters } = useFiltersStore()
	useEffect(() => {
		const dialog = confirmationRef.current
		if (!dialog) {
			return
		}

		dialog.addEventListener('close', () => closeConfirmation())

		if (isConfirmationOpen) {
			dialog.showModal()
		} else if (dialog.open) {
			dialog.close()
		}

		return () => {
			dialog.removeEventListener('close', () => closeConfirmation())
		}
	}, [isConfirmationOpen, closeConfirmation])
	return (
		<div className="flex items-center xl:gap-16 sticky bottom-0 bg-white flex-col-reverse gap-2 xl:flex-row justify-center">
			<button
				onClick={openConfirmation}
				className="rounded-2xl font-semibold text-white py-[20px] px-[70px] w-full md:w-fit bg-custom-buttons-brand-200"
			>
				Apply
			</button>
			<button
				onClick={resetFilters}
				className="font-medium underline text-center text-custom-primary-100 xl:absolute right-0"
			>
				Clear all parameters
			</button>
			{isConfirmationOpen && <ConfirmationModal ref={confirmationRef} />}
		</div>
	)
}
export default FiltersModalFooter
