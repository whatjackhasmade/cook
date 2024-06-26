import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	slug: RecipeSlug.SpringOnionPasta,
	title: "Spring onion pasta",
	ingredients: [
		{
			name: "Spring onions",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Spaghetti",
			quantity: "250",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Sesame oil",
			quantity: "2",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Sesame seeds",
			quantity: "10",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Ground black pepper",
			quantity: "1",
			unit: MeasurementUnit.Teaspoons,
		},
		{
			name: "Parmesan cheese",
			quantity: "30",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Garlic",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Ginger",
			quantity: "10",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Honey",
			quantity: "1",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Soy sauce",
			quantity: "1",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Lemon's juice",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Olive oil",
			quantity: "2",
			unit: MeasurementUnit.Tablespoons,
		},
	],

	steps: [],
	emojis: `🍝 🧅`,
};

export default recipe;
