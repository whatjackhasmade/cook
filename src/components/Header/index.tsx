export default function Header() {
	return (
		<header className="flex items-center justify-between py-8 backdrop-blur-sm text-sm">
			<nav className="hidden lg:flex items-center gap-4">
				<a href="/" className="text-gray-400">
					Homepage
				</a>
				<a href="/shopping" className="text-gray-400">
					Shopping
				</a>
			</nav>
		</header>
	);
}
