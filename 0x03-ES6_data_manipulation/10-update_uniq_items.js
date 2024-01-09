export default function updateUniqueItems(Map) {
  for (const [key, value] of Map) {
    if (value === 1) {
      Map.set(key, 100);
    }
  }
  return Map;
}
