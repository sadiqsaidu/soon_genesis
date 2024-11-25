import Image from "next/image";
import React from "react";

function Logo() {
	return (
		<div className="flex items-center justify-center ">
			<Image
				src="/logo.png"
				className=""
				alt="memeads logo"
				width={52}
				height={52}
			/>
			<p className="text-primary font-bold text-sm -ml-1">MemeAds</p>
		</div>
	);
}

export default Logo;
