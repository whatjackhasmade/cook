import { Ingredient, IngredientGroup } from "@/data/recipes";

export function isIngredientGroup(
	ingredient: Ingredient | IngredientGroup
): ingredient is IngredientGroup {
	return "ingredients" in ingredient;
}
