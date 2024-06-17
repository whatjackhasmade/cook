import YouTube from "react-youtube";
import { useRecipe } from "../context";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

function getYouTubeIdFromUrl(url: string): string | undefined {
	const regex =
		/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	const match = url.match(regex);
	return match ? match[7] : undefined;
}

export default function Steps() {
	const { recipe } = useRecipe();
	const { steps } = recipe;

	return (
		<>
			{recipe.youtube && (
				<div
					style={{
						marginBottom: "2rem",
					}}
				>
					<YouTube
						videoId={getYouTubeIdFromUrl(recipe.youtube)}
						opts={{
							height: "500px",
							width: "100%",
							playerVars: {
								controls: 1,
								showinfo: 0,
							},
						}}
					/>
				</div>
			)}
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="text-right">Step</TableHead>
						<TableHead>Instructions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{steps.map((step, index) => (
						<TableRow key={step} className="text-xl">
							<TableCell className="text-right">{index + 1}</TableCell>
							<TableCell>{step}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</>
	);
}
