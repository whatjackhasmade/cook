import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import "./custom.scss";
import "./globals.css";
import Breadcrumbs from "@/components/Breadcrumbs";

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Cookbook",
	description: "Some of my favorite recipes",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<ThemeProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				<body className={cn(fontSans.variable)}>
					<div className=" max-w-7xl mx-auto">
						<Breadcrumbs />
						{children}
					</div>
				</body>
			</ThemeProvider>
		</html>
	);
}
