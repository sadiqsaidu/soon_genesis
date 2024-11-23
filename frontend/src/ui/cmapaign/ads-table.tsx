import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

// Mock data for demonstration
const ads = [
	{
		id: "1",
		twitterHandle: "@pepeInu",
		contractAddress: "0x1234...5678",
		impressions: 1000,
		engagements: 500,
		tweets: 200,
		buys: 50,
		sells: 10,
	},
	{
		id: "2",
		twitterHandle: "@CATWIF",
		contractAddress: "0xabcd...efgh",
		impressions: 2000,
		engagements: 800,
		tweets: 300,
		buys: 100,
		sells: 20,
	},
];

export default function AdsTable() {
	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead>Twitter Handle</TableHead>
					<TableHead>Contract Address</TableHead>
					<TableHead>Actions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{ads.map((ad) => (
					<TableRow key={ad.id}>
						<TableCell className="text-start  items-start justify-start">
							<span>{ad.twitterHandle}</span>
						</TableCell>
						<TableCell className="text-start border items-start justify-start">
							<span className="border"> {ad.contractAddress}</span>
						</TableCell>
						<TableCell>
							<Accordion type="single" collapsible className="w-full">
								<AccordionItem value={`item-${ad.id}`}>
									<AccordionTrigger>View Details</AccordionTrigger>
									<AccordionContent>
										<div className="grid grid-cols-2 gap-4">
											<div>
												<p className="font-semibold">Impressions</p>
												<p>{ad.impressions}</p>
											</div>
											<div>
												<p className="font-semibold">Engagements</p>
												<p>{ad.engagements}</p>
											</div>
											<div>
												<p className="font-semibold">Tweets</p>
												<p>{ad.tweets}</p>
											</div>
											<div>
												<p className="font-semibold">Buys</p>
												<p>{ad.buys}</p>
											</div>
											<div>
												<p className="font-semibold">Sells</p>
												<p>{ad.sells}</p>
											</div>
										</div>
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
