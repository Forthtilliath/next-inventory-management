import { cn } from "@/lib/helpers/cn";
import { percentFormatter } from "@/lib/helpers/formatters";
import type { LucideIcon } from "lucide-react";
import React from "react";

type StatDetail = {
  title: string;
  amount: number;
  changePercentage: number;
  IconComponent: LucideIcon;
};

type Props = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetail[];
  dateRange: string;
};

export function StatCard({ title, primaryIcon, details, dateRange }: Props) {
  return (
    <div className="md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow-md rounded-2xl flex flex-col justify-between">
      {/* HEADER */}
      <div>
        <div className="flex justify-between items-center mb-2 px-5 pt-4">
          <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
          <span className="text-xs text-gray-400">{dateRange}</span>
        </div>
        <hr />
      </div>

      {/* BODY */}
      <div className="flex mb-6 items-center justify-around gap-4 px-5">
        <div className="rounded-full p-5 bg-blue-50 border-sky-300 border-[1px]">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {details.map((detail, index) => (
            <React.Fragment key={detail.title}>
              <div className="flex items-center justify-between my-4">
                <span className="text-gray-500">{detail.title}</span>
                <span className="font-bold text-gray-800">{detail.amount}</span>
                <div
                  className={cn("flex items-center", {
                    "text-green-500": detail.changePercentage >= 0,
                    "text-red-500": detail.changePercentage < 0,
                  })}
                >
                  <detail.IconComponent className={cn("size-4 mr-1")} />

                  <span className={cn("font-medium")}>
                    {percentFormatter.format(detail.changePercentage / 100)}
                  </span>
                </div>
              </div>
              {index < details.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
