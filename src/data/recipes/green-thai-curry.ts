import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	slug: RecipeSlug.GreenThaiCurry,
	title: "Green thai curry",
	ingredients: [
		{
			name: "Tins of coconut cream",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
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
			name: "Coriander stalks (with leaves if you cba to remove them)",
			quantity: "4",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Ground cumin",
			quantity: "2",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Ground coriander",
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
		{
			name: "Fish sauce",
			quantity: "30",
			unit: MeasurementUnit.Grams,
		},
	],
	steps: [],
	emojis: `🍛 🌱 🥥`,
};

export default recipe;
