import { useRecipe } from "../context";

export default function RecipeFooter() {
	const { recipe } = useRecipe();

	if (!recipe.inspiration?.length) {
		return null;
	}

	return (
		<div className="text-muted-foreground">
			<p>Inspired by: </p>
			{recipe.inspiration.map((inspiration, index) => (
				<a
					key={inspiration}
					href={inspiration}
					target="_blank"
					rel="noreferrer"
				>
					{inspiration}
				</a>
			))}
		</div>
	);
}
