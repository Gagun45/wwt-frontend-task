/* eslint-disable no-restricted-syntax */

/* eslint-disable i18next/no-literal-string */
import { useEffect, useRef } from 'react'

import type { FilterType } from '@/shared/api/types/Filter'
import type { SearchRequestFilter } from '@/shared/api/types/SearchRequest/SearchRequestFilter'
import { useFiltersStore } from '@/store/filtersStore'
import { useModalStore } from '@/store/modalStore'

import FiltersModal from './FiltersModal/FiltersModal'

const Filters = () => {
	const dialogRef = useRef<HTMLDialogElement>(null)
	const { appliedFilters } = useFiltersStore()
	const filtersJSON: SearchRequestFilter = Object.entries(appliedFilters)
		.map(([filterId, { optionsIds }]) => ({
			id: filterId,
			type: 'OPTION' as FilterType,
			optionsIds: optionsIds
		}))
		.filter(cat => cat.optionsIds.length > 0)
	const { openModal, isModalOpen, closeModal } = useModalStore()
	useEffect(() => {
		const dialog = dialogRef.current
		if (!dialog) {
			return
		}

		const handleClose = () => {
			// update Zustand store when dialog is closed manually
			closeModal()
		}

		dialog.addEventListener('close', handleClose)

		// show/hide based on store
		if (isModalOpen) {
			dialog.showModal()
		} else if (dialog.open) {
			dialog.close()
		}

		return () => {
			dialog.removeEventListener('close', handleClose)
		}
	}, [isModalOpen, closeModal])

	return (
		<>
			<button
				className="p-4 bg-orange-400"
				onClick={openModal}
			>
				Filters
			</button>
			<FiltersModal ref={dialogRef} />
			<div>{JSON.stringify(filtersJSON)}</div>
		</>
	)
}

export default Filters
