import { MeasurementUnit, RecipeSlug } from "@/enums";

import briocheBuns from "./brioche-buns";
import cauliflowerMushroomBolognese from "./cauliflower-mushroom-bolognese";
import chilliGarlicTofuBao from "./chilli-garlic-tofu-bao";
import chipotleMushroomFajitas from "./chipotle-mushroom-fajitas";
import fajitas from "./fajitas";
import greenThaiCurry from "./green-thai-curry";
import lemonBars from "./lemon-bars";
import oysterMushroomBurgers from "./oyster-mushroom-burgers";
import padThai from "./pad-thai";
import redThaiCurry from "./red-thai-curry";
import roast from "./roast";
import springOnionPasta from "./spring-onion-pasta";
import sweetPotatoFriesFish from "./sweet-potato-fries-fish";

export type Ingredient = {
	name: string;
	optional?: boolean;
	quantity: string;
	unit: MeasurementUnit;
};

export type IngredientGroup = {
	name: string;
	ingredients: Ingredient[];
};

export type StepGroup = {
	name: string;
	steps: string[];
};

export type Recipe = {
	colour?: string;
	description?: string;
	emojis?: string;
	inspiration?: string[];
	ingredients: (Ingredient | IngredientGroup)[];
	related?: RecipeSlug[];
	// Number of servings yielded by the recipe
	servingSize?: number;
	slug: RecipeSlug;
	steps: (string | StepGroup)[];
	// Time in minutes
	time?: number;
	title: string;
	youtube?: string;
};

export const recipes: Recipe[] = [
	briocheBuns,
	cauliflowerMushroomBolognese,
	chilliGarlicTofuBao,
	chipotleMushroomFajitas,
	fajitas,
	greenThaiCurry,
	lemonBars,
	oysterMushroomBurgers,
	padThai,
	redThaiCurry,
	roast,
	springOnionPasta,
	sweetPotatoFriesFish,
];
