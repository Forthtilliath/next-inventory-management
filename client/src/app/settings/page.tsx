"use client";

import { useState } from "react";
import { Header } from "../_components/Header";
import { cn } from "@/lib/helpers/cn";

type UserSetting = {
	label: string;
	value: string | boolean;
	// type: "text" | "toggle"
};

const mockSettings: UserSetting[] = [
	{ label: "Username", value: "john_doe" },
	{ label: "Email", value: "john.doe@example.com" },
	{ label: "Notifications", value: true },
	{ label: "Darkmode", value: true },
	{ label: "Language", value: "English" },
];

export default function SettingsPage() {
	const [userSettings, setUserSettings] = useState<UserSetting[]>(mockSettings);

	function handleToggleChange(index: number) {
		const settingsCopy = [...userSettings];
		settingsCopy[index].value = !settingsCopy[index].value;
		setUserSettings(settingsCopy);
	}
	//check mockSettings useEffect

	return (
		<div className="w-full">
			<Header>User Settings</Header>
			<div className="overflow-x-auto mt-5 shadow-md">
				<table className="min-w-full bg-white rounded-lg">
					<thead className="bg-gray-800 text-white">
						<tr>
							<th className="text-left py-3 px-4 uppercase font-semibold text-sm">
								Setting
							</th>
							<th className="text-left py-3 px-4 uppercase font-semibold text-sm">
								Value
							</th>
						</tr>
					</thead>
					<tbody>
						{userSettings.map((setting, index) => (
							<tr className="hover:bg-blue-50" key={setting.label}>
								<td className="py-2 px-4">{setting.label}</td>
								<td className="py-2 px-4">
									{/* {setting.value} */}
									{typeof setting.value === "boolean" ? (
										<label className="inline-flex relative items-center cursor-pointer">
											<input
												type="checkbox"
												className="sr-only peer"
												checked={setting.value}
												onChange={() => handleToggleChange(index)}
											/>
											<div
												className={cn(
													"w-11 h-6 bg-gray-200 rounded-full transition",
													"peer peer-focus:ring-blue-400 peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-blue-600",
													"after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all",
												)}
											/>
										</label>
									) : (
										<input
											type="text"
											className="px-4 py-2 border rounded-lg bg-gray-50 text-black focus:outline-none focus:border-blue-500"
											value={setting.value as string}
											onChange={(e) => {
												const settingsCopy = [...userSettings];
												settingsCopy[index].value = e.target.value;
												setUserSettings(settingsCopy);
											}}
										/>
									)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
