export function getYouTubeIDFromURL(url: string): string | undefined {
	const regex =
		/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
	const match = url.match(regex);
	return match ? match[7] : undefined;
}
