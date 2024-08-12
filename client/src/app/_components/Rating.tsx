import { cn } from "@/lib/helpers/cn";
import { Star } from "lucide-react";

type Props = {
	rating: number;
};
export function Rating({ rating }: Props) {
	return [1, 2, 3, 4, 5].map((i) => (
		<Star
			key={i + 1}
			color={i <= rating ? "#FFC107" : "#E4E5E9"}
			className={cn("size-4", i <= rating && "fill-[#FFC107]")}
		/>
	));
}
