import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import FiltersModal from './FiltersModal/FiltersModal'

const Filters = () => {
	const dialogRef = useRef<HTMLDialogElement>(null)

	const openModal = () => dialogRef.current?.showModal()
	const closeModal = () => dialogRef.current?.close()
	const { t } = useTranslation()
	return (
		<>
			<button
				className="p-4 bg-orange-400"
				onClick={openModal}
			>
				{t('qweqwe')}
			</button>

			<FiltersModal
				closeModal={closeModal}
				ref={dialogRef}
			/>
		</>
	)
}

export default Filters
