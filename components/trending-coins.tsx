"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    data: {
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

export function TrendingCoins() {
  const [trending, setTrending] = useState<TrendingCoin[]>([]);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        setTrending(data.coins.slice(0, 3));
      } catch (error) {
        console.error("Error fetching trending:", error);
      }
    }

    fetchTrending();
  }, []);

  return (
    <Card className="rounded-md">
      <CardHeader>
        <CardTitle className="text-xl">Trending Coins (24h)</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {trending.map((coin) => (
          <div key={coin.item.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={coin.item.thumb}
                alt={coin.item.name}
                className="w-6 h-6"
              />
              <span className="font-medium">
                {coin.item.name} ({coin.item.symbol})
              </span>
            </div>
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded ${
                coin.item.data.price_change_percentage_24h.usd > 0
                  ? "bg-green-50 text-green-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              {coin.item.data.price_change_percentage_24h.usd > 0 ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              {Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(
                2
              )}
              %
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
