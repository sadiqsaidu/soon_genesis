import {  useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useToast } from "./use-toast";

export function useAds() {
	const { toast } = useToast();
	// const fetchAds = async () => {
	// 	const { data } = await axios.get("/api/ads");
	// 	return data;
	// };

	const createAd = async (adData: FormData) => {
		const { data } = await axios.post("/api/ads", adData);
		return data;
	};

	// const adsQuery = useQuery({
	// 	queryKey: ["ads"],
	// 	queryFn: fetchAds,
	// });

	const createAdMutation = useMutation({
		mutationFn: createAd,
		onSuccess: () => {
			toast({
				title: "Scheduled: Catch up ",
				description: "Friday, February 10, 2023 at 5:57 PM",
			});
		},
	});

	return {
		// ads: adsQuery.data,
		// isLoading: adsQuery.isLoading,
		// isError: adsQuery.isError,
		createAd: createAdMutation.mutate,
		isCreating: createAdMutation.isPending,
	};
}
