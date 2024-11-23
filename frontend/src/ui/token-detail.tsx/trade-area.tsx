"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge, Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";

function TradeArea() {
	const [mode, setMode] = useState<"buy" | "sell">("buy");
	const [amount, setAmount] = useState("0.1");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const quickBuyAmounts = [
		{ label: "0.1%", value: "0.1" },
		{ label: "0.5%", value: "0.5" },
		{ label: "1%", value: "1" },
		{ label: "10%", value: "10" },
	];

	const quickSellPercentages = [
		{ label: "25%", value: "25" },
		{ label: "50%", value: "50" },
		{ label: "75%", value: "75" },
		{ label: "100%", value: "100" },
	];

	const handleTrade = () => {
		setIsModalOpen(true);
	};

	const handleTweetAndTrade = () => {
		// Placeholder for tweet functionality
		console.log("Tweet posted");

		// Placeholder for transaction
		console.log(
			`${mode === "buy" ? "Buying" : "Selling"} ${amount} ${
				mode === "buy" ? "SOL" : "%"
			}`,
		);

		setIsModalOpen(false);
	};

	const tweetTemplate = `I'm ${
		mode === "buy" ? "buying" : "selling"
	} ${amount} ${
		mode === "buy" ? "SOL worth of" : "% of my"
	} $TATING tokens on @YourPlatform! 🚀 #TATING #Crypto`;

	return (
		<Card className="w-full max-w-md bg-background border-0">
			<div className="space-y-4 p-4">
				<div className="grid grid-cols-2 gap-2">
					<Button
						variant={mode === "buy" ? "default" : "outline"}
						className={cn(
							"w-full",
							mode === "buy" && "bg-green-500 hover:bg-green-600",
						)}
						onClick={() => setMode("buy")}>
						Buy
					</Button>
					<Button
						variant={mode === "sell" ? "default" : "outline"}
						className={cn(
							"w-full",
							mode === "sell" && "bg-red-500 hover:bg-red-600",
						)}
						onClick={() => setMode("sell")}>
						Sell
					</Button>
				</div>

				<div className="flex items-center justify-between border-b">
					<Button variant="ghost" className="px-0 text-sm font-medium">
						Market
					</Button>
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							className="px-0 text-sm font-medium text-muted-foreground">
							Limit
						</Button>
						<Badge className="bg-yellow-500/10 text-yellow-500">Beta</Badge>
					</div>
				</div>

				<div className="space-y-2">
					<div className="relative">
						<Input
							type="number"
							value={amount}
							onChange={(e) => setAmount(e.target.value)}
							className="bg-muted/60 border-0 text-right pr-12 text-lg"
							placeholder="0.0"
						/>
						<div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
							{mode === "buy" ? "SOL" : "TATING"}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-5 gap-2">
					{(mode === "buy" ? quickBuyAmounts : quickSellPercentages).map(
						(item) => (
							<Button
								key={item.value}
								variant="outline"
								className="text-sm"
								onClick={() => setAmount(item.value)}>
								{item.label}
							</Button>
						),
					)}
					<Button variant="outline" size="icon">
						<Pencil className="h-4 w-4" />
					</Button>
				</div>

				<Button
					className={cn(
						"w-full",
						mode === "buy"
							? "bg-green-500 hover:bg-green-600"
							: "bg-red-500 hover:bg-red-600",
					)}
					onClick={handleTrade}>
					{mode === "buy" ? "Quick Buy" : "Quick Sell"} {amount}{" "}
					{mode === "buy" ? "SOL" : "%"}
				</Button>

				<div className="space-y-2">
					<div className="flex items-center justify-between text-sm">
						<span className="text-muted-foreground">Est. Received</span>
						<span>
							{mode === "buy" ? "3,496,933.91 TATING" : "0.02766 SOL"}
						</span>
					</div>
				</div>
			</div>

			<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
				<DialogContent>
					<DialogHeader>
						<DialogTitle>
							Tweet to {mode === "buy" ? "Buy" : "Sell"}
						</DialogTitle>
						<DialogDescription>
							Please tweet the following message to complete your transaction:
						</DialogDescription>
					</DialogHeader>
					<div className="mt-4 p-4 bg-muted rounded-md">
						<p>{tweetTemplate}</p>
					</div>
					<DialogFooter className="mt-6">
						<Button variant="outline" onClick={() => setIsModalOpen(false)}>
							Reject
						</Button>
						<Button onClick={handleTweetAndTrade}>
							Tweet and {mode === "buy" ? "Buy" : "Sell"}
						</Button>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</Card>
	);
}

export default TradeArea;
