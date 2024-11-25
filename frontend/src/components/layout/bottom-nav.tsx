"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

interface NavItem {
	label: string;
	href: string;
	icon: React.ReactNode;
}
const navItems: NavItem[] = [
	{
		label: "New Tokens",
		href: "/new-tokens",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-6 h-6">
				<circle cx="12" cy="12" r="10" />
				<path d="M12 8v8m-4-4h8" />
			</svg>
		),
	},
	{
		label: "Hunt Gems",
		href: "/hunt-gems",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-6 h-6">
				<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
			</svg>
		),
	},
	{
		label: "More",
		href: "#",
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				className="w-6 h-6">
				<circle cx="12" cy="12" r="1" />
				<circle cx="12" cy="5" r="1" />
				<circle cx="12" cy="19" r="1" />
			</svg>
		),
	},
];

const moreMenuItems = [
	{ label: "App Settings", href: "/settings" },
	{ label: "Docs", href: "/docs" },
	{ label: "Brand Kit", href: "/brand-kit" },
];
function MobileBottomNav() {
	const pathname = usePathname();
	const [open, setOpen] = React.useState(false);
	return (
		<nav className="fixed bottom-0 inset-x-0 z-50 border-t  md:hidden">
			<div className="grid h-16 grid-cols-3 bg-background border-t">
				{navItems.map((item, index) => {
					if (item.label === "More") {
						return (
							<Popover key={index} open={open} onOpenChange={setOpen}>
								<PopoverTrigger asChild>
									<button
										className={cn(
											"flex flex-col items-center justify-center gap-1 p-1.5 text-sm text-muted-foreground hover:text-primary w-full",
											open && "text-primary border-t-2 border-primary",
										)}>
										{item.icon}
										<span>{item.label}</span>
									</button>
								</PopoverTrigger>
								<PopoverContent
									className="w-56 p-0"
									align="end"
									alignOffset={-50}>
                    <p className="font-semibold border-b p-1 px-2">More</p>
									<div className="grid gap-1 p-1">
										{moreMenuItems.map((menuItem, idx) => (
											<Link
												key={idx}
												href={menuItem.href}
												className={cn(
													"flex items-center px-4 py-2 text-sm hover:bg-accent rounded-md",
													pathname === menuItem.href &&
														"text-primary font-medium",
												)}
												onClick={() => setOpen(false)}>
												{menuItem.label}  <ArrowTopRightIcon className="w-3 h-3 ml-2"/>
											</Link>
										))}
									</div>
								</PopoverContent>
							</Popover>
						);
					}

					return (
						<Link
							key={index}
							href={item.href}
							className={cn(
								"flex flex-col items-center justify-center gap-1 p-1.5 text-sm text-muted-foreground hover:text-primary",
								pathname === item.href &&
									"text-primary border-t-2 border-primary",
							)}>
							{item.icon}
							<span>{item.label}</span>
						</Link>
					);
				})}
			</div>
		</nav>
	);
}

export default MobileBottomNav;
