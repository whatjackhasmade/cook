import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useRecipe } from "../context";
import { MeasurementUnit } from "@/enums";

export default function Ingredients() {
  const { recipe } = useRecipe();
  const { ingredients } = recipe;

  const orderedIngredients = [...ingredients].sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return (
    <section className="space-y-4">
      <div className="grid grid-cols-1 gap-y-3">
        {orderedIngredients.map((ingredient) => {
          return (
            <div className="flex items-center space-x-2" key={ingredient.name}>
              <Checkbox id={ingredient.name} />
              <Label htmlFor={ingredient.name} className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {ingredient.quantity}
                {
                  {
                    [MeasurementUnit.Grams]: "g",
                    [MeasurementUnit.Milliliters]: "ml",
                    [MeasurementUnit.Count]: "",
                    [MeasurementUnit.Tablespoons]: " tbsp",
                    [MeasurementUnit.Teaspoons]: " tsp",
                    [MeasurementUnit.Litres]: "l",
                  }[ingredient.unit]
                }{" "}
                {ingredient.name}
              </Label>
            </div>
          );
        })}
      </div>
    </section>
  );
}
