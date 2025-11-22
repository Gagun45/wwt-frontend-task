interface Props {
	className?: string
}

const Separator = ({ className }: Props) => {
	return (
		<svg
			className={`w-full h-[2px] my-8 ${className}`}
			viewBox="0 0 1214 2"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M1 1H1213"
				stroke="#B4B4B4"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	)
}
export default Separator
