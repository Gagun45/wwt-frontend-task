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
		<footer className="flex items-center xl:gap-16 sticky bottom-0 bg-white flex-col-reverse gap-2 xl:flex-row justify-center">
			<button
				onClick={openConfirmation}
				className="rounded-2xl font-semibold text-white py-[20px] px-[70px] w-full md:w-fit bg-custom-buttons-brand-200"
			>
				Apply
			</button>
			{isConfirmationOpen && <ConfirmationModal ref={confirmationRef} />}
			<button className="font-medium underline text-center text-custom-primary-100 xl:absolute right-0">
				Clear all parameters
			</button>
		</footer>
	)
}
export default FiltersModalFooter
