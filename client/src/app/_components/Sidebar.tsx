"use client";

import {
	Archive,
	CircleDollarSign,
	Clipboard,
	Layout,
	type LucideIcon,
	Menu,
	SlidersHorizontal,
	User,
} from "lucide-react";
import { useAppDispatch, useAppSelector } from "./StoreProvider";
import { setIsSidebarCollapsed } from "@/lib/store";
import { cn } from "@/lib/helpers/cn";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Sidebar() {
	const dispatch = useAppDispatch();
	const isSidebarCollapsed = useAppSelector(
		(state) => state.global.isSidebarCollapsed,
	);

	return (
		<div
			className={cn(
				"fixed flex flex-col bg-white overflow-hidden h-full shadow-md z-40",
				"transition-all duration-300",
				isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64",
			)}
		>
			{/* TOP LOGO */}
			<div
				className={cn(
					"flex gap-3 justify-between md:justify-normal items-center pt-8",
					isSidebarCollapsed ? "px-5" : "px-8",
				)}
			>
				<div>logo</div>
				<h1
					className={cn(
						"font-extrabold text-2xl",
						isSidebarCollapsed ? "hidden" : "block",
					)}
				>
					EDSTOCK
				</h1>
				<button
					type="button"
					className="md:hidden p-3 bg-gray-100 rounded-full hover:bg-blue-100"
					onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
				>
					<Menu className="size-4" />
					<span className="sr-only">Toggle sidebar</span>
				</button>
			</div>

			{/* LINKS */}
			<div className="flex-grow mt-8">
				<SidebarLink href="/dashboard" icon={Layout} label="Dashboard" />
				<SidebarLink href="/inventory" icon={Archive} label="Inventory" />
				<SidebarLink href="/products" icon={Clipboard} label="Products" />
				<SidebarLink href="/users" icon={User} label="Users" />
				<SidebarLink
					href="/settings"
					icon={SlidersHorizontal}
					label="Settings"
				/>
				<SidebarLink
					href="/expenses"
					icon={CircleDollarSign}
					label="Expenses"
				/>
			</div>

			{/* FOOTER */}
			<div className={cn("mb-10", isSidebarCollapsed ? "hidden" : "block")}>
				<p className="text-center text-xs text-gray-500">&copy; 2024 Edstock</p>
			</div>
		</div>
	);
}

type SidebarLinkProps = {
	href: string;
	icon: LucideIcon;
	label: string;
};
function SidebarLink({ href, icon: Icon, label }: SidebarLinkProps) {
	const pathname = usePathname();
	const isActive =
		pathname === href || (pathname === "/" && href === "/dashboard");
	const isSidebarCollapsed = useAppSelector(
		(state) => state.global.isSidebarCollapsed,
	);

	return (
		<Link href={href}>
			<div
				className={cn(
					"cursor-pointer flex items-center gap-3",
					isActive && "text-white bg-blue-200",
					"cursor-pointer hover:text-blue-500 hover:bg-blue-100 transition-colors",
					isSidebarCollapsed
						? "justify-center py-4"
						: "justify-start px-8 py-4",
				)}
			>
				<Icon className="size-6 !text-gray-700" />

				<span
					className={cn(
						"font-medium text-gray-700",
						isSidebarCollapsed ? "hidden" : "block",
					)}
				>
					{label}
				</span>
			</div>
		</Link>
	);
}
