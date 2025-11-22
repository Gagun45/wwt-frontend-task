/* eslint-disable i18next/no-literal-string */
import { useRef } from 'react'

import FiltersModal from './FiltersModal/FiltersModal'

const Filters = () => {
	const dialogRef = useRef<HTMLDialogElement>(null)

	const openModal = () => dialogRef.current?.showModal()
	const closeModal = () => dialogRef.current?.close()
	return (
		<>
			<button
				className="p-4 bg-orange-400"
				onClick={openModal}
			>
				Filters
			</button>

			<FiltersModal
				closeModal={closeModal}
				ref={dialogRef}
			/>
		</>
	)
}

export default Filters
