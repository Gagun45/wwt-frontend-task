import type { RefObject } from 'react'

import FiltersModalHeader from './FiltersModalHeader/FiltersModalHeader'
import Separator from './Separator/Separator'

interface Props {
	ref: RefObject<HTMLDialogElement | null>
}

const FiltersModal = ({ ref }: Props) => {
	return (
		<dialog
			ref={ref}
			className="size-full max-w-[1280px] mx-auto mt-20 py-10 px-8 text-center"
		>
			<FiltersModalHeader />
			<Separator />
		</dialog>
	)
}
export default FiltersModal
