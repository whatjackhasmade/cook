import { getYouTubeIDFromURL } from "@/utils";
import YouTube from "react-youtube";

export default function StepYouTube({ youtubeURL }: { youtubeURL: string }) {
	return (
		<div
			style={{
				marginBottom: "2rem",
			}}
		>
			<YouTube
				videoId={getYouTubeIDFromURL(youtubeURL)}
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
	);
}
