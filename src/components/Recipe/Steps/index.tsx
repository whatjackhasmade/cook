import { useRecipe } from "../context";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function Steps() {
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
        {steps.map((step, index) => (
          <TableRow key={step.content} className="text-xl">
            <TableCell className="text-right">{index + 1}</TableCell>
            <TableCell>{step.content}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
