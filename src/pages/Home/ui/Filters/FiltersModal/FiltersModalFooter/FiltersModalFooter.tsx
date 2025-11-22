/* eslint-disable no-restricted-syntax */
import { useEffect, useRef } from 'react'

import { useModalStore } from '@/store/modalStore'

import ConfirmationModal from './ConfirmationModal/ConfirmationModal'

/* eslint-disable i18next/no-literal-string */
const FiltersModalFooter = () => {
	const confirmationRef = useRef<HTMLDialogElement>(null)
	const { isConfirmationOpen, openConfirmation } = useModalStore()
	useEffect(() => {
		const dialog = confirmationRef.current
		if (!dialog) {
			return
		}

		if (isConfirmationOpen) {
			dialog.showModal()
		} else {
			dialog.close()
		}
	}, [isConfirmationOpen])
	return (
		<footer className="flex justify-center items-center gap-16">
			<button
				onClick={openConfirmation}
				className="rounded-2xl font-semibold text-white py-[20px] px-[70px] bg-custom-buttons-brand-200"
			>
				Apply
			</button>
			{isConfirmationOpen && <ConfirmationModal ref={confirmationRef} />}
		</footer>
	)
}
export default FiltersModalFooter
