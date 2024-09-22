export const now = () => new Date().getTime()

export const timeElapsedFrom = (timestamp: number) => Math.abs(now() - timestamp)
