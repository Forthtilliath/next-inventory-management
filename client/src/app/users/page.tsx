"use client";

import { useGetUsersQuery } from "@/lib/api";
import { Header } from "@/app/_components/Header";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
	{ field: "userId", headerName: "ID", width: 90 },
	{ field: "name", headerName: "Name", width: 200 },
	{ field: "email", headerName: "Email", width: 200 },
];

export default function Users() {
	const { data: users, isError, isLoading } = useGetUsersQuery();

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !users) {
		return (
			<div className="text-center text-red-500 py-4">Failed to fetch users</div>
		);
	}

	return (
		<div className="flex flex-col">
			<Header>Users</Header>
			<DataGrid
				rows={users}
				columns={columns}
				getRowId={(row) => row.userId}
				checkboxSelection
				className="bg-white shadow rounded-lg border border-gray-200 mt-5 !text-gray-700"
			/>
		</div>
	);
}
