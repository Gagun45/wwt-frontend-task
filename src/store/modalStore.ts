import { create } from 'zustand'

interface ModalStore {
	isModalOpen: boolean
	openModal: () => void
	closeModal: () => void
	isConfirmationOpen: boolean
	openConfirmation: () => void
	closeConfirmation: () => void
}

export const useModalStore = create<ModalStore>(set => ({
	isModalOpen: false,
	openModal: () => set({ isModalOpen: true }),
	closeModal: () => set({ isModalOpen: false }),
	isConfirmationOpen: false,
	openConfirmation: () => set({ isConfirmationOpen: true }),
	closeConfirmation: () => set({ isConfirmationOpen: false })
}))
