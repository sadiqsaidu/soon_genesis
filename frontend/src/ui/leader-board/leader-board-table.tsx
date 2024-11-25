"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	UserStats,
	LeaderboardEntry,
	generateMockLeaderboardData,
	generateMockUserStats,
} from "@/lib/test-db";

const ITEMS_PER_PAGE = 10;

export  function Leaderboard() {
	const [currentPage, setCurrentPage] = useState(1);
	const [userStats] = useState<UserStats>(generateMockUserStats());
	const [leaderboardData] = useState<LeaderboardEntry[]>(
		generateMockLeaderboardData(100),
	);

	const totalPages = Math.ceil(leaderboardData.length / ITEMS_PER_PAGE);
	const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;
	const currentPageData = leaderboardData.slice(startIndex, endIndex);

	const userPosition =
		leaderboardData.findIndex((entry) => entry.address === userStats.address) +
		1;

	return (
		<div className="container mx-auto py-8 max-w-6xl">
			<h1 className="text-3xl font-bold mb-8">Leaderboard</h1>

			<div>
				<p className="mb-3 font-bold">Your progress</p>
				<div className="grid gap-4 md:grid-cols-3 mb-8">
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								ADS Tokens Bought
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{userStats.adsTokensBought}
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								ADS Tokens Earned
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{userStats.adsTokensEarned}
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-sm font-medium">
								Total Tweets
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">{userStats.totalTweets}</div>
						</CardContent>
					</Card>
				</div>
			</div>

			<Card className="mb-8">
				<CardHeader>
					<CardTitle>Your Position</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Position</TableHead>
								<TableHead>Address</TableHead>
								<TableHead>Total ADS Tokens</TableHead>
								<TableHead>Total Tweets</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							<TableRow>
								<TableCell className="font-medium">{userPosition}</TableCell>
								<TableCell>{userStats.address}</TableCell>
								<TableCell>
									{userStats.adsTokensBought + userStats.adsTokensEarned}
								</TableCell>
								<TableCell>{userStats.totalTweets}</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Leaderboard</CardTitle>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[100px]">Position</TableHead>
								<TableHead>Address</TableHead>
								<TableHead>Total ADS Tokens</TableHead>
								<TableHead>Total Tweets</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{currentPageData.map((entry) => (
								<TableRow key={entry.address}>
									<TableCell className="font-medium">
										{entry.position}
									</TableCell>
									<TableCell>{entry.address}</TableCell>
									<TableCell>{entry.totalAdsTokens}</TableCell>
									<TableCell>{entry.totalTweets}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
					<div className="flex items-center justify-between space-x-2 py-4">
						<Button
							variant="outline"
							size="sm"
							onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
							disabled={currentPage === 1}>
							Previous
						</Button>
						<div className="flex items-center space-x-2">
							<Input
								className="w-12"
								type="number"
								min={1}
								max={totalPages}
								value={currentPage}
								onChange={(e) => {
									const page = parseInt(e.target.value);
									setCurrentPage(page > 0 ? Math.min(page, totalPages) : 1);
								}}
							/>
							<span className="text-sm text-muted-foreground">
								of {totalPages}
							</span>
						</div>
						<Button
							variant="outline"
							size="sm"
							onClick={() =>
								setCurrentPage((prev) => Math.min(prev + 1, totalPages))
							}
							disabled={currentPage === totalPages}>
							Next
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
