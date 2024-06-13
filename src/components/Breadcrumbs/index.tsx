"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { recipes } from "@/data/recipes";

function capitalize(s: string) {
	return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function Breadcrumbs() {
	const pathname = usePathname();
	const segments = pathname.split("/").filter((item) => item !== "");

	const items = segments.map((item, index) => {
		const joined = segments.slice(0, index + 1).join("/");
		const url = `/${joined}`;

		const matched = recipes.find((recipe) => recipe.slug === joined);

		return {
			disabled: index === segments.length - 1,
			url: url,
			children: matched?.title
				? `${matched.emojis} ${matched.title}`
				: capitalize(item),
			label: `Go to ${capitalize(item)} `,
		};
	});

	return (
		<Breadcrumb className="hidden md:flex mt-8">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink asChild>
						<Link aria-label="Home" href="/">
							Home
						</Link>
					</BreadcrumbLink>
				</BreadcrumbItem>
				{!!items.length && <BreadcrumbSeparator />}
				{items.map((item, index) => (
					<React.Fragment key={item.url}>
						<BreadcrumbItem>
							<BreadcrumbLink asChild>
								<Link aria-label={item.label} href={item.url}>
									{item.children}
								</Link>
							</BreadcrumbLink>
						</BreadcrumbItem>
						{index < items.length - 1 && <BreadcrumbSeparator />}
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	);
}
