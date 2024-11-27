"use client";

import { useState } from "react";
import { ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {  CreateAdFormData, AdObjective } from "@/lib/test-db";
import { FileInput } from "@/components/ui/file-input";
import { useAds } from "@/hooks/useAds";
import { useRouter } from "next/navigation";

const STEPS = ["Choose objective", "Create ad", "Customize delivery"] as const;

export function CreateAdForm() {
	const [currentStep, setCurrentStep] = useState(0);
	const [formData, setFormData] = useState<Partial<CreateAdFormData>>({});
	const [mediaFiles, setMediaFiles] = useState<File[]>([]);
	const { createAd, isCreating } = useAds();

	const router = useRouter();
	const handleFileSelect = (files: FileList | null) => {
		if (files) {
			setMediaFiles((prevFiles) => [...prevFiles, ...Array.from(files)]);
		}
	};

	const handleRemoveMedia = (index: number) => {
		setMediaFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
	};

	const navigate = (direction: "back" | "next") => {
		if (direction === "back" && currentStep > 0) {
			setCurrentStep(currentStep - 1);
		} else if (direction === "next" && currentStep < STEPS.length - 1) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleObjectiveSelect = (objective: AdObjective) => {
		setFormData((prev) => ({ ...prev, objective }));
		setCurrentStep(1);
	};

	const handleCreateAd = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formData.objective || !formData.tweetText || !formData.budget) return;

		const adFormData = new FormData();
		adFormData.append("adData", JSON.stringify(formData));
		mediaFiles.forEach((file) => adFormData.append("media", file));

		createAd(adFormData, {
			onSuccess: (data) => {
				router.push(`/dashboard?newAd=${data.id}`);
			},
		});
	};

	return (
		<div className="max-w-4xl mx-auto p-6">
			{/* Progress Steps */}
			<div className="flex items-center justify-between mb-8">
				{STEPS.map((step, index) => (
					<div key={step} className="flex items-center">
						<div
							className={`
              rounded-full w-8 h-8 flex items-center justify-center
              ${
								index <= currentStep
									? "bg-primary text-primary-foreground"
									: "bg-muted text-muted-foreground"
							}
            `}>
							{index + 1}
						</div>
						<span className="ml-2 text-sm font-medium">{step}</span>
						{index < STEPS.length - 1 && (
							<ChevronRight className="mx-4 text-muted-foreground" />
						)}
					</div>
				))}
			</div>

			<Card>
				<CardContent className="p-6">
					{currentStep === 0 && (
						<div className="flex flex-col ">
							<div className="flex items-center flex-wrap gap-4">
								<Button
									variant="outline"
									className="h-32 flex flex-col"
									onClick={() => handleObjectiveSelect("reach")}>
									<span className="text-lg font-semibold">Reach</span>
									<span className="text-sm text-muted-foreground">
										Get more people to see your ad
									</span>
								</Button>
								<Button
									variant="outline"
									className="h-32 flex flex-col"
									onClick={() => handleObjectiveSelect("engagement")}>
									<span className="text-lg font-semibold">Engagement</span>
									<span className="text-sm text-muted-foreground">
										Get more likes and retweets
									</span>
								</Button>
							</div>
							<div className="flex justify-between mt-6 ">
								<Button variant="secondary" disabled>
									Back
								</Button>
								<Button
									onClick={() => navigate("next")}
									disabled={!formData.objective}>
									Next
								</Button>
							</div>
						</div>
					)}

					{currentStep === 1 && (
						<form className="space-y-6">
							<div className="space-y-2">
								<Label htmlFor="tweet">Tweet Text</Label>
								<Textarea
									id="tweet"
									placeholder="What's happening?"
									value={formData.tweetText}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											tweetText: e.target.value,
										}))
									}
								/>
							</div>
							<div className="space-y-2">
								<Label>Media</Label>
								<div className="grid grid-cols-2 gap-4">
									{mediaFiles.map((file, index) => (
										<div key={index} className="relative">
											{file.type.startsWith("image/") ? (
												<img
													src={URL.createObjectURL(file)}
													alt={`Uploaded media ${index + 1}`}
													className="w-full h-32 object-cover rounded-md"
												/>
											) : (
												<video
													src={URL.createObjectURL(file)}
													className="w-full h-32 object-cover rounded-md"
													controls
												/>
											)}
											<Button
												variant="destructive"
												size="icon"
												className="absolute top-2 right-2"
												onClick={() => handleRemoveMedia(index)}>
												<X className="h-4 w-4" />
											</Button>
										</div>
									))}
								</div>
								<FileInput
									accept="image/*,video/*"
									onFileSelect={handleFileSelect}
								/>
							</div>
							<div className="flex justify-between mt-6">
								<Button onClick={() => navigate("back")}>Back</Button>
								<Button
									onClick={() => navigate("next")}
									disabled={!formData.tweetText}>
									Next
								</Button>
							</div>
						</form>
					)}

					{currentStep === 2 && (
						<form onSubmit={handleCreateAd} className="space-y-6">
							<div className="space-y-2">
								<Label htmlFor="budget">Daily Budget (ADS Tokens)</Label>
								<Input
									id="budget"
									type="number"
									min="0"
									value={formData.budget}
									onChange={(e) =>
										setFormData((prev) => ({
											...prev,
											budget: Number(e.target.value),
										}))
									}
								/>
							</div>
							<div className="space-y-2">
								<Label htmlFor="location">Target Location</Label>
								<Select
									onValueChange={(value) =>
										setFormData((prev) => ({ ...prev, targetLocation: value }))
									}>
									<SelectTrigger>
										<SelectValue placeholder="Select location" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="global">Global</SelectItem>
										<SelectItem value="us">United States</SelectItem>
										<SelectItem value="eu">Europe</SelectItem>
									</SelectContent>
								</Select>
							</div>
							<div className="grid grid-cols-2 gap-4">
								<div className="space-y-2">
									<Label htmlFor="startDate">Start Date</Label>
									<Input
										id="startDate"
										type="date"
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												startDate: e.target.value,
											}))
										}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="endDate">End Date</Label>
									<Input
										id="endDate"
										type="date"
										onChange={(e) =>
											setFormData((prev) => ({
												...prev,
												endDate: e.target.value,
											}))
										}
									/>
								</div>
							</div>
							<div className="flex justify-between mt-6">
								<Button onClick={() => navigate("back")}>Back</Button>
								<Button type="submit" disabled={!formData.budget || isCreating}>
									{isCreating ? "Creating..." : "Create Ad"}
								</Button>
							</div>
						</form>
					)}
				</CardContent>
			</Card>
		</div>
	);
}
