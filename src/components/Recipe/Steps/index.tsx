import { useRecipe } from "../context";

import StepYouTube from "./YouTube";
import StepInstructions from "./Instructions";

export default function Steps() {
	const { recipe } = useRecipe();

	return (
		<>
			{recipe.youtube && <StepYouTube youtubeURL={recipe.youtube} />}
			<StepInstructions />
		</>
	);
}
