import Recipe from "@/components/Recipe";
import { recipes } from "@/data/recipes";
import { Metadata } from "next";

interface Props {
	params: { slug: string };
}

function getRecipe(slug: string) {
	return recipes.find((recipe) => recipe.slug === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const recipe = getRecipe(params.slug);

	return {
		title: recipe ? `${recipe.emojis} ${recipe.title}` : "Recipe not found",
	};
}

export default async function RecipeRoute({ params }: Props) {
	const recipe = getRecipe(params.slug);

	if (!recipe) {
		return <h1>Recipe not found</h1>;
	}

	return <Recipe recipe={recipe} />;
}

export async function generateStaticParams() {
	return recipes.map((recipe) => ({
		slug: recipe.slug,
	}));
}
