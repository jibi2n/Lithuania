export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// localStorage can throw (private mode, blocked storage); the games work without it.
export function bestScore(key: string): number | null {
  try {
    const v = localStorage.getItem(`labas-best-${key}`);
    return v === null ? null : Number(v);
  } catch {
    return null;
  }
}

export function setBest(key: string, value: number) {
  try {
    localStorage.setItem(`labas-best-${key}`, String(value));
  } catch {}
}
