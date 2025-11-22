/* eslint-disable i18next/no-literal-string */
import { type RefObject } from 'react'

interface Props {
	ref: RefObject<HTMLDialogElement | null>
}

const ConfirmationModal = ({ ref }: Props) => {
	return (
		<dialog
			ref={ref}
			className="bg-red-500 w-full"
		>
			Confirmation
		</dialog>
	)
}
export default ConfirmationModal
