"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";

function TokenOverview() {
	return (
		<Card className="border-none border-r p-0 border-x">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
				<div className="flex items-center gap-2">
					<div className="h-8 w-8 rounded-full bg-primary/20" />
					<div>
						<h2 className="text-sm font-bold">TATING</h2>
						<p className="text-xs text-muted-foreground">9dBsp_bpump</p>
					</div>
				</div>
			</CardHeader>
			<CardContent className="space-y-2 w-full p-3">
				<div className="grid grid-cols-3 gap-4">
					<div>
						<p className="text-xs text-muted-foreground">Price USD</p>
						<p className=" font-bold">$0.094858</p>
					</div>
					<div>
						<p className="text-xs text-muted-foreground">Price SOL</p>
						<p className=" font-bold">0.038676</p>
					</div>
					<div>
						<p className="text-xs text-muted-foreground">Age</p>
						<p className=" font-bold">16m</p>
					</div>
				</div>

				<div className="grid grid-cols-3 gap-4">
					<div>
						<p className="text-xs text-muted-foreground">Mkt Cap</p>
						<p className="font-bold underline underline-offset-1">$9.49K</p>
					</div>
					<div>
						<p className="text-xs text-muted-foreground">FDV</p>
						<p className="font-bold underline underline-offset-1">$8.66K</p>
					</div>
					<div>
						<p className="text-xs text-muted-foreground">Liquidity</p>
						<p className="font-bold underline underline-offset-1">$7.98K</p>
					</div>
				</div>

				<Card className="overflow-hidden">
					<div className="grid grid-cols-4 ">
						{[
							{ label: "5m", value: "+36.13%" },
							{ label: "1h", value: "+36.13%" },
							{ label: "6h", value: "+36.13%" },
							{ label: "24h", value: "+36.13%" },
						].map((item) => (
							<div
								key={item.label}
								className="bg-card p-2 flex flex-col items-center border flex-1">
								<p className="text-xs text-muted-foreground">{item.label}</p>
								<p className="text-sm font-bold text-green-500">{item.value}</p>
							</div>
						))}
					</div>

					<div className="space-y-2 p-2">
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">Volume</span>
							<span className="font-bold text-sm">$2.52K</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">
								Transactions
							</span>
							<span className="font-bold text-sm">18.0</span>
						</div>
						<div className="flex justify-between">
							<span className="text-sm text-muted-foreground">Traders</span>
							<span className="font-bold text-sm">13.0</span>
						</div>
					</div>
				</Card>

				{/* Checklist */}
				<div className="space-y-2 my-4">
					<div className="font-bold flex items-center gap-2 text-sm w-full justify-between mb-3">
						<span>Checklist</span>
						<div className="flex items-center gap-1 text-green-500">
							<span className="">4/4</span>
							<ShieldCheck className="h-4 w-4 text-muted-foreground" />
						</div>
					</div>
					{[
						{ label: "Mint Authority", status: "Disabled" },
						{ label: "Freeze Authority", status: "Disabled" },
						{ label: "LP Burned/Locked", status: "100.0%" },
						{ label: "Top 10 Holders", status: "8.4%" },
					].map((item) => (
						<div key={item.label} className="flex justify-between items-center">
							<span className="text-sm text-muted-foreground">
								{item.label}
							</span>
							<span className="text-sm text-green-500">{item.status}</span>
						</div>
					))}
				</div>
			</CardContent>
		</Card>
	);
}

export default TokenOverview;
