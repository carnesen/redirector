export function echo(...args: Parameters<typeof console.log>) {
  console.log(...args); // eslint-disable-line no-console
}
