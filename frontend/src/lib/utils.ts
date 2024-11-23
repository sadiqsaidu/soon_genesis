import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formatAddress = (address: string): string => {
	return `${address.slice(0, 4)}…${address.slice(
		address.length - 4,
		address.length,
	)}`;
};
