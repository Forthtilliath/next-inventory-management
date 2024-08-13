"use client";

import { useGetExpensesByCategoryQuery } from "@/lib/api";
import { type LabelHTMLAttributes, useMemo, useState } from "react";
import { Header } from "@/app/_components/Header";
import {
	Cell,
	Legend,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
} from "recharts";
import type { ExpenseSummaryByCategory } from "@/lib/schemas";
import { cn } from "@/lib/helpers/cn";

const PIE_FILL_COLORS = ["#008ffb", "#00e396", "#feb019", "#ff4560", "#775dd0"];

type AggregatedDataItem = {
	name: string;
	color?: string;
	amount: number;
};

type AggregatedData = {
	[category: string]: AggregatedDataItem;
};

export default function ExpensesPage() {
	const [activeIndex, setActiveIndex] = useState(0);
	const [selectedCategory, setSelectedCategory] = useState("All");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");

	const {
		data: expensesData,
		isLoading,
		isError,
	} = useGetExpensesByCategoryQuery();
	const expenses = useMemo(() => expensesData ?? [], [expensesData]);

	const parseDate = (dateString: Date) => {
		const date = new Date(dateString);
		return date.toISOString().split("T")[0];
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: parseDate changes on every re-render
	const aggregatedData: AggregatedDataItem[] = useMemo(() => {
		const filtered: AggregatedData = expenses
			.filter((data: ExpenseSummaryByCategory) => {
				const matchesCategory =
					selectedCategory === "All" || data.category === selectedCategory;
				const dataDate = parseDate(data.date);
				const matchesDate =
					!startDate ||
					!endDate ||
					(dataDate >= startDate && dataDate <= endDate);
				return matchesCategory && matchesDate;
			})
			.reduce((acc: AggregatedData, data: ExpenseSummaryByCategory) => {
				const amount = data.amount;
				if (!acc[data.category]) {
					acc[data.category] = { name: data.category, amount: 0 };
					acc[data.category].color = `#${Math.floor(
						Math.random() * 16777215,
					).toString(16)}`;
					acc[data.category].amount += amount;
				}
				return acc;
			}, {});

		return Object.values(filtered);
	}, [expenses, selectedCategory, startDate, endDate]);

	const classNames = {
		selectInput:
			"mt-1 block w-full pl-3 pr-10 py-2 text-base ring-1 border-black bg-gray-50 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md",
	};

	if (isLoading) {
		return <div className="py-4">Loading...</div>;
	}

	if (isError || !expensesData) {
		return (
			<div className="text-center text-red-500 py-4">
				Failed to fetch expenses
			</div>
		);
	}

	return (
		<div>
			{/* HEADER */}
			<div className="mb-5">
				<Header>Expenses</Header>
				<p className="text-sm text-gray-500">
					A visual representation of expenses over time.
				</p>
			</div>

			{/* FILTERS */}
			<div className="flex flex-col md:flex-row justify-between gap-4">
				<div className="w-full md:w-1/3 bg-white shadow rounded-lg p-6">
					<h3 className="text-lg font-semibold mb-4">
						Filter by Category and Date
					</h3>
					<div className="space-y-4">
						{/* CATEGORY */}
						<div>
							<Field
								label="Category"
								type="select"
								id="category"
								defaultValue="All"
								onChange={(e) => setSelectedCategory(e.target.value)}
							>
								<option>All</option>
								<option>Office</option>
								<option>Professional</option>
								<option>Salaries</option>
							</Field>
						</div>
						{/* START DATE */}
						<div>
							<Field
								label="Start Date"
								type="date"
								id="start-date"
								onChange={(e) => setStartDate(e.target.value)}
							/>
						</div>
						{/* END DATE */}
						<div>
							<Field
								label="End Date"
								type="date"
								id="end-date"
								onChange={(e) => setEndDate(e.target.value)}
							/>
						</div>
					</div>
				</div>
				{/* PIE CHART */}
				<div className="flex-grow bg-white shadow rounded-lg p-4 md:p-6">
					<ResponsiveContainer width="100%" height={400}>
						<PieChart>
							<Pie
								data={aggregatedData}
								cx="50%"
								cy="50%"
								label
								outerRadius={150}
								dataKey="amount"
								className="outline-none"
							>
								{aggregatedData.map(
									(entry: AggregatedDataItem, index: number) => (
										<Cell
											key={`cell-${entry.name}`}
											fill={PIE_FILL_COLORS[index % PIE_FILL_COLORS.length]}
											className="hover:fill-gray-500 hover:stroke-2 outline-none"
										/>
									),
								)}
							</Pie>
							<Tooltip />
							<Legend />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</div>
	);
}

function Label({
	children,
	className,
	...props
}: WithChildren<LabelHTMLAttributes<HTMLLabelElement>>) {
	return (
		<label
			className={cn("block text-sm font-medium text-gray-700", className)}
			{...props}
		>
			{children}
		</label>
	);
}

type Value = string | number | readonly string[] | undefined;

type InputProps<T extends Value> = {
	label: string;
	type: "date";
	defaultValue?: T;
	id: string;
	onChange?: React.ChangeEventHandler<HTMLInputElement>;
	className?: string;
	children?: never;
};
type SelectProps<T extends Value> = WithChildren<{
	label: string;
	type: "select";
	defaultValue?: T;
	id: string;
	onChange?: React.ChangeEventHandler<HTMLSelectElement>;
	className?: string;
}>;
type FieldProps<T extends Value> = InputProps<T> | SelectProps<T>;
function Field<T extends Value>({
	type,
	className,
	id,
	children,
	label,
	onChange,
	...props
}: FieldProps<T>) {
	if (type === "select") {
		return (
			<>
				<Label htmlFor={id}>{label}</Label>
				<select
					id={id}
					name={id}
					className={cn(
						"mt-1 block w-full pl-3 pr-10 py-2 text-base ring-1 bg-gray-50 sm:text-sm rounded-md border-r-[0.75rem] border-transparent",
            "focus:ring-indigo-500",
						className,
					)}
					onChange={onChange}
					{...props}
				>
					{children}
				</select>
			</>
		);
	}

	if (type === "date") {
		return (
			<>
				<Label htmlFor={id}>{label}</Label>
				<input
					type="date"
					id={id}
					name={id}
					className={cn(
						"mt-1 block w-full px-3 py-2 text-base ring-1 bg-gray-50 sm:text-sm rounded-md",
						"focus:ring-indigo-500",
            " dark:[color-scheme:dark]",
						className,
					)}
					onChange={onChange}
				/>
			</>
		);
	}

	throw new Error(`Invalid type: ${type}`);
}
