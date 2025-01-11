"use client";

import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import TradingViewWidget from "./TradingViewWidget";

interface BitcoinPrice {
  bitcoin: {
    inr: number;
    inr_24h_change: number;
    usd: number;
    usd_24h_change: number;
  };
}

export function CryptoOverview() {
  const [price, setPrice] = useState<BitcoinPrice | null>(null);
  const [selectedPeriod, setSelectedPeriod] = useState("7D");

  useEffect(() => {
    async function fetchPrice() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr,usd&include_24hr_change=true"
        );
        const data = await response.json();
        setPrice(data);
      } catch (error) {
        console.error("Error fetching price:", error);
      }
    }

    fetchPrice();
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 rounded-md">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <img
            src="/image-1lpDEpPkfzqpHqL4R9YuMA5o4DRTEh.avif"
            alt="Bitcoin"
            className="w-9 h-9"
          />
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold">Bitcoin</h1>
            <span className="text-gray-500 text-sm">BTC</span>
          </div>
          <div className="px-3 py-2 bg-gray-500 text-white rounded text-sm">
            Rank #1
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold">
              ${price?.bitcoin.usd.toLocaleString()}
            </span>
            <div className="flex items-center gap-1 px-2 py-1 rounded bg-[#EBF9F4] text-[#14B079]">
              <TrendingUp className="w-4 h-4" />
              2.51%
            </div>
            <span className="text-gray-500">(24H)</span>
          </div>
          <div className="text-gray-500">
            ₹ {price?.bitcoin.inr.toLocaleString()}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm sm:text-lg font-semibold text-[#0B1426] mb-2 sm:mb-0">
              Bitcoin Price Chart (USD)
            </div>

            <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm">
              {["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"].map(
                (period) => (
                  <button
                    key={period}
                    onClick={() => setSelectedPeriod(period)}
                    className={`px-1 sm:px-3 py-1 rounded-full ${
                      period === selectedPeriod
                        ? "bg-[#E2ECFE] text-[#0141CF] font-medium"
                        : "text-[#5B667C] hover:bg-gray-100"
                    }`}
                  >
                    {period}
                  </button>
                )
              )}
            </div>
          </div>
        </div>

        <div className="w-full h-[400px] bg-white">
          <TradingViewWidget />
        </div>
      </div>
    </Card>
  );
}
