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
			className="text-custom-black-grey-500 w-[calc(100vw-160px)] h-[calc(100vh-160px)] max-w-320 mx-auto my-auto"
		>
			<div className="backdrop-blur-[25px] inset-0 fixed h-screen w-screen bg-[rgba(27,27,27,0.3)] -z-10" />
			<div className="h-full px-8 py-10 bg-white">
				<div className="z-10 bg-white h-full overflow-auto">
					<FiltersModalHeader />
					<Separator />
					<FilterModalContent />
					<FiltersModalFooter />
				</div>
			</div>
		</dialog>
	)
}
export default FiltersModal
