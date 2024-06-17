import { RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	slug: RecipeSlug.OysterMushroomBurgers,
	title: "Oyster mushroom burgers",
	ingredients: [],
	steps: [
		`[Whip up some burger buns](/${RecipeSlug.BriocheBuns}) to serve with this recipe.`,
	],
	emojis: `🍔 🍄`,
};

export default recipe;
