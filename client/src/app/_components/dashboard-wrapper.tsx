"use client";

import { Navbar } from "@/app/_components/navbar";
import { Sidebar } from "@/app/_components/sidebar";
import StoreProvider, { useAppSelector } from "./store-provider";
import { cn } from "@/lib/helpers/cn";
import { useEffect } from "react";

export function DashboardLayout({ children }: WithChildren) {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div
      className={cn(
        "flex bg-gray-50 text-gray-900 w-full min-h-screen",
        isDarkMode ? "dark" : "light"
      )}
    >
      <Sidebar />
      <main
        className={cn(
          "flex flex-col w-full h-full py-7 px-9 bg-gray-50",
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
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
