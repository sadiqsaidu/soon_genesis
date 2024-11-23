import PriceMarketCapPanel from "@/components/layout/price-panel";
import ChartView from "@/ui/token-detail.tsx/chart-view";
import TokenOverview from "@/ui/token-detail.tsx/token-overview";
import TradeArea from "@/ui/token-detail.tsx/trade-area";
import React from "react";

function TokenPage() {
	return (
		<div>
			<PriceMarketCapPanel />
			<div className="grid grid-cols-1 lg:grid-cols-[350px_1fr_350px] ">
				<TokenOverview />
				<ChartView />
				<TradeArea />
			</div>
		</div>
	);
}

export default TokenPage;
