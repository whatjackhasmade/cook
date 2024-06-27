import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	colour: "rgb(46,139,87)",
	inspiration: ["https://tastesbetterfromscratch.com/pad-thai/"],
	slug: RecipeSlug.PadThai,
	title: "Pad thai",
	ingredients: [
		{
			name: "Flat rice noodles",
			quantity: "227",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Olive oil",
			quantity: "41",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Garlic cloves",
			quantity: "3",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Uncooked shrimp, chicken, or extra-firm tofu , cut into small pieces",
			quantity: "226.8",
			unit: MeasurementUnit.Grams,
			optional: true,
		},
		{
			name: "Bean sprouts",
			quantity: "104",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Red bell pepper",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Spring onions",
			quantity: "3",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Dry roasted peanuts",
			quantity: "75",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Lime",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Coriander",
			quantity: "8",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Fish sauce",
			quantity: "15",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Soy sauce",
			quantity: "17",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Light brown sugar",
			quantity: "63",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Tamarind paste (swap for rice vinegar)",
			quantity: "29",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Creamy peanut butter",
			quantity: "30",
			unit: MeasurementUnit.Grams,
			optional: true,
		},
	],
	steps: [
		"Cook noodles according to package instructions, just until tender.  Rinse under cold water.",
		"Make sauce by combining sauce ingredients in a bowl. Set aside.",
		"Stir Fry - Heat 1½ tablespoons of oil in a large saucepan or wok over medium-high heat. Add the shrimp, chicken or tofu, garlic and bell pepper. The shrimp will cook quickly, about 1-2 minutes on each side, or until pink. If using chicken, cook until just cooked through, about 3-4 minutes, flipping only once.",
		"Push everything to the side of the pan. Add a little more oil and add the beaten eggs. Scramble the eggs, breaking them into small pieces with a spatula as they cook.",
		"Add noodles, sauce, bean sprouts and peanuts to the pan (reserving some peanuts for topping at the end). Toss everything to combine.",
		"Garnish the top with green onions, extra peanuts, cilantro and lime wedges. Serve immediately!",
		"Store leftovers in the fridge and enjoy within 2-3 days.",
	],
	emojis: `🍜 🥜 🍋`,
};

export default recipe;
