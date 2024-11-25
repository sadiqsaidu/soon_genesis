import { CreateAdForm } from "@/ui/cmapaign/ceate-ads-form";
import { Dashboard } from "@/ui/cmapaign/dashboard";
import React from "react";

function Campaign() {
	return (
		<div className="container mx-auto py-8 max-w-6xl">
			<Dashboard />
			<CreateAdForm />
		</div>
	);
}

export default Campaign;
