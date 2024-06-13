import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	emojis: "🌯",
	ingredients: [
		{
			name: "All purpose flour",
			quantity: "346",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Fine sea salt",
			quantity: "6",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Baking powder",
			quantity: "6",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Olive oil",
			quantity: "33",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Warm water",
			quantity: "189",
			unit: MeasurementUnit.Milliliters,
		},
	],
	related: [RecipeSlug.ChipotleMushroomFajitas],
	slug: RecipeSlug.Fajitas,
	steps: [
		"In a large bowl, whisk together the flour, salt, and baking powder",
		"Add olive oil to the bowl and mix until the oil is distrubuted into small clumps",
		"Add warm water to the bowl and mix until a dough forms",
		"Knead the dough for 5 minutes or until smooth",
		"Cover the dough with a damp towel and let it rest for 30 minutes",
		"Divide the dough into equal pieces (I usually make 6) and roll each piece into a ball",
		"Roll out each ball into a thin circle with a rolling pin",
		"Heat a skillet over the highest heat possible",
		"Get a plate and kitchen towl ready, you will stack the cooked tortillas in a pile on the plate",
		"When the skillet is hot, add a tortilla and cook for 20-30 seconds on each side",
	],
	title: "Fajitas",
	youtube: "https://youtu.be/ynexTOjHbRs?t=75",
};

export default recipe;
