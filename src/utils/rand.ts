export function generateId(): string {
  return String(+new Date())
}

export function getAnyOf<T>(...args: T[]): T {
  const length = args.length
  const randomIndex = Math.floor(Math.random() * length)
  return args[randomIndex]
}
