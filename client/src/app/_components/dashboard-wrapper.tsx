import { Navbar } from "@/app/_components/navbar";
import { Sidebar } from "@/app/_components/sidebar";

export function DashboardWrapper({ children }: WithChildren) {
  return (
    <div className="flex bg-gray-50 text-gray-900 w-full min-h-screen">
      <Sidebar />
      <main className="flex flex-col w-full h-full py-7 px-9 bg-gray-50 md:pl-24">
        <Navbar />
        {children}
      </main>
    </div>
  );
}
