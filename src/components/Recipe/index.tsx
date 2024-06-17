"use client";

import Ingredients from "./Ingredients";
import { withRecipeContext } from "./context";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Steps from "./Steps";

export interface RecipeFormSchema {
	ingredients: string[];
}

function Recipe() {
	return (
		<>
			<Tabs className="mb-20" defaultValue="ingredients">
				<TabsList className="mb-8 mt-8">
					<TabsTrigger value="ingredients">Ingredients</TabsTrigger>
					<TabsTrigger value="steps">Steps</TabsTrigger>
				</TabsList>
				<TabsContent value="ingredients">
					<Ingredients />
				</TabsContent>
				<TabsContent value="steps">
					<Steps />
				</TabsContent>
			</Tabs>
		</>
	);
}

export default withRecipeContext(Recipe);
