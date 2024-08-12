import { createRef, useCallback, useEffect } from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
	onOutsideClick: () => void;
};

export function OutsideClickHandler({
	onOutsideClick = () => {},
	children,
	className,
}: Props) {
	const wrapperRef = createRef<HTMLDivElement>();

	const handleClickOutside = useCallback(
		(event: MouseEvent) => {
			if (wrapperRef.current === event.target) {
				onOutsideClick();
			}
		},
		[onOutsideClick, wrapperRef],
	);

	useEffect(() => {
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [handleClickOutside]);

	return (
		<div ref={wrapperRef} className={className}>
			{children}
		</div>
	);
}
