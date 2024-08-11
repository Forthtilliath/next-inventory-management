"use client";

import { Navbar } from "@/app/_components/Navbar";
import { Sidebar } from "@/app/_components/Sidebar";
import StoreProvider, { useAppSelector } from "./StoreProvider";
import { cn } from "@/lib/helpers/cn";

export function DashboardLayout({ children }: WithChildren) {
	const isSidebarCollapsed = useAppSelector(
		(state) => state.global.isSidebarCollapsed,
	);
	const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

	return (
		<div
			className={cn(
				"flex text-gray-900 w-full min-h-screen text-sm",
				isDarkMode ? "dark" : "light",
			)}
		>
			<Sidebar />
			<main
				className={cn(
					"flex flex-col w-full py-7 px-9 bg-gray-100",
					isSidebarCollapsed ? "md:pl-24" : "md:pl-72",
				)}
			>
				<Navbar />
				{children}
			</main>
		</div>
	);
}

export function DashboardWrapper({ children }: WithChildren) {
	return (
		<StoreProvider>
			<DashboardLayout>{children}</DashboardLayout>
		</StoreProvider>
	);
}
