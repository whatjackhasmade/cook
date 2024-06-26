import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	slug: RecipeSlug.Roast,
	title: "Roast",
	ingredients: [
		{
			name: "Parsnip",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Carrots",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Potatoes",
			quantity: "4",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Glug of olive oil",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Dollop of butter",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Sprigs of Rosemary",
			quantity: "4",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Cloves of garlic",
			quantity: "5",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Gravy",
			quantity: "300",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Yorkshire puddings",
			ingredients: [
				{
					name: "All purpose flour",
					quantity: "200",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Vegetable oil (per mould)",
					quantity: "2 1/2",
					unit: MeasurementUnit.Teaspoons,
				},
				{
					name: "Eggs",
					quantity: "4",
					unit: MeasurementUnit.Count,
				},
				{
					name: "Milk",
					quantity: "200",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Pinch of salt",
					quantity: "1",
					unit: MeasurementUnit.Count,
				},
				{
					name: "Pinch of ground white peppercorn",
					quantity: "1",
					unit: MeasurementUnit.Count,
				},
			],
		},
	],
	steps: [],
	emojis: `🍗 🥔 🥕`,
};

export default recipe;
