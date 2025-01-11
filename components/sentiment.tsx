"use client";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  InfoIcon,
  NewspaperIcon,
  TrendingUp,
  ChevronRight,
} from "lucide-react";

export function Sentiment() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Card className="rounded-md">
      <CardHeader>
        <div className="flex items-center gap-2">
          <CardTitle>Sentiment</CardTitle>
          <InfoIcon className="w-4 h-4 text-gray-500" />
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-lg font-semibold text-[#44475B]">Key Events</h3>
            <InfoIcon className="w-4 h-4 text-gray-500" />
          </div>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="flex gap-4 overflow-x-auto scrollbar-hide relative"
            >
              <Card className="min-w-[456px] bg-[#E8F4FD]">
                <CardContent className="flex gap-1 sm:gap-4 p-1 sm:p-4">
                  <div className="rounded-full bg-[#0082FF] p-2 sm:p-4 h-12 w-12 flex items-center justify-center shrink-0">
                    <NewspaperIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium sm:font-semibold mb-2">
                      Lorem ipsum dolor sit amet consectetur. Dui vel quis
                      dignissim mattis enim tincidunt.
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                      est faucibus metus quis. Amet sapien quam viverra
                      adipiscing condimentum. Ac consectetur et pretium in a
                      bibendum in. Sed vitae sit nisi viverra natoque lacinia
                      libero enim.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="min-w-[456px] bg-[#EBF9F4]">
                <CardContent className="flex gap-1 sm:gap-4 p-1 sm:p-4">
                  <div className="rounded-full bg-[#0FBA83] p-2 sm:p-4 h-12 w-12 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium sm:font-semibold mb-2">
                      Lorem ipsum dolor sit amet consectetur. Dui vel quis
                      dignissim mattis enim tincidunt.
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Lorem ipsum dolor sit amet consectetur. Ac phasellus risus
                      est faucibus metus quis. Amet sapien quam viverra
                      adipiscing condimentum. Ac consectetur et pretium in a
                      bibendum in. Sed vitae sit nisi viverra.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-8 w-8 rounded-full bg-white shadow-md"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-base sm:text-lg font-semibold text-[#44475B]">
              Analyst Estimates
            </h3>
            <InfoIcon className="w-4 h-4 text-gray-500" />
          </div>
          <div className="flex items-center gap-4 sm:gap-8">
            <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#EBF9F4] shrink-0">
              <span className="text-xl sm:text-2xl font-semibold text-[#0FBA83]">
                76%
              </span>
            </div>
            <div className="space-y-3 w-full">
              {[
                { label: "Buy", value: 76, color: "bg-[#00B386]" },
                { label: "Hold", value: 8, color: "bg-[#C7C8CE]" },
                { label: "Sell", value: 16, color: "bg-[#F7324C]" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <span className="w-8 text-xs sm:text-sm text-[#7C7E8C]">
                    {item.label}
                  </span>
                  <div className="flex items-center gap-2 w-full">
                    <div
                      className={`h-2 rounded-sm ${item.color}`}
                      style={{ width: `${item.value}%` }}
                    />
                    <span className="text-xs sm:text-sm text-[#7C7E8C] min-w-[32px]">
                      {item.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
