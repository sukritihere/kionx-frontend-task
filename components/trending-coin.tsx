"use client";

import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TrendingCoin {
  item: {
    id: string;
    name: string;
    symbol: string;
    thumb: string;
    data: {
      price: string;
      sparkline: string;
      price_change_percentage_24h: {
        usd: number;
      };
    };
  };
}

export function TrendingCoinss() {
  const [trending, setTrending] = useState<TrendingCoin[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    async function fetchTrending() {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const data = await response.json();
        setTrending(data.coins);
      } catch (error) {
        console.error("Error fetching trending:", error);
      }
    }

    fetchTrending();
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <Card className="px-2 lg:px-40">
        <CardHeader>
          <CardTitle>Trending Coins</CardTitle>
        </CardHeader>
        <CardContent className="relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="h-8 w-8 rounded-full bg-white shadow-md"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide"
          >
            {trending.map((coin) => (
              <div
                key={coin.item.id}
                className="min-w-[200px] p-4 border rounded-lg"
              >
                <div className="flex items-center gap-2 mb-2">
                  <img
                    src={coin.item.thumb}
                    alt={coin.item.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="font-medium">{coin.item.symbol}</span>
                </div>
                <div className="font-semibold">{coin.item.data.price}</div>
                <img
                  src={coin.item.data.sparkline}
                  alt="Price graph"
                  className="w-full h-16 object-cover my-2"
                />
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="h-8 w-8 rounded-full bg-white shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
