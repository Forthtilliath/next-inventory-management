"use client";

import { Bell, Menu, Moon, Settings, Sun } from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "./StoreProvider";
import { setIsDarkMode, setIsSidebarCollapsed } from "@/lib/store";

export function Navbar() {
	const dispatch = useAppDispatch();
	const isSidebarCollapsed = useAppSelector(
		(state) => state.global.isSidebarCollapsed,
	);
	const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

	return (
		<div className="flex justify-between items-center gap-5 w-full mb-7">
			{/* LEFT SIDE */}
			<div className="flex items-center gap-5 flex-1">
				<button
					type="button"
					className="p-3 bg-gray-100 rounded-full hover:bg-blue-100"
					onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
				>
					<Menu className="size-4" />
					<span className="sr-only">Toggle sidebar</span>
				</button>
				<div className="relative max-w-[22rem] flex-1 group">
					<input
						type="search"
						placeholder="Start type to search groups & products"
						className="pl-10 pr-4 py-2 w-full border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
					/>
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-on">
						<Bell
							className="text-gray-500 group-focus-within:text-blue-500"
							size={20}
						/>
						<span className="sr-only">Search</span>
					</div>
				</div>
			</div>

			{/* RIGHT SIDE */}
			<div className="flex justify-center items-center gap-5">
				<div className="hidden md:flex justify-between items-center gap-5">
					<div>
						<button
							type="button"
							onClick={() => dispatch(setIsDarkMode(!isDarkMode))}
						>
							{isDarkMode ? (
								<Sun className="cursor-pointer text-gray-500" size={24} />
							) : (
								<Moon className="cursor-pointer text-gray-500" size={24} />
							)}
							<span className="sr-only">Toggle dark mode</span>
						</button>
					</div>
					<div className="relative">
						<Bell className="cursor-pointer text-gray-500" size={24} />
						<span className="sr-only">Notifications</span>
						<span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
							3
						</span>
					</div>
					<hr className="w-0 h-7 border border-solid border-l border-gray-300 mx-3" />
					<div className="flex items-center gap-3 cursor-pointer">
						<div className="size-9">image</div>
						<span className="font-semibold">Forth</span>
					</div>
				</div>
				<Link href="/settings">
					<Settings className="cursor-pointer text-gray-500" size={24} />
					<span className="sr-only">Settings</span>
				</Link>
			</div>
		</div>
	);
}
