"use client";

import { Button } from "@/components/ui/button";
import AdsTable from "@/ui/cmapaign/ads-table";
import CreateAdModal from "@/ui/cmapaign/create-ads";
import { PlusCircle } from "lucide-react";
import React, { useState } from "react";

function Campaign() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div className="container mx-auto py-8 max-w-6xl">
			<h1 className="text-3xl font-bold mb-6">Create Ads</h1>
			<Button onClick={() => setIsModalOpen(true)} className="mb-6">
				<PlusCircle className="mr-2 h-4 w-4" /> Create New Ad
			</Button>
			<CreateAdModal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
			/>
			<AdsTable />
		</div>
	);
}

export default Campaign;
