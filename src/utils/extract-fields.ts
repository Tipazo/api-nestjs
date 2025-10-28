export function extractFields<T>(source: any, map: Record<keyof T, string>): T {
  const result = {} as T;

  for (const key in map) {
    const path = map[key];
    const value = path.split('.').reduce((acc, part) => {
      if (acc === undefined || acc === null) return undefined;
      return /^\d+$/.test(part) ? acc[parseInt(part)] : acc[part];
    }, source);

    result[key] = value;
  }

  return result;
}
