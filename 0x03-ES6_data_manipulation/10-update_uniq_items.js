export default function updateUniqueItems(Map) {
  try {
    if (!(Map instanceof Map)) {
      throw new Error('Cannot process');
    }

    for (const [key, value] of Map) {
      if (value === 1) {
        Map.set(key, 100);
      }
    }
  return Map;
  } catch (err) {
    return (err);
  }
}
