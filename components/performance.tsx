"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";

export function Performance() {
  return (
    <Card className="rounded-md">
      <CardHeader>
        <CardTitle>Performance</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>Today's Low</span>
              <span>Today's High</span>
            </div>
            <div className="relative px-4 sm:px-8">
              <div className="px-8 sm:px-32">
                <div className="h-[6px] rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
              </div>
              <div className="absolute top-1/2 left-[60%] -translate-x-1/2 -translate-y-1/2">
                <div className="relative flex flex-col items-center">
                  <div className="w-0 h-0 border-x-[6px] border-x-transparent border-b-[6px] border-b-black pt-2" />

                  <div className="-mb-16 text-xs sm:text-sm font-medium">
                    $48,637.83
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <span>46,930.22</span>
              <span>49,343.83</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-500">
              <span>52W Low</span>
              <span>52W High</span>
            </div>
            <div className="relative px-4 sm:px-8">
              <div className="px-8 sm:px-32">
                <div className="h-[6px] rounded-full bg-gradient-to-r from-red-500 via-yellow-500 to-green-500" />
              </div>
            </div>
            <div className="flex justify-between text-xs">
              <span>16,930.22</span>
              <span>49,743.83</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-base sm:text-lg font-semibold text-[#44475B]">
              Fundamentals
            </h3>
            <InfoIcon className="w-4 h-4 text-gray-500" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              {[
                { label: "Bitcoin Price", value: "$16,815.46" },
                {
                  label: "24h Low / 24h High",
                  value: "$16,382.07 / $16,874.12",
                },
                { label: "7d Low / 7d High", value: "$16,382.07 / $16,874.12" },
                { label: "Trading Volume", value: "$23,249,202,782" },
                { label: "Market Cap Rank", value: "#1" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between py-3 border-b border-gray-200"
                >
                  <span className="text-xs sm:text-sm text-[#768396]">
                    {item.label}
                  </span>
                  <span className="text-xs sm:text-sm font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {[
                { label: "Market Cap", value: "$323,507,290,047" },
                { label: "Market Cap Dominance", value: "38.343%" },
                { label: "Volume / Market Cap", value: "0.0718" },
                {
                  label: "All-Time High",
                  value: (
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-medium">
                        $69,044.77{" "}
                        <span className="text-red-500 text-xs sm:text-sm">
                          -75.6%
                        </span>
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        Nov 10, 2021 (about 1 year)
                      </div>
                    </div>
                  ),
                },
                {
                  label: "All-Time Low",
                  value: (
                    <div className="text-right">
                      <div className="text-xs sm:text-sm font-medium">
                        $67.81{" "}
                        <span className="text-green-500 text-xs sm:text-sm">
                          24729.1%
                        </span>
                      </div>
                      <div className="text-[10px] sm:text-xs text-gray-500">
                        Jul 06, 2013 (over 9 years)
                      </div>
                    </div>
                  ),
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between py-2 border-b border-gray-200"
                >
                  <span className="text-xs sm:text-sm text-[#768396]">
                    {item.label}
                  </span>
                  <div>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
