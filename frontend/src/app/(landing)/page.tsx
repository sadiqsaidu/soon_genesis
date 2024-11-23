"use client";

import PriceMarketCapPanel from "@/components/layout/price-panel";
import { Button } from "@/components/ui/button";
import { TokenCreatorModal } from "@/ui/create-token-modal";
import TokenTable from "@/ui/home/tokens-table";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
	return (
		<div>
			<PriceMarketCapPanel />
			<HeroCarouselNoArrows />
			<TokenTable />
		</div>
	);
}

function HeroCarouselNoArrows() {
	// const [api, setApi] = React.useState();
	// console.log(api);
	const autoplay = React.useRef(
		Autoplay({ delay: 3500, stopOnInteraction: false }),
	);
	return (
		<Carousel
			
			// setApi={setApi}
			className="w-full"
			plugins={[autoplay.current]}
			opts={{
				align: "start",
				loop: true,
			}}>
			<CarouselContent>
				<CarouselItem className="w-full">
					<div className="h-[40vh] w-full flex flex-col gap-3 items-center justify-center">
						<p className="text-2xl font-semibold uppercase text-center">
							Trade, and earn rewards
							<br /> for promoting your favorite memecoin
						</p>
						<div className="flex items-center gap-2">
							<TokenCreatorModal>
								<Button>Create token</Button>
							</TokenCreatorModal>
							<Button variant="outline">Create campaign</Button>
						</div>
					</div>
				</CarouselItem>
				<CarouselItem className="w-full">
					<div className="h-[40vh] w-full flex flex-col gap-3 items-center justify-center">
						<p className="text-2xl font-semibold uppercase text-center">
							Create and manage
							<br /> your ad campaigns
						</p>
						<div className="flex items-center gap-2">
							<Button variant="outline">View campaigns</Button>
							<Button>Create new campaign</Button>
						</div>
					</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious className="text-foreground" />
			<CarouselNext className="text-foreground" />
		</Carousel>
	);
}
