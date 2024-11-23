import { useState } from "react";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CreateAdModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function CreateAdModal({ isOpen, onClose }: CreateAdModalProps) {
	const [twitterHandle, setTwitterHandle] = useState("");
	const [contractAddress, setContractAddress] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// TODO: Implement ad creation logic
		console.log("Creating ad with:", { twitterHandle, contractAddress });
		onClose();
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Create New Ad</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit}>
					<div className="grid gap-4 py-4">
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="twitter-handle" className="text-right">
								Twitter Handle
							</Label>
							<Input
								id="twitter-handle"
								value={twitterHandle}
								onChange={(e) => setTwitterHandle(e.target.value)}
								className="col-span-3"
							/>
						</div>
						<div className="grid grid-cols-4 items-center gap-4">
							<Label htmlFor="contract-address" className="text-right">
								Contract Address
							</Label>
							<Input
								id="contract-address"
								value={contractAddress}
								onChange={(e) => setContractAddress(e.target.value)}
								className="col-span-3"
							/>
						</div>
					</div>
					<DialogFooter>
						<Button type="submit">Create Ad</Button>
					</DialogFooter>
				</form>
			</DialogContent>
		</Dialog>
	);
}
