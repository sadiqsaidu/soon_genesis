"use client";

import React from "react";
import ConnectButton from "../connect-button";
import Logo from "../logo";
import Link from "next/link";
import TokenSearchModal from "./token-search-modal";
import { usePathname } from "next/navigation";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

const navItems = [
	{ label: "New tokens", href: "/" },
	{ label: "Hunt gems", href: "/hunt-gems" },
	{ label: "Create token", href: "/create-token" },
];

const moreMenuItems = [
	{ label: "App Settings", href: "/settings" },
	{ label: "Docs", href: "/docs" },
	{ label: "Brand Kit", href: "/brand-kit" },
];
function Navbar() {
	const pathname = usePathname();
	return (
		<div className="h-[72px] flex border-b px-2  lg:px-5 justify-between items-center py-2 fixed bg-background top-0 inset-x-0 w-full">
			<div className="flex gap-4 items-center">
				<Logo />
				{navItems.map((item) => (
					<Link
						href={item.href}
						key={item.href}
						className={cn(
							"px-3 py-2 text-sm font-medium rounded-md hover:bg-accent",
							pathname === item.href ? "text-primary" : "text-muted-foreground",
						)}>
						{item.label}
					</Link>
				))}

				<NavigationMenu className="lg:flex hidden">
					<NavigationMenuList className="gap-2">
						<NavigationMenuItem>
							<NavigationMenuTrigger
								className={cn(
									"text-sm font-medium text-muted-foreground",
									moreMenuItems.some((item) => pathname === item.href) &&
										"text-primary",
								)}>
								More
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div className="w-[220px] p-2">
									{moreMenuItems.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={cn(
												"block px-3 py-2 text-sm rounded-md hover:bg-accent",
												pathname === item.href
													? "text-primary font-medium"
													: "text-muted-foreground",
											)}>
											{item.label}
										</Link>
									))}
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
			</div>

			<TokenSearchModal />
			<div className="flex items-center gap-2">
				{/* <ModeToggle /> */}
				<ConnectButton />
			</div>
		</div>
	);
}

export default Navbar;
