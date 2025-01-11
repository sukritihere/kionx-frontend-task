import { ChevronRight } from "lucide-react";

export function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4 font-semibold">
      <span>Cryptocurrencies</span>
      <ChevronRight className="w-4 h-4" />
      <ChevronRight className="w-4 h-4 -ml-5" />
      <span className="text-gray-900">Bitcoin</span>
    </div>
  );
}
