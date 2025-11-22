/* eslint-disable no-restricted-syntax */

/* eslint-disable i18next/no-literal-string */
import { useEffect, useRef } from 'react'

import { useModalStore } from '@/store/modalStore'

import FiltersModal from './FiltersModal/FiltersModal'

const Filters = () => {
	const dialogRef = useRef<HTMLDialogElement>(null)
	const { openModal, isOpen } = useModalStore()
	useEffect(() => {
		const dialog = dialogRef.current
		if (!dialog) {
			return
		}

		if (isOpen) {
			dialog.showModal()
		} else {
			dialog.close()
		}
	}, [isOpen])

	return (
		<>
			<button
				className="p-4 bg-orange-400"
				onClick={openModal}
			>
				Filters
			</button>
			<FiltersModal ref={dialogRef} />
		</>
	)
}

export default Filters
