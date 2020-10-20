export function toMap<T extends { id: string }>(data: T[]): Map<string, T> {
  return data.reduce((p, d) => p.set(d.id, d), new Map());
}

export function fromMap<T extends { id: string }>(data: Map<string, T>): T[] {
  const arr = [];
  for (const value of data.values()) {
    arr.push(value);
  }
  return arr;
}
