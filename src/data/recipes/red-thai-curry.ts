import { RecipeSlug } from "@/enums";
import { Recipe } from ".";

import greenThaiCurry from "./green-thai-curry";

const recipe: Recipe = {
	colour: "rgb(255,0,0)",
	slug: RecipeSlug.RedThaiCurry,
	title: "Red thai curry",
	ingredients: greenThaiCurry.ingredients.map((ingredient) => {
		if ("ingredients" in ingredient && ingredient.name === "Paste") {
			return {
				...ingredient,
				ingredients: ingredient.ingredients.map((ingredient) => {
					if (ingredient.name === "Green serranos chillis") {
						return {
							...ingredient,
							name: "Red chillis",
						};
					}

					return ingredient;
				}),
			};
		}

		return ingredient;
	}),
	steps: [],
	emojis: `🍛 🌶️ 🥥`,
};

export default recipe;
