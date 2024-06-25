import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	slug: RecipeSlug.GreenThaiCurry,
	title: "Green thai curry",
	youtube: "https://youtu.be/rTK8MWYYLko?t=53",
	ingredients: [
		{
			name: "Paste",
			ingredients: [
				{
					name: "Galngal",
					quantity: "1",
					unit: MeasurementUnit.Teaspoons,
				},
				{
					name: "Green serranos chillis",
					quantity: "25",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Cloves of garlic",
					quantity: "7",
					unit: MeasurementUnit.Count,
				},
				{
					name: "Coriander stalks",
					quantity: "4",
					unit: MeasurementUnit.Count,
				},
				{
					name: "Ground cumin",
					quantity: "2",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Ground coriander seeds",
					quantity: "4",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Ground white pepper",
					quantity: "3",
					unit: MeasurementUnit.Grams,
				},
				{
					name: "Small shallots",
					quantity: "2",
					unit: MeasurementUnit.Count,
				},
				{
					name: "Lemongrass stalk",
					quantity: "1",
					unit: MeasurementUnit.Count,
				},
				{
					name: "Kaffir lime leaves",
					quantity: "3",
					unit: MeasurementUnit.Count,
				},
			],
		},
		{
			name: "Tins of coconut cream",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Thai basil leaves",
			quantity: "10",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Palm sugar",
			quantity: "40",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Fish sauce",
			quantity: "20",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Courgette",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Bell pepper",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Bowls worth of rice",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Chestnut mushrooms",
			quantity: "150",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Carrot",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Vegetable stock",
			quantity: "10",
			unit: MeasurementUnit.Grams,
		},
	],
	steps: [],
	emojis: `🍛 🌱 🥥`,
};

export default recipe;
