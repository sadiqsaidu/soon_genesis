"use client";

import { ReactNode, useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ImagePlus, ChevronUp, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import ConnectChecker from "./checkers/connect-checker";

interface TokenFormData {
	name: string;
	symbol: string;
	description: string;
	xUrl: string;
	discordUrl: string;
	websiteUrl: string;
	telegramUrl: string;
	image?: File;
}

export function TokenCreatorModal({ children }: { children?: ReactNode }) {
	const [showMore, setShowMore] = useState(true);
	const [formData, setFormData] = useState<TokenFormData>({
		name: "",
		symbol: "",
		description: "",
		xUrl: "",
		discordUrl: "",
		websiteUrl: "",
		telegramUrl: "",
	});
	const [imagePreview, setImagePreview] = useState<string>("");

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setFormData((prev) => ({ ...prev, image: file }));
			const reader = new FileReader();
			reader.onloadend = () => {
				setImagePreview(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				{children ?? <Button variant="outline">Create Token</Button>}
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px] max-h-[85vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle className="text-xl tracking-wider">
						TOKEN INFO
					</DialogTitle>
				</DialogHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-1 items-start gap-4">
						<div className="relative aspect-square w-full max-w-[200px] mx-auto">
							<div
								className={cn(
									"flex items-center justify-center w-full h-full border-2 border-dashed rounded-lg cursor-pointer hover:border-primary/50 transition-colors",
									imagePreview ? "border-primary" : "border-muted-foreground",
								)}
								onClick={() =>
									document.getElementById("image-upload")?.click()
								}>
								{imagePreview ? (
									<img
										src={imagePreview}
										alt="Token preview"
										className="w-full h-full object-cover rounded-lg"
									/>
								) : (
									<div className="text-center p-4">
										<ImagePlus className="w-8 h-8 mx-auto mb-2 text-muted-foreground" />
										<p className="text-sm text-muted-foreground">
											Click to select an image
										</p>
									</div>
								)}
							</div>
							<Input
								id="image-upload"
								type="file"
								accept="image/*"
								className="hidden"
								onChange={handleImageChange}
							/>
						</div>

						<div className="space-y-4">
							<div className="space-y-2">
								<div className="flex justify-between">
									<Label htmlFor="name">Name</Label>
									<span className="text-xs text-muted-foreground">
										{formData.name.length}/32
									</span>
								</div>
								<Input
									id="name"
									name="name"
									value={formData.name}
									onChange={handleInputChange}
									maxLength={32}
									className="bg-secondary"
									placeholder="Enter Name"
								/>
							</div>

							<div className="space-y-2">
								<div className="flex justify-between">
									<Label htmlFor="symbol">Symbol</Label>
									<span className="text-xs text-muted-foreground">
										{formData.symbol.length}/8
									</span>
								</div>
								<Input
									id="symbol"
									name="symbol"
									value={formData.symbol}
									onChange={handleInputChange}
									maxLength={8}
									className="bg-secondary"
									placeholder="Enter Symbol"
								/>
							</div>

							<div className="space-y-2">
								<Label htmlFor="description">Description</Label>
								<Textarea
									id="description"
									name="description"
									value={formData.description}
									onChange={handleInputChange}
									className="bg-secondary resize-none"
									placeholder="Enter Description"
								/>
							</div>
						</div>

						<Button
							variant="outline"
							className="w-full"
							onClick={() => setShowMore(!showMore)}>
							{showMore ? "Show Less" : "Show More"}
							{showMore ? (
								<ChevronUp className="ml-2 h-4 w-4" />
							) : (
								<ChevronDown className="ml-2 h-4 w-4" />
							)}
						</Button>

						{showMore && (
							<div className="space-y-4">
								<div className="space-y-2">
									<Label htmlFor="xUrl">X URL</Label>
									<Input
										id="xUrl"
										name="xUrl"
										value={formData.xUrl}
										onChange={handleInputChange}
										className="bg-secondary"
										placeholder="https://x.com/..."
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="discordUrl">Discord URL</Label>
									<Input
										id="discordUrl"
										name="discordUrl"
										value={formData.discordUrl}
										onChange={handleInputChange}
										className="bg-secondary"
										placeholder="https://discord.gg/..."
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="websiteUrl">Website URL</Label>
									<Input
										id="websiteUrl"
										name="websiteUrl"
										value={formData.websiteUrl}
										onChange={handleInputChange}
										className="bg-secondary"
										placeholder="https://..."
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="telegramUrl">Telegram URL</Label>
									<Input
										id="telegramUrl"
										name="telegramUrl"
										value={formData.telegramUrl}
										onChange={handleInputChange}
										className="bg-secondary"
										placeholder="https://t.me/..."
									/>
								</div>
							</div>
						)}

						<ConnectChecker>
							<Button>Create token</Button>
						</ConnectChecker>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
