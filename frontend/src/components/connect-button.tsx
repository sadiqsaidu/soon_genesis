"use client";

import { UnifiedWalletButton, useWallet } from "@jup-ag/wallet-adapter";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	ChevronDown,
	Copy,
	Download,
	Power,
	RefreshCcw,
	Upload,
	Wallet,
} from "lucide-react";
import { formatAddress } from "@/lib/utils";

export default function ConnectButton() {
	const { connected, disconnect, publicKey } = useWallet();

	if (connected) {
		return (
			<Sheet>
				<SheetTrigger className="flex items-center border p-2">
					<Wallet className="w-4 h-4" />
					<ChevronDown className="w-4 h-4" />
				</SheetTrigger>
				<SheetContent className="w-[360px] bg-background">
					<div className="flex items-center justify-between">
						<SheetHeader className="space-y-0">
							<SheetTitle className="text-white flex items-center gap-2">
								<div className="h-5 w-5 rounded-full bg-neutral-800" />
								Profile
							</SheetTitle>
						</SheetHeader>
					</div>

					<div className="mt-6 space-y-6">
						<div className="space-y-2">
							<div className="text-sm text-muted-foreground">Address</div>
							<div className="flex items-center justify-between rounded-lg bg-muted p-3">
								<div className="text-sm">
									{formatAddress(publicKey?.toBase58() || "")}
								</div>
								<Button variant="ghost" size="icon" className="h-8 w-8">
									<Copy className="h-4 w-4" />
								</Button>
							</div>
						</div>

						<div className="grid grid-cols-3 gap-2">
							<div className="p-3 bg-muted rounded-md cursor-pointer">
								<div className="flex flex-col items-center gap-2">
									<Download className=" h-5 w-5" />
									<div className="text-xs">Deposit</div>
								</div>
							</div>
							<div className="p-3 bg-muted rounded-md cursor-pointer">
								<div className="flex flex-col items-center gap-2">
									<Upload className=" h-5 w-5" />
									<div className="text-xs">Withdraw</div>
								</div>
							</div>
							<div
								className="p-3 bg-muted rounded-md cursor-pointer"
								onClick={disconnect}>
								<div className="flex flex-col items-center gap-2">
									<Power className=" h-5 w-5" />
									<div className="text-xs">Logout</div>
								</div>
							</div>
						</div>

						<Tabs defaultValue="balances" className="w-full">
							<TabsList className="w-full bg-transparent border-b border-neutral-800 h-auto p-0">
								<TabsTrigger
									value="balances"
									className="w-full data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-white">
									Balances
								</TabsTrigger>
								<TabsTrigger
									value="trades"
									className="w-full data-[state=active]:bg-transparent data-[state=active]:shadow-none pb-3 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-white">
									Trades
								</TabsTrigger>
							</TabsList>
							<TabsContent value="balances" className="mt-4">
								<div className="space-y-4">
									<div className="flex items-center justify-between">
										<div className="text-sm text-muted-foreground">
											Net Worth
										</div>
										<Button variant="ghost" size="icon" className="h-8 w-8">
											<RefreshCcw className=" h-4 w-4" />
										</Button>
									</div>
									<div className="text-2xl font-bold">$0</div>
									<div className="space-y-2">
										<div className="flex items-center justify-between rounded-lg bg-muted p-3">
											<div className="flex items-center gap-2">
												<div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500" />
												<div>SOL</div>
											</div>
											<div>0</div>
										</div>
									</div>
								</div>
							</TabsContent>
							<TabsContent value="trades">
								<div className="text-center py-8 text-neutral-400">
									No trades yet
								</div>
							</TabsContent>
						</Tabs>
					</div>
				</SheetContent>
			</Sheet>
		);
	}

	return (
		<UnifiedWalletButton
			currentUserClassName="!focus:outline-none !hover:bg-primary/90 !focus:ring-4 !px-5 !py-3 !text-lg font-normal border !border-opacity-[12%] !h-10 !rounded-md"
			buttonClassName="text-primary-foreground bg-primary hover:bg-primary/90 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
		/>
	);
}
