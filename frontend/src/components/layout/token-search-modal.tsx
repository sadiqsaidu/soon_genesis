import React from "react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import SearchInput from "../ui/search-input";
import { Search } from "lucide-react";
function TokenSearchModal() {
	return (
		<Dialog>
			<DialogTrigger className="hover:bg-secondary/60 relative border flex items-center text-muted-foreground px-1 py-1 rounded-md">
				<div className="flex items-center gap-2">
					<Search className="w-4 h-4" strokeWidth={2} />
					<span className="ml-1 hidden lg:flex whitespace-nowrap text-xs">
						Search token or address
					</span>
					<span className="ml-1 whitespace-nowrap text-xs lg:hidden">
						Search token 
					</span>
				</div>
				<div className="bg-secondary p-[2px] rounded-md px-3 text-xs ml-2">/</div>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle></DialogTitle>
					<div className="mt-4">
						<SearchInput />
					</div>
					<DialogDescription></DialogDescription>
				</DialogHeader>
			</DialogContent>
		</Dialog>
	);
}

export default TokenSearchModal;
