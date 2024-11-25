"use client";

import { useState } from "react";
import { BarChart3, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { db, Ad } from "@/lib/test-db";

export function Dashboard() {
	const [ads, setAds] = useState<Ad[]>([]);
	const [selectedAd, setSelectedAd] = useState<Ad | null>(null);
	const [showPaymentModal, setShowPaymentModal] = useState(false);

	const handlePayment = async () => {
		if (!selectedAd) return;

		await new Promise((resolve) => setTimeout(resolve, 1000));
		const updatedAd = db.ads.updatePaidStatus(selectedAd.id, true);
		if (updatedAd) {
			setAds(db.ads.getAll());
			setShowPaymentModal(false);
		}
	};

	const handleTweetAndBuy = async (ad: Ad) => {
		setSelectedAd(ad);
		setShowPaymentModal(true);
	};

	return (
		<div className="p-6">
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Ads</CardTitle>
						<BarChart3 className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{ads.length}</div>
					</CardContent>
				</Card>
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Tweets</CardTitle>
						<Twitter className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">
							{ads.reduce((sum, ad) => sum + ad.tweetCount, 0)}
						</div>
					</CardContent>
				</Card>
			</div>

			<div className="mt-6">
				<h2 className="text-lg font-semibold mb-4">Your Ads</h2>
				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
					{ads.map((ad) => (
						<Card key={ad.id}>
							<CardHeader>
								<CardTitle className="text-base">{ad.tweetText}</CardTitle>
								<CardDescription>
									Budget: {ad.budget} ADS • {ad.tweetCount} tweets
								</CardDescription>
							</CardHeader>
							<CardContent>
								<Button
									className="w-full"
									disabled={ad.paid}
									onClick={() => handleTweetAndBuy(ad)}>
									{ad.paid ? "Active" : "Tweet & Buy"}
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>

			<Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>Confirm Your Ad Purchase</DialogTitle>
						<DialogDescription>
							You are about to purchase this ad for {selectedAd?.budget} ADS
							tokens. This will also tweet the ad content to your timeline.
						</DialogDescription>
					</DialogHeader>
					<div className="mt-4">
						<Button onClick={handlePayment} className="w-full">
							Confirm Payment & Tweet
						</Button>
					</div>
				</DialogContent>
			</Dialog>
		</div>
	);
}
