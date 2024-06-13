import { MeasurementUnit, RecipeSlug } from "@/enums";
import { Recipe } from ".";

const recipe: Recipe = {
	description: "These super savoury tacos are an absolute godsend.",
	emojis: "🌯 🌶",
	ingredients: [
		{
			name: "Ground coriander",
			quantity: "1",
			unit: MeasurementUnit.Teaspoons,
		},
		{
			name: "Ground cumin",
			quantity: "1",
			unit: MeasurementUnit.Teaspoons,
		},
		{
			name: "Chipotle paste",
			quantity: "2",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Punnet of oyster mushrooms (150g)",
			quantity: "1",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Red bell peppers",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Red onions",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Garlic cloves",
			quantity: "4",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Coriander bunches",
			quantity: "2",
			unit: MeasurementUnit.Count,
		},
		{
			name: "Pickled jalapenos",
			quantity: "100",
			unit: MeasurementUnit.Grams,
		},
		{
			name: "Olive oil",
			quantity: "2",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Mayonnaise",
			quantity: "2",
			unit: MeasurementUnit.Tablespoons,
		},
		{
			name: "Cheese (whatever kind you want)",
			quantity: "50",
			unit: MeasurementUnit.Grams,
		},
	],
	related: [RecipeSlug.Fajitas],
	servingSize: 2,
	slug: RecipeSlug.ChipotleMushroomFajitas,
	steps: [
		"Preheat the oven to 220°C.",
		"Grab the mushrooms and rub with plenty of salt and the spice mix, then set aside.",
		"Thinly slice two of the red onions",
		"Peel and finely slice the garlic cloves or use a garlic press",
		"Set an ovenproof, flameproof casserole or roasting tray over a high heat. Add a glug of olive oil and the sliced onions with a big pinch of salt. Cook for 5 mins until starting to caramelise.",
		"Add the garlic, stir through and sit the mushrooms on top along with all the marinade. Chuck the whole lot in the oven for 35-40 mins or until the onions are jammy and the mushrooms are tender.",
		"Meanwhile, blend the tahini with a handful of the jalapeños, one bunch of coriander, a splash of jalapeño liquor and a splash of water. Season with salt and a squeeze of lime if needed.",
		"Now, thinly slice the cabbage and remaining onion, then add to a large mixing bowl. Pour over the tahini mixture and chuck in the remaining jalapeños. Roughly chop the remaining coriander and add to the bowl.",
		"Toss everything together and add a squeeze of lime if necessary.",
		"Heat your tortillas according to the pack instructions.",
		"Pull your mushrooms out of the oven and rest for a couple of minutes. Shred with a couple of forks.",
		"Build your tacos up with plenty of caramelised onions, pulled ’shrooms, slaw and a squeeze of lime. Get stuck in.",
	],
	time: 55,
	title: "Chipotle mushroom fajitas",
};

export default recipe;
