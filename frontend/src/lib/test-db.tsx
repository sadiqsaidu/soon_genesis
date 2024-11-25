export type AdObjective = "reach" | "engagement" | "website" | "keywords";

export interface Ad {
	id: string;
	objective: AdObjective;
	tweetText: string;
	media?: string;
	budget: number;
	targetLocation: string;
	startDate: string;
	endDate: string;
	status: "draft" | "active" | "completed";
	tweetCount: number;
	createdAt: Date;
	paid: boolean;
}

export interface CreateAdFormData {
	objective: AdObjective;
	tweetText: string;
	media?: string;
	budget: number;
	targetLocation: string;
	startDate: string;
	endDate: string;
}

const ads: Ad[] = [];

export const db = {
	ads: {
		create: (
			ad: Omit<Ad, "id" | "status" | "tweetCount" | "createdAt" | "paid">,
		) => {
			const newAd: Ad = {
				...ad,
				id: Math.random().toString(36).substring(7),
				status: "draft",
				tweetCount: 0,
				createdAt: new Date(),
				paid: false,
			};
			ads.push(newAd);
			return newAd;
		},
		getAll: () => ads,
		getById: (id: string) => ads.find((ad) => ad.id === id),
		updatePaidStatus: (id: string, paid: boolean) => {
			const ad = ads.find((ad) => ad.id === id);
			if (ad) {
				ad.paid = paid;
				ad.status = "active";
			}
			return ad;
		},
		incrementTweetCount: (id: string) => {
			const ad = ads.find((ad) => ad.id === id);
			if (ad) {
				ad.tweetCount++;
			}
			return ad;
		},
	},
};

//leader board
export interface UserStats {
	address: string;
	adsTokensBought: number;
	adsTokensEarned: number;
	totalTweets: number;
}

export interface LeaderboardEntry {
	position: number;
	address: string;
	totalAdsTokens: number;
	totalTweets: number;
}

export function generateMockLeaderboardData(count: number): LeaderboardEntry[] {
	return Array.from({ length: count }, (_, i) => ({
		position: i + 1,
		address: `0x${Math.random().toString(16).substr(2, 40)}`,
		totalAdsTokens: Math.floor(Math.random() * 10000),
		totalTweets: Math.floor(Math.random() * 1000),
	}));
}

export function generateMockUserStats(): UserStats {
	return {
		address: `0x${Math.random().toString(16).substr(2, 40)}`,
		adsTokensBought: Math.floor(Math.random() * 5000),
		adsTokensEarned: Math.floor(Math.random() * 5000),
		totalTweets: Math.floor(Math.random() * 500),
	};
}
