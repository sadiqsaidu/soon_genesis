import { UnifiedWalletButton } from "@jup-ag/wallet-adapter";
import { useWallet } from "@solana/wallet-adapter-react";
import React, { ReactNode } from "react";

function ConnectChecker({ children }: { children: ReactNode }) {
	const { connected, publicKey } = useWallet();
	if (connected && publicKey) {
		return <>{children}</>;
	}
	return (
		<UnifiedWalletButton
			currentUserClassName="!focus:outline-none !hover:bg-primary/90 !focus:ring-4 !px-5 !py-3 !text-lg font-normal border !border-opacity-[12%] !h-10 !rounded-md"
			buttonClassName="text-primary-foreground bg-primary hover:bg-primary/90 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
		/>
	);
}

export default ConnectChecker;
