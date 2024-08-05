"use client";

import { useState, type CSSProperties } from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { recipes } from "@/data/recipes";
import { Checkbox } from "@radix-ui/react-checkbox";
import { Button } from "@/components/ui/button";
import { isIngredientGroup } from "@/utils";

export default function ShoppingList() {
	const [shoppingList, setShoppingList] = useState<string[]>([]);
	const [checked, setChecked] = useState<string[]>([]);

	function toggleRecipe(slug: string) {
		if (checked.includes(slug)) {
			setChecked((prev) => prev.filter((item) => item !== slug));
		} else {
			setChecked((prev) => [...prev, slug]);
		}
	}

	function createShoppingListFromRecipes(checked: string[]) {
		const ingredientsList = checked
			.map((slug) => recipes.find((recipe) => recipe.slug === slug))
			.filter((recipe): recipe is NonNullable<typeof recipe> => !!recipe)
			.map((recipe) => {
				const { ingredients } = recipe;

				return ingredients
					.map((ingredient) => {
						if (isIngredientGroup(ingredient)) {
							return ingredient.ingredients.map(
								(ingredient) => ingredient.name
							);
						}

						return ingredient.name;
					})
					.flat();
			})
			.flat();

		setShoppingList(ingredientsList);
	}

	if (shoppingList.length)
		return (
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-8">
				<div>
					<Card className="card">
						<CardHeader>
							<Button
								className="mb-4"
								onClick={() => {
									createShoppingListFromRecipes([]);
									setChecked([]);
								}}
							>
								Restart
							</Button>
							<CardTitle className="flex gap-2 items-center justify-between	">
								<span>Shopping list</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription className="text-lg">
								{Array.from(new Set(shoppingList))
									.sort((a, b) => a.localeCompare(b))
									.map((shoppingListItem) => (
										<li key={shoppingListItem}>{shoppingListItem}</li>
									))}
							</CardDescription>
						</CardContent>
					</Card>
				</div>
				<div>
					<Card className="card mb-4">
						<CardHeader>
							<CardTitle className="flex gap-2 items-center justify-between	">
								<span>Meals</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription className="text-lg">
								{Array.from(new Set(checked))
									.sort((a, b) => a.localeCompare(b))
									.map((meal) => (
										<li key={meal}>
											{recipes.find((recipe) => recipe.slug === meal)?.title}
										</li>
									))}
							</CardDescription>
						</CardContent>
					</Card>
				</div>
			</div>
		);

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
			{recipes.map((recipe) => (
				<Checkbox
					key={recipe.slug}
					className={`card-with-colour ${
						checked.includes(recipe.slug) ? "checked" : ""
					}`}
					style={
						{
							"--recipe-colour": recipe.colour,
						} as CSSProperties
					}
					onClick={() => toggleRecipe(recipe.slug)}
				>
					<Card className="card">
						<CardHeader>
							<CardTitle className="flex gap-2 items-center justify-between	">
								<span>{recipe.title}</span>{" "}
								<span className="whitespace-nowrap">{recipe.emojis}</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<CardDescription>{recipe.description}</CardDescription>
						</CardContent>
					</Card>
				</Checkbox>
			))}
			<Button
				disabled={!checked.length}
				onClick={() => {
					createShoppingListFromRecipes(checked);
				}}
			>
				{checked.length ? "Create shopping list" : "Select recipes"}
			</Button>
		</div>
	);
}
