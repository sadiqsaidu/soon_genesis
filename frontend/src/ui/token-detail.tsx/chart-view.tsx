"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ExternalLink } from "lucide-react";

function ChartView() {
	const [activeTab, setActiveTab] = useState("transactions");

	return (
		<div className="border-x">
			<Card className="bg-card border-none">
				<CardContent className="p-4">
					<div className="h-[300px] bg-muted rounded-lg mb-4 flex items-center justify-center">
						<p className="text-muted-foreground">Chart Area</p>
					</div>

					<Tabs value={activeTab} onValueChange={setActiveTab}>
						<TabsList>
							<TabsTrigger value="transactions">Transactions</TabsTrigger>
							<TabsTrigger value="history">History</TabsTrigger>
							<TabsTrigger value="orders">Orders</TabsTrigger>
							<TabsTrigger value="positions">Positions</TabsTrigger>
						</TabsList>
						<TabsContent value="transactions">
							<ScrollArea className="h-[200px]">
								<Table>
									<TableHeader>
										<TableRow>
											<TableHead>Date</TableHead>
											<TableHead>Type</TableHead>
											<TableHead>Price</TableHead>
											<TableHead>Volume</TableHead>
											<TableHead>Trader</TableHead>
										</TableRow>
									</TableHeader>
									<TableBody>
										{[...Array(5)].map((_, i) => (
											<TableRow key={i} className="cursor-pointer">
												<TableCell>
													<div className="flex items-center gap-1">
														{`${i + 1}m ago`}
													</div>
												</TableCell>
												<TableCell
													className={
														i % 2 === 0 ? "text-green-500" : "text-red-500"
													}>
													{i % 2 === 0 ? "Buy" : "Sell"}
												</TableCell>
												<TableCell>$0.094858</TableCell>
												<TableCell>$1,234.56</TableCell>
												<TableCell className="flex items-center gap-1">
													{`jkkf940msd${i + 1}`}
													<ExternalLink className="h-4 w-4" />
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</ScrollArea>
						</TabsContent>
					</Tabs>
				</CardContent>
			</Card>
		</div>
	);
}

export default ChartView;
