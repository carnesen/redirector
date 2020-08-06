export function echo(...args: Parameters<typeof console.log>): void {
	console.log(...args); // eslint-disable-line no-console
}
