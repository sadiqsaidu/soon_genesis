"use client";

import React from "react";
import ConnectButton from "../connect-button";
import Logo from "../logo";
import Link from "next/link";
import TokenSearchModal from "./token-search-modal";
function Navbar() {
	return (
		<div className="h-[72px] flex border-b px-2  lg:px-5 justify-between items-center py-2 fixed bg-background top-0 inset-x-0 w-full">
			<div className="flex gap-4">
				<Logo />
				<div className="lg:flex items-center text-sm font-medium  gap-3 hidden">
					<Link href="/">New tokens</Link>
					<Link href="/">Hunt gems</Link>
					<Link href="/">Create token</Link>
				</div>
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
