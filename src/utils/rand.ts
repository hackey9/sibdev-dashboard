export function generateId(): string {
  return String(+new Date())
}

export function getAnyOf<T>(...args: T[]): T {
  const length = args.length
  const randomIndex = Math.floor(Math.random() * length)
  return args[randomIndex]
}

export function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}

export function arrayOfNumbers(n: number) {
  return [...Array.from({length: n}).keys()]
}
