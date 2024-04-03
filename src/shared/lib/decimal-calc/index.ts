export const sub = (a: number, b: number, positions: number = 4): number => {
  const factor = Math.pow(10, positions);
  return (
    (Number(a.toFixed(positions)) * factor -
      Number(b.toFixed(positions)) * factor) /
    factor
  );
};

export const sum = (a: number, b: number, positions: number = 4): number => {
  const factor = Math.pow(10, positions);
  return (
    (Number(a.toFixed(positions)) * factor +
      Number(b.toFixed(positions)) * factor) /
    factor
  );
};

export const mul = (a: number, b: number, positions: number = 4): number => {
  const factor = Math.pow(10, positions);
  return (
    (Number(a.toFixed(positions)) *
      factor *
      Number(b.toFixed(positions)) *
      factor) /
    factor /
    factor
  );
};

export const div = (a: number, b: number, positions: number = 4): number => {
  const factor = Math.pow(10, positions);
  return Number(
    (
      (Number(a.toFixed(positions)) * factor) /
      (Number(b.toFixed(positions)) * factor)
    ).toFixed(positions),
  );
};
