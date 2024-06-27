import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	colour: "rgb(255,255,0)",
	emojis: "🍋",
	ingredients: [
		{
			name: "Crust",
			ingredients: [
				{
					name: "Unsalted butter",
					quantity: "140",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "All-purpose flour",
					quantity: "175",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Sugar",
					quantity: "50",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Kosher salt",
					quantity: "3",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Water",
					quantity: "15",
					unit: MeasurementUnit.Grams,
				},
			],
		},
		{
			name: "Filling",
			ingredients: [
				{
					name: "Sugar",
					quantity: "300",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "All purpose flour",
					quantity: "54",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Salt",
					quantity: "1",
					unit: MeasurementUnit.Pinch,
				},
				{
					name: "Ground turmeric",
					optional: true,
					quantity: "1/16",
					unit: MeasurementUnit.Teaspoons,
				},
				{
					name: "Citric acid",
					optional: true,
					quantity: "1/2",
					unit: MeasurementUnit.Teaspoons,
				},
				{
					name: "Large eggs",
					quantity: "3",
					unit: MeasurementUnit.Count,
				},
				{
					name: "Large egg yolks",
					quantity: "3",
					unit: MeasurementUnit.Count,
				},
				{
					name: "Lemon zest",
					quantity: "17",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Lemon juice",
					quantity: "200",
					unit: MeasurementUnit.Milliliters,
				},
				{
					name: "Unsalted butter",
					quantity: "84",
					unit: MeasurementUnit.Grams,
				},
			],
		},
		{
			name: "Garnish",
			ingredients: [
				{
					name: "Powdered sugar",
					quantity: "1",
					optional: true,
					unit: MeasurementUnit.Tablespoons,
				},
			],
		},
	],
	slug: RecipeSlug.LemonBars,
	steps: [
		{
			name: "Prep",
			steps: [
				"Pre-heat oven to 350°F (175°C) with the rack in the middle position.",
				"Line a 9” x 9” baking pan (can be metal, glass, or ceramic) with parchment paper.",
			],
		},
		{
			name: "Crust",
			steps: [
				"Measure out all crust ingredients and have them ready.",
				"Make Browned Butter:",
				"- Melt butter in a medium stainless steel pan over medium heat.",
				"- Butter will foam, bubble, and crackle. Stir occasionally, then constantly as sounds die down.",
				"- Light sediment will appear. Scrape pan to prevent sticking and burning. Reduce heat to low.",
				"- Stir until sediment turns rich brown and butter smells nutty. Turn off heat.",
				"Add salt and sugar, stirring to incorporate. Mix in flour until well combined and no dry flour remains. The mixture will be clumpy and sandy.",
				"Add water and stir thoroughly for a homogenous dough.",
				"Transfer dough to pan. Press into an even layer with hands or bottom of a cup. Prick all over with a fork.",
				"Bake for 20-25 minutes, until evenly golden with slightly browned edges.",
			],
		},
		{
			name: "Filling",
			steps: [
				"Wipe pan used for crust to remove excess debris. Add all filling ingredients except lemon juice and butter. Stir to combine.",
				"Add lemon juice and stir until evenly mixed.",
				"Cook over medium-low heat, stirring and scraping constantly. When filling begins to thicken, reduce heat to low. Cook until filling reaches 160-165°F (70-75°C), is slightly thickened, and coats spoon. Texture should be halfway between melted ice cream and shampoo.",
				"Remove from heat. Add butter, stir to melt and combine.",
				"Strain filling onto baked crust. Tilt pan to spread evenly.",
				"Bake for 7-15 minutes, until the filling is set with slightly puffed edges. The filling should barely jiggle when the pan is shaken.",
			],
		},
		{
			name: "Cool & Serve",
			steps: [
				"Allow the bars to cool completely at room temperature for at least 1.5 hours. If ambient temperature is very warm, chill the bars in the fridge, uncovered.",
				'Lift cooled bars from pan. Cut with sharp knife, wiping blade between cuts with a damp towel. Trim 1/4" (0.5 cm) from all sides. Cut into desired size (I like 4x4 for 16 pieces).',
				"Optional: Dust with powdered sugar. Serve immediately.",
			],
		},
	],
	title: "Lemon bars",
	youtube: "https://www.youtube.com/watch?v=zQ3EfqQr2g4",
};

export default recipe;
