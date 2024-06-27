import { StepGroup } from "@/data/recipes";
import { useRecipe } from "../../context";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

function StepRow({ position, step }: { position: number; step: string }) {
	return (
		<TableRow key={step} className="text-xl">
			<TableCell className="text-right">{position}</TableCell>
			<TableCell>{step}</TableCell>
		</TableRow>
	);
}

function isStepGroup(step: string | StepGroup): step is StepGroup {
	return typeof step !== "string";
}

function StepRowGroup({ stepGroup }: { stepGroup: StepGroup }) {
	return (
		<>
			<TableRow
				key={stepGroup.name}
				className="text-sm uppercase tracking-wider	font-bold text-muted-foreground"
			>
				<TableCell />
				<TableCell>{stepGroup.name}</TableCell>
			</TableRow>
			{stepGroup.steps.map((step, index) => (
				<StepRow key={step} step={step} position={index + 1} />
			))}
		</>
	);
}

export default function StepInstructions() {
	const { recipe } = useRecipe();
	const { steps } = recipe;

	return (
		<Table>
			<TableHeader>
				<TableRow>
					<TableHead className="text-right">Step</TableHead>
					<TableHead>Instructions</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{steps.map((step, index) => {
					if (isStepGroup(step)) {
						return <StepRowGroup key={step.name} stepGroup={step} />;
					}

					return <StepRow key={step} step={step} position={index + 1} />;
				})}
			</TableBody>
		</Table>
	);
}
