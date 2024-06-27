import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	colour: "rgb(255,127,80)",
	slug: RecipeSlug.OysterMushroomBurgers,
	title: "Oyster mushroom burgers",
	ingredients: [
		{
			name: "Oyster mushroom clusters",
			unit: MeasurementUnit.Grams,
			quantity: "150",
		},
		{ name: "Burger buns", unit: MeasurementUnit.Count, quantity: "2" },
		{
			name: "Beef tomato",
			unit: MeasurementUnit.Count,
			quantity: "1",
			optional: true,
		},
		{
			name: "Baby gem lettuce",
			unit: MeasurementUnit.Count,
			quantity: "1",
			optional: true,
		},
		{
			name: "Parmesan",
			unit: MeasurementUnit.Grams,
			quantity: "20",
			optional: true,
		},
		{
			name: "Buttermilk",
			ingredients: [
				{ name: "Milk", unit: MeasurementUnit.Grams, quantity: "240" },
				{ name: "Lemon, juice", unit: MeasurementUnit.Count, quantity: "1/2" },
				{
					name: "Garlic powder",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1",
				},
				{
					name: "Dried oregano",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1",
				},
				{
					name: "Smoked paprika",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1",
				},
				{
					name: "Ground coriander",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1/2",
				},
				{ name: "Salt", unit: MeasurementUnit.Teaspoons, quantity: "1/2" },
				{
					name: "Ground black pepper",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1/2",
				},
			],
		},
		{
			name: "Flour mix",
			ingredients: [
				{ name: "Plain flour", unit: MeasurementUnit.Grams, quantity: "120" },
				{
					name: "3 tbsp cornflour",
					unit: MeasurementUnit.Tablespoons,
					quantity: "3",
				},
				{
					name: "1 tsp garlic powder",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1",
				},
				{
					name: "Smoked paprika",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1",
				},
				{
					name: "Ground coriander",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1/2",
				},
				{ name: "Salt", unit: MeasurementUnit.Teaspoons, quantity: "1/2" },
				{
					name: "Ground black pepper",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1/2",
				},
			],
		},
		{
			name: "Sauce",
			ingredients: [
				{
					name: "Dijon mustard",
					unit: MeasurementUnit.Tablespoons,
					quantity: "1",
				},
				{
					name: "Nutritional yeast (nooch)",
					unit: MeasurementUnit.Tablespoons,
					quantity: "2",
					optional: true,
				},
				{ name: "Mayo", unit: MeasurementUnit.Grams, quantity: "100" },
				{
					name: "Garlic clove, minced",
					unit: MeasurementUnit.Tablespoons,
					quantity: "1",
				},
				{
					name: "Capers",
					unit: MeasurementUnit.Teaspoons,
					quantity: "2",
					optional: true,
				},
				{
					name: "2 tbsp lemon juice",
					unit: MeasurementUnit.Tablespoons,
					quantity: "2",
				},
				{
					name: "Soy sauce",
					unit: MeasurementUnit.Tablespoons,
					quantity: "1",
				},
				{
					name: "Maple syrup",
					unit: MeasurementUnit.Tablespoons,
					quantity: "1",
				},
				{
					name: "Olive oil",
					unit: MeasurementUnit.Tablespoons,
					quantity: "1",
				},
				{
					name: "White vinegar",
					unit: MeasurementUnit.Teaspoons,
					quantity: "1/4",
				},
			],
		},
	],
	inspiration: ["https://www.instagram.com/p/Cu4nzO5KafA/"],
	steps: [
		`[Whip up some burger buns](/${RecipeSlug.BriocheBuns}) to serve with this recipe.`,
		'In a bowl, mix together the "buttermilk" ingredients and set aside.',
		"In another bowl, combine the flour mix ingredients and set aside.",
		"Take a mushroom cluster, dip it into the buttermilk, then coat it with the flour mix. Repeat this step once more for extra coating.",
		"Heat up a pan with oil. Once hot, place the coated mushroom clusters into the pan and fry on each side until crispy and golden brown.",
		"Remove the fried mushroom clusters and set them aside to drip excess oil.",
		"In a jug, add the sauce ingredients and use a hand blender to blend until it thickens.",
		"Assemble the burger. Start with a toasted bottom bun, followed by lettuce, a mushroom cluster, tomato slices, sauce, vegan parmesan, and the top bun. Press down gently and take a bite. Enjoy!",
	],
	emojis: `🍔 🍄`,
};

export default recipe;
