import type { RefObject } from 'react'

import FilterModalContent from './FilterModalContent/FilterModalContent'
import FiltersModalFooter from './FiltersModalFooter/FiltersModalFooter'
import FiltersModalHeader from './FiltersModalHeader/FiltersModalHeader'
import Separator from './Separator/Separator'

interface Props {
	ref: RefObject<HTMLDialogElement | null>
}

const FiltersModal = ({ ref }: Props) => {
	return (
		<dialog
			ref={ref}
			className="size-full max-w-[1280px] mx-auto mt-20 py-10 px-8 text-custom-black-grey-500"
		>
			<FiltersModalHeader />
			<Separator />
			<FilterModalContent />
			<FiltersModalFooter />
		</dialog>
	)
}
export default FiltersModal
