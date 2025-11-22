/* eslint-disable no-restricted-syntax */

/* eslint-disable i18next/no-literal-string */
import { type RefObject } from 'react'

import { useFiltersStore } from '@/store/filtersStore'
import { useModalStore } from '@/store/modalStore'

interface Props {
	ref: RefObject<HTMLDialogElement | null>
}

const ConfirmationModal = ({ ref }: Props) => {
	const { closeConfirmation, closeModal } = useModalStore()
	const { applyFilters, revertFilters } = useFiltersStore()
	const confirmChanges = () => {
		applyFilters()
		closeConfirmation()
		closeModal()
	}
	const cancelChanges = () => {
		revertFilters()
		closeConfirmation()
		closeModal()
	}
	return (
		<dialog
			ref={ref}
			className="text-custom-black-grey-500 w-[calc(100vw-160px)] max-w-320 mx-auto mt-[5%]"
		>
			<div className="backdrop-blur-[3px] inset-0 fixed h-screen w-screen bg-[rgba(27,27,27,0.3)] -z-10" />
			<div className="p-8 bg-white flex flex-col gap-8 lg:gap-30 items-center">
				<div className="flex justify-center items-center overflow-auto z-10 relative w-full px-8">
					<h2 className="font-medium text-xl lg:text-[40px] text-center">
						Do you want to apply new filter?
					</h2>
					<button
						onClick={closeConfirmation}
						className="absolute right-0 size-6"
						aria-label="Close confirmation modal"
					>
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M21.557 2.45816C21.4167 2.31753 21.25 2.20596 21.0665 2.12984C20.8829 2.05371 20.6862 2.01453 20.4875 2.01453C20.2889 2.01453 20.0921 2.05371 19.9086 2.12984C19.7251 2.20596 19.5584 2.31753 19.4181 2.45816L12 9.86105L4.58194 2.44299C4.4415 2.30255 4.27476 2.19114 4.09126 2.11513C3.90776 2.03912 3.71109 2 3.51247 2C3.31385 2 3.11717 2.03912 2.93367 2.11513C2.75017 2.19114 2.58344 2.30255 2.44299 2.44299C2.30255 2.58344 2.19114 2.75017 2.11513 2.93367C2.03912 3.11717 2 3.31385 2 3.51247C2 3.71109 2.03912 3.90776 2.11513 4.09126C2.19114 4.27476 2.30255 4.4415 2.44299 4.58194L9.86105 12L2.44299 19.4181C2.30255 19.5585 2.19114 19.7252 2.11513 19.9087C2.03912 20.0922 2 20.2889 2 20.4875C2 20.6862 2.03912 20.8828 2.11513 21.0663C2.19114 21.2498 2.30255 21.4166 2.44299 21.557C2.58344 21.6975 2.75017 21.8089 2.93367 21.8849C3.11717 21.9609 3.31385 22 3.51247 22C3.71109 22 3.90776 21.9609 4.09126 21.8849C4.27476 21.8089 4.4415 21.6975 4.58194 21.557L12 14.1389L19.4181 21.557C19.5585 21.6975 19.7252 21.8089 19.9087 21.8849C20.0922 21.9609 20.2889 22 20.4875 22C20.6862 22 20.8828 21.9609 21.0663 21.8849C21.2498 21.8089 21.4166 21.6975 21.557 21.557C21.6975 21.4166 21.8089 21.2498 21.8849 21.0663C21.9609 20.8828 22 20.6862 22 20.4875C22 20.2889 21.9609 20.0922 21.8849 19.9087C21.8089 19.7252 21.6975 19.5585 21.557 19.4181L14.1389 12L21.557 4.58194C22.1335 4.00549 22.1335 3.03462 21.557 2.45816Z"
								fill="#31393C"
							/>
						</svg>
					</button>
				</div>
				<div className="flex flex-col gap-8 items-center w-full justify-center md:flex-row">
					<button
						onClick={cancelChanges}
						className="confirmBtn border-2 border-custom-black-grey-200"
					>
						Use old filter
					</button>
					<button
						onClick={confirmChanges}
						className="confirmBtn bg-custom-buttons-brand-200 text-white"
					>
						Apply new filter
					</button>
				</div>
			</div>
		</dialog>
	)
}
export default ConfirmationModal
