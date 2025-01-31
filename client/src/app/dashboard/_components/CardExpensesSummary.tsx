import { useGetDashboardMetricsQuery } from "@/lib/api";
import { longCurrencyFormatter } from "@/lib/helpers/formatters";
import { groupByAndSum } from "@/lib/helpers/groupByAndSum";
import { avg, avgByKey, sum, sumByKey } from "@/lib/helpers/math";
import { TrendingUp } from "lucide-react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";

type ExpenseSums = {
  [category: string]: number;
};

const colors = ["#00C49F", "#0088FE", "#FFBB28"];

export function CardExpensesSummary() {
  const { data: dashboardMetrics, isLoading } = useGetDashboardMetricsQuery();

  const expensesSummary = dashboardMetrics?.expensesSummary || [];
  const expensesSummaryAvg = avgByKey(expensesSummary, "totalExpenses");

  const expensesSummaryByCategory =
    dashboardMetrics?.expensesSummaryByCategory || [];

  const expensesSummaryByCategorySums: ExpenseSums = groupByAndSum(
    expensesSummaryByCategory,
    "category",
    "amount"
  );

  const expensesByCategories: { name: string; value: number }[] = [];
  for (const [name, value] of Object.entries(expensesSummaryByCategorySums)) {
    expensesByCategories.push({ name: `${name} Expenses`, value });
  }

  const totalExpenses = sumByKey(expensesByCategories, "value").toFixed(2);

  return (
    <div className="row-span-3 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      {isLoading ? (
        <div className="m-5">Loading...</div>
      ) : (
        <>
          {/* HEADER */}
          <div>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
              Expense Summary
            </h2>
            <hr />
          </div>
          {/* BODY */}
          <div className="xl:flex justify-between pr-7">
            {/* CHART */}
            <div className="relative basis-3/5">
              <ResponsiveContainer width="100%" height={140}>
                <PieChart>
                  <Pie
                    data={expensesByCategories}
                    innerRadius={50}
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    className="outline-none"
                  >
                    {expensesByCategories.map((entry, index) => (
                      <Cell
                        key={`cell-${entry.name}`}
                        fill={colors[index % colors.length]}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center basis-2/5">
                <span className="font-bold text-xl">${totalExpenses}</span>
              </div>
            </div>
            {/* LABELS */}
            <ul className="flex flex-col justify-around items-center xl:items-start py-5 gap-3">
              {expensesByCategories.map((entry, index) => (
                <li
                  key={`legend-${entry.name}`}
                  className="flex items-center text-xs"
                >
                  <span
                    className="mr-2 w-3 h-3 rounded-full"
                    style={{ backgroundColor: colors[index % colors.length] }}
                  />
                  {entry.name}
                </li>
              ))}
            </ul>
          </div>
          {/* FOOTER */}
          <div>
            <hr />
            {expensesSummary && (
              <div className="mt-3 flex justify-between items-center px-7 mb-4">
                <div className="pt-2">
                  <p className="text-sm">
                    Average:{" "}
                    <span className="font-semibold">
                      {longCurrencyFormatter.format(expensesSummaryAvg)}
                    </span>
                  </p>
                </div>
                <span className="flex items-center mt-2">
                  <TrendingUp className="mr-2 text-green-500" />
                  30%
                </span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
