import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	emojis: "🍔",
	ingredients: [
		{
			name: "Strong white bread flour",
			quantity: "320",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Salt",
			quantity: "6",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Caster sugar",
			quantity: "30",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Instant yeast",
			quantity: "7",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Eggs",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Milk",
			quantity: "210",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Butter",
			quantity: "100",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Sprinkles of sesame seeds",
			quantity: "6",
			unit: MeasurementUnit.Count,
		},
	],
	slug: RecipeSlug.BriocheBuns,
	steps: [
		"Mix 100g and 20g of strong white bread flour in a pot and mix well.",
		"Set the pot on a medium heat and stir continuously until the mixture thickens into a mash potato like consistency (this is named a tangzhong).",
		"Move the mixture to a small bowl, and keep the pot for the next steps",
		"In a small bowl, mix (in order) 7g of instant yeast with 30g of caster sugar",
		"Add 110g of milk to the pot and stir to collect the remaining tangzhong",
		"With the pot on no heat, add the sugar yeast mixture to the pot and stir",
		"Leave pot to rest for 10 minutes",
		"You should see bubbles forming in the pot, this means the yeast is active, if you don't then you need to heat the pot for 1 minute on the lowest heat, and then rest for 10 minutes",
		"In a stand mixer - add 300g of strong white bread flour, 6g of salt, 1 large egg, the yeast milk mixture, and the tangzong",
		"Mix on medium speed for 5 minutes",
		"Add 100g of butter and mix on high speed for 10 minutes or until it clears the bowl (doesn't stick to the sides of the bowl at all)",
		"Put the dough into a large glass bowl and cover with a chopping board or anything that covers the top of the bowl completely",
		"Leave in a warm place for 1 hour (I tend to put it on a heating mat)",
		"After 1 hour, cover the bowl with cling film and store in your fridge overnight",
		"Line a baking tray with parchment paper",
		"Take bowl out of the fridge",
		"Immediately weigh and split the dough into six equal parts",
		"Lightly flour a surface and roll each 6th part into a ball. You can do this by rolling it around until it forms a circle shape",
		"When in ball form, softly push down on the ball to flatten it. The dough will proof and grow, and we don't want it to be too tall",
		"Place the flattened balls on the baking tray and proof the balls for 1 hour. I tend to put my oven on the lowest setting (no heat but light comes on)",
		"After 1 hour, bring the baking tray out of the oven and turn the oven up to 180 degrees celsius for 10 minutes",
		"During this 10 minute period, we will beat an egg and apply the eggwash to the risen dough to create a nice golden brown crust, as well as create a surface for our sesame seeds to adhere to.",
		"Sprinkle on a generous amount of sesame seeds",
		"Bake the buns for 16 minutes, or until they are golden brown and crispy",
		"Take out and let cool completely before serving",
	],
	time: 60,
	title: "Brioche buns",
};

export default recipe;
