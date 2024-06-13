import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	emojis: "🍠 🐟",
	ingredients: [
		{
			name: "Fish",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Sweet potatoes",
			quantity: "5",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Olive oil",
			quantity: "2",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Parmesan cheese",
			optional: true,
			quantity: "15",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Corriander",
			optional: true,
			quantity: "10",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Lemon",
			optional: true,
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Salt",
			quantity: "2",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Pepper",
			quantity: "1.5",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "All purpose seasoning",
			optional: true,
			quantity: "1",
			unit: MeasurementUnit.Teaspoons,
		},
		{
			name: "Mayonnaise or Sweet chilli sauce",
			quantity: "2",
			unit: MeasurementUnit.Tablespoons,
		},
	],
	slug: RecipeSlug.SweetPotatoFriesFish,
	steps: [
		"Preheat the oven to 200°C",
		"Peel and cut the sweet potatoes into fries",
		"Place the sweet potatoes on a baking tray and drizzle with olive oil",
		"Add salt, pepper and all purpose seasoning to the sweet potatoes",
		"Bake the sweet potatoes for 5 minutes",
		"Add the fish to the baking tray and bake for 25 minutes",
		"Serve the sweet potatoes and fish with mayonnaise or sweet chilli sauce",
	],
	title: "Sweet potato fries and fish",
};

export default recipe;
