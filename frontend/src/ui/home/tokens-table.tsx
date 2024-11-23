"use client";
import React from "react";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

type Token = {
	details: {
		name: string;
		address: string;
	};
	mktCap: string;
	method: string;
	volume24h: string;
	liquidity: string;
	quickBuy: string;
};

const tokenData: Token[] = [
	{
		details: {
			name: "Solana",
			address: "So11111111111111111111111111111111111111112",
		},
		mktCap: "$12.5B",
		method: "Swap",
		volume24h: "$1.3B",
		liquidity: "$4.2B",
		quickBuy: "0.1 SOL",
	},
	{
		details: {
			name: "USDC",
			address: "5h3EE11111111111111111111111111111111111111",
		},
		mktCap: "$30B",
		method: "Swap",
		volume24h: "$4.5B",
		liquidity: "$20B",
		quickBuy: "0.1 SOL",
	},
	{
		details: {
			name: "Bonk",
			address: "4nkn111111111111111111111111111111111111111",
		},
		mktCap: "$25M",
		method: "Swap",
		volume24h: "$5M",
		liquidity: "$15M",
		quickBuy: "0.1 SOL",
	},
];
function TokenTable() {
	const { push } = useRouter();
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="w-[100px] sticky  left-0 bg-background z-10">
						Token/Age
					</TableHead>
					<TableHead>Mkt Cap</TableHead>
					<TableHead>Method</TableHead>
					<TableHead className="text-right"> 24h Volume</TableHead>
					<TableHead className="text-right">Liquidity</TableHead>
					<TableHead className="text-right sticky right-0 bg-background z-10">
						Quick Buy
					</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody className="">
				{tokenData.map((token, i) => (
					<TableRow
						key={i}
						onClick={() => push(`/token/${token.details.address}`)}
						className="px-4 cursor-pointer">
						<TableCell className="font-medium w-[100px] sticky left-0 bg-background z-10">
							<div className="flex items-center gap-2">
								<div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
								<span>{token.details.name}</span>
							</div>
						</TableCell>
						<TableCell>{token.mktCap}</TableCell>
						<TableCell>{token.method}</TableCell>
						<TableCell className="text-right">{token.volume24h}</TableCell>
						<TableCell className="text-right">{token.liquidity}</TableCell>
						<TableCell className="text-right justify-end  flex sticky  right-0 bg-background z-10">
							<Button variant="ghost"  className="flex items-center gap-1">
								<Zap className="w-3 h-3" />
								<span>{token.quickBuy}</span>
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			{/* <TableFooter>
				<TableRow>
					<TableCell colSpan={3}>Total</TableCell>
					<TableCell className="text-right">$2,500.00</TableCell>
				</TableRow>
			</TableFooter> */}
		</Table>
	);
}

export default TokenTable;
