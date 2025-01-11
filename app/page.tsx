import { CryptoOverview } from "@/components/crypto-overview";
import { TrendingCoins } from "@/components/trending-coins";
import { YouMayLike } from "@/components/you-may-like";
import { Performance } from "@/components/performance";
import { Sentiment } from "@/components/sentiment";
import AboutBitcoin from "@/components/about-bitcoin";
import Tokenomics from "@/components/tokenomics";
import { Team } from "@/components/team";
import { Breadcrumb } from "@/components/breadcrumb";
import { Tabs } from "@/components/tabs";
import { Button } from "@/components/ui/button";
import { TrendingCoinss } from "@/components/trending-coin";

function GetStartedCard() {
  return (
    <div className="bg-[#0052FE] text-white rounded-lg p-6 sm:p-8 md:p-10 text-center">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
        Get Started with KoinX for FREE
      </h2>
      <p className="text-sm sm:text-base md:text-lg mb-6">
        With our range of features that you can equip for free, KoinX allows you
        to be more educated and aware of your tax reports.
      </p>
      <img
        src="/sideFrame.svg"
        alt="Get Started"
        className="mx-auto mb-6 w-[178px] h-[166px] object-contain"
        width={178}
        height={166}
      />
      <Button
        variant="secondary"
        size="lg"
        className="w-full hover:bg-white/90 transition-colors"
      >
        Get Started for FREE →
      </Button>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFF2F5]">
      <div className=" py-4 px-4 sm:px-6 md:px-8 lg:px-10">
        <Breadcrumb />
      </div>

      <div className=" py-4 px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="flex-1 space-y-5">
            <CryptoOverview />
            <Tabs />
            <Performance />
            <Sentiment />
            <AboutBitcoin />
            <Tokenomics />
            <Team />
          </div>

          <div className="hidden xl:block xl:w-[352px] space-y-5">
            <GetStartedCard />
            <TrendingCoins />
          </div>
        </div>
      </div>
      <YouMayLike />
      <TrendingCoinss />

      <div className="xl:hidden container mx-auto py-4 px-4 sm:px-6 md:px-8 space-y-5">
        <GetStartedCard />
        <TrendingCoins />
      </div>
    </main>
  );
}
