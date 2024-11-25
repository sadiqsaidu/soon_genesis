import * as React from "react";
import { cn } from "@/lib/utils";

export interface FileInputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {
	onFileSelect: (files: FileList | null) => void;
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
	({ className, onFileSelect, ...props }, ref) => {
		const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
			const files = event.target.files;
			onFileSelect(files);
		};

		return (
			<input
				type="file"
				multiple
				className={cn(
					"flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
					className,
				)}
				onChange={handleChange}
				ref={ref}
				{...props}
			/>
		);
	},
);
FileInput.displayName = "FileInput";

export { FileInput };
