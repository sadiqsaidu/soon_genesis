import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Star } from "lucide-react";

function PriceMarketCapPanel() {
	return (
		<div className="w-full border-b flex items-center h-[62px] ">
			<div className="flex gap-2 border-r py-2 px-3">
				<div className="text-xs flex items-center gap-1">
					<Star className="w-3 h-3 mr-1 fill-white" />
					<span> Watchlist</span>
				</div>
				<Select>
					<SelectTrigger className="bg-secondary  w-fit">
						<SelectValue className="text-xs" placeholder="OR" />
						{/* <ChevronDown className="w-2 h-2" /> */}
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="PR">Price</SelectItem>
						<SelectItem value="mcp">Market cap</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="px-3 border-r h-full flex items-center justify-center">
				<span className="text-muted-foreground mr-2">Sol</span>
				<span>$230</span>
			</div>
		</div>
	);
}

export default PriceMarketCapPanel;
