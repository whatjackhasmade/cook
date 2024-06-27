import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { recipes } from "@/data/recipes";
import Link from "next/link";
import { CSSProperties } from "react";

export default function Home() {
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mt-8">
			{recipes.map((recipe) => (
				<Link
					href={`/${recipe.slug}`}
					key={recipe.slug}
					className="card-with-colour"
					style={
						{
							"--recipe-colour": recipe.colour,
						} as CSSProperties
					}
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
						{(!recipe.ingredients.length || !recipe.steps.length) && (
							<CardFooter>
								<ul>
									{!recipe.ingredients.length && (
										<li
											style={{
												color: "#dc2626",
											}}
										>
											Missing ingredients
										</li>
									)}
									{!recipe.steps.length && (
										<li
											style={{
												color: "#dc2626",
											}}
										>
											Missing steps
										</li>
									)}
								</ul>
							</CardFooter>
						)}
					</Card>
				</Link>
			))}
		</div>
	);
}
